/** BashaMate Courtyard Editorial: local demo state that models interaction without claiming backend persistence. */

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { listings, type Listing } from "@/lib/mock-data";

type ChatMessage = {
  id: string;
  sender: "You" | string;
  text: string;
  time: string;
};

function automaticReply(message: string) {
  const question = message.toLowerCase();
  if (/(available|still there|vacant|free)/.test(question)) return "Yes, the room is currently available. What month are you planning to move in?";
  if (/(wide|size|large|space|spacious|square)/.test(question)) return "It has space for a bed, study table, and wardrobe. You can request a viewing before deciding.";
  if (/(rent|price|cost|month|monthly)/.test(question)) return "The monthly rent is shown on the listing. Utility costs and advance payment can be discussed before a viewing.";
  if (/(visit|view|see|weekend|meet)/.test(question)) return "A viewing can be arranged at a convenient time. Please share which day and time work for you.";
  if (/(hi|hello|assalamualaikum|chat)/.test(question)) return "Hello! Yes, I am available to chat. What would you like to know about the room?";
  return "Thanks for your message. Please ask about availability, rent, room size, or a possible viewing time.";
}

type BashaMateContextValue = {
  favoriteIds: string[];
  favorites: Listing[];
  toggleFavorite: (listingId: string) => void;
  hasInquired: (listingId: string) => boolean;
  sendInquiry: (listingId: string) => void;
  messages: ChatMessage[];
  sendMessage: (text: string) => void;
};

const BashaMateContext = createContext<BashaMateContextValue | null>(null);

const storageKey = "bashamate-demo-favorites";

export function BashaMateProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [inquiryIds, setInquiryIds] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-message",
      sender: "Naila A.",
      text: "Hi! I am also looking for a place in Dhaka. Want to compare budgets?",
      time: "10:42 AM",
    },
  ]);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setFavoriteIds(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value = useMemo<BashaMateContextValue>(() => {
    const favorites = listings.filter((listing) => favoriteIds.includes(listing.id));
    return {
      favoriteIds,
      favorites,
      toggleFavorite: (listingId) => {
        setFavoriteIds((current) =>
          current.includes(listingId)
            ? current.filter((id) => id !== listingId)
            : [...current, listingId],
        );
      },
      hasInquired: (listingId) => inquiryIds.includes(listingId),
      sendInquiry: (listingId) => {
        setInquiryIds((current) =>
          current.includes(listingId) ? current : [...current, listingId],
        );
      },
      messages,
      sendMessage: (text) => {
        const trimmedText = text.trim();
        if (!trimmedText) return;
        setMessages((current) => [
          ...current,
          {
            id: `demo-message-${Date.now()}`,
            sender: "You",
            text: trimmedText,
            time: "Just now",
          },
        ]);
        window.setTimeout(() => {
          setMessages((current) => [...current, { id: `reply-${Date.now()}`, sender: "Naila A.", text: automaticReply(trimmedText), time: "Just now" }]);
        }, 500);
      },
    };
  }, [favoriteIds, inquiryIds, messages]);

  return <BashaMateContext.Provider value={value}>{children}</BashaMateContext.Provider>;
}

export function useBashaMate() {
  const context = useContext(BashaMateContext);
  if (!context) {
    throw new Error("useBashaMate must be used within BashaMateProvider");
  }
  return context;
}
