/** BashaMate practical marketplace: listing detail page focused on rent, location, tenant preference, and inquiry. */

import { ArrowLeft, BedDouble, Check, Heart, MapPin, MessageCircle, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import { Link, useRoute } from "wouter";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import { formatTaka, listings } from "@/lib/mock-data";
import { fallbackImages } from "@/lib/mock-data";
import { useBashaMate } from "@/contexts/BashaMateContext";
import BashaImage from "@/components/BashaImage";
import VerificationSeal from "@/components/VerificationSeal";

export default function ListingDetail() {
  const [, params] = useRoute("/listing/:id");
  const listing = listings.find((item) => item.id === params?.id);
  const { favoriteIds, toggleFavorite, hasInquired, sendInquiry } = useBashaMate();

  if (!listing) {
    return (
      <AppShell><div className="page-wrap py-12"><Link href="/explore" className="text-link"><ArrowLeft className="size-4" /> Back to homes</Link><h1 className="mt-8 font-display text-4xl font-semibold">This sample home is unavailable.</h1></div></AppShell>
    );
  }

  const isFavorite = favoriteIds.includes(listing.id);
  const inquirySent = hasInquired(listing.id);
  const sendDemoInquiry = () => {
    sendInquiry(listing.id);
    toast.success(inquirySent ? "Your inquiry has already been sent." : "Inquiry sent.", { description: "The course prototype stores this action locally." });
  };

  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <Link href="/explore" className="text-link"><ArrowLeft className="size-4" /> Back to search</Link>
        <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_360px] xl:items-start">
          <div>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e5dac8] bg-[#e7dcc9]">
              <BashaImage src={listing.image} fallback={listing.image.includes("hero") ? fallbackImages.hero : fallbackImages.interior} alt="Interior view of the sample listing" className="h-[340px] w-full object-cover sm:h-[520px]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#172d31]/52 to-transparent" />
              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2 sm:bottom-7 sm:left-7">
                <span className={`rounded-full px-3 py-1.5 text-xs font-extrabold ${listing.type === "Bachelor friendly" ? "bg-[#e7f0e9] text-[#1f6b55]" : "bg-[#fff1e9] text-[#ae512f]"}`}>{listing.type}</span>
                {listing.landlord.verified && <VerificationSeal label="Verified host" />}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-5 border-b border-[#e5dac9] pb-7 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="field-note text-[#376d5a]">{listing.availability}</p>
                <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.93] tracking-[-0.06em]">{listing.title}</h1>
                <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#607069]"><MapPin className="size-4 text-[#1f6b55]" /> {listing.area} · {listing.distance}</p>
              </div>
              <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#1f6b55]">{formatTaka(listing.rent)}<span className="ml-1 font-sans text-sm font-bold text-[#65736c]">/ month</span></p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <section>
                <p className="field-note text-[#6b756e]">About this place</p>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#53625d]">{listing.description}</p>
              </section>
              <section className="rounded-[1.35rem] border border-[#e6dac9] bg-[#fffaf1] p-5">
                <p className="field-note text-[#6b756e]">Home details</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 font-bold"><BedDouble className="size-4 text-[#1f6b55]" /> {listing.bedrooms} bedroom{listing.bedrooms > 1 ? "s" : ""}</span>
                  <span className="inline-flex items-center gap-2 font-bold"><UtensilsCrossed className="size-4 text-[#1f6b55]" /> {listing.furnished ? "Furnished" : "Unfurnished"}</span>
                  <span className="inline-flex items-center gap-2 font-bold"><Sparkles className="size-4 text-[#1f6b55]" /> {listing.bathroom} bathroom{listing.bathroom > 1 ? "s" : ""}</span>
                  <span className="inline-flex items-center gap-2 font-bold"><Check className="size-4 text-[#1f6b55]" /> Student enquiry</span>
                </div>
              </section>
            </div>

            <section className="mt-7 border-t border-[#e5dac9] pt-7">
              <p className="field-note text-[#6b756e]">Included amenities</p>
              <div className="mt-4 flex flex-wrap gap-2.5">{listing.amenities.map((amenity) => <span key={amenity} className="rounded-full border border-[#ded1bd] bg-[#fffaf1] px-3.5 py-2 text-xs font-bold text-[#4f5d57]">{amenity}</span>)}</div>
            </section>
          </div>

          <aside className="rounded-[1.55rem] border border-[#e5dac9] bg-[#fffaf1] p-5 shadow-[0_16px_32px_rgba(68,57,40,.06)] xl:sticky xl:top-6">
            <p className="field-note text-[#376d5a]">Interested in this listing?</p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">Save it or send an inquiry.</h2>
            <p className="mt-2 text-sm leading-6 text-[#68746d]">Save the listing to compare later, or send an inquiry to the landlord.</p>
            <button type="button" onClick={sendDemoInquiry} className="decision-action mt-5 w-full">
              <MessageCircle className="size-4" /> {inquirySent ? "Inquiry in demo inbox" : "Send inquiry"}
            </button>
            <button type="button" onClick={() => { toggleFavorite(listing.id); toast.success(isFavorite ? "Removed from saved homes." : "Saved to your homes."); }} className="secondary-action mt-3 w-full">
              <Heart className="size-4" fill={isFavorite ? "currentColor" : "none"} /> {isFavorite ? "Saved to your homes" : "Save this home"}
            </button>
            <div className="mt-6 border-t border-[#eee3d2] pt-5">
              <p className="field-note text-[#6b756e]">Host signal</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-[#d9e6dc] font-display text-lg font-semibold text-[#1f6b55]">{listing.landlord.name.charAt(0)}</div>
                <div><p className="text-sm font-extrabold">{listing.landlord.name}</p><p className="text-xs text-[#728078]">{listing.landlord.role}</p></div>
              </div>
              {listing.landlord.verified && <div className="mt-3"><VerificationSeal label="BashaMate verified host" /></div>}
              <p className="mt-4 rounded-xl bg-[#f4eee3] p-3 text-xs leading-5 text-[#68746d]">Contact details should be shared only after an inquiry is accepted.</p>
            </div>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}
