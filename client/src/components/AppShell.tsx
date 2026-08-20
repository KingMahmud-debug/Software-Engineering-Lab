/** BashaMate Courtyard Editorial: asymmetric navigation rail, warm paper surfaces, and clear wayfinding. */

import { Link, useLocation } from "wouter";
import {
  Building2,
  Compass,
  Heart,
  House,
  MessageCircle,
  Plus,
  Sparkles,
  UserRound,
} from "lucide-react";
import { listingImages } from "@/lib/mock-data";
import { fallbackImages } from "@/lib/mock-data";
import BashaImage from "@/components/BashaImage";
import { useAuth } from "@/contexts/AuthContext";

const primaryNav = [
  { href: "/", label: "Home", icon: House },
  { href: "/explore", label: "Browse homes", icon: Compass },
  { href: "/roommates", label: "Roommates", icon: Sparkles },
  { href: "/messages", label: "Messages", icon: MessageCircle },
];

const accountNav = [
  { href: "/favorites", label: "Saved listings", icon: Heart },
  { href: "/profile", label: "My profile", icon: UserRound },
];

function NavigationLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: typeof House;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition duration-200 ${
        active
          ? "bg-[#1f6b55] text-[#fffaf1] shadow-[0_8px_18px_rgba(31,107,85,0.16)]"
          : "text-[#53615c] hover:bg-[#eee5d6] hover:text-[#172d31]"
      }`}>
      <Icon className="size-4 shrink-0" strokeWidth={active ? 2.25 : 1.9} />
      <span>{label}</span>
    </Link>
  );
}

export default function AppShell({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  const [location] = useLocation();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#fbf5ea] text-[#172d31] selection:bg-[#d9e6dc]">
      <header className="sticky top-0 z-40 border-b border-[#e7ddcc]/80 bg-[#fbf5ea]/92 backdrop-blur-xl lg:hidden">
        <div className="flex h-17 items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="BashaMate home">
            <BashaImage src={listingImages.logo} fallback={fallbackImages.logo} alt="" className="size-9 object-contain" />
            <span className="font-display text-[1.35rem] font-semibold tracking-[-0.04em]">
              Basha<span className="font-display italic font-normal">Mate</span>
            </span>
          </Link>
          <Link
            href="/auth"
            aria-label={user ? "Open your account" : "Sign in or register"}
            className="grid size-10 place-items-center rounded-full border border-[#ddd1bd] bg-[#fffaf1] text-[#1f6b55] shadow-sm">
            <UserRound className="size-4" />
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-[250px] shrink-0 flex-col border-r border-[#e7ddcc]/85 bg-[#f7f0e4] px-5 py-7 lg:flex">
          <Link href="/" className="mb-10 flex items-center gap-3" aria-label="BashaMate home">
            <BashaImage src={listingImages.logo} fallback={fallbackImages.logo} alt="" className="size-10 object-contain" />
            <span className="font-display text-[1.65rem] font-semibold tracking-[-0.055em] text-[#172d31]">
              Basha<span className="font-display italic font-normal">Mate</span>
            </span>
          </Link>

          <div className="space-y-1">
            <p className="field-note px-3 pb-2">Search</p>
            {primaryNav.map((item) => (
              <NavigationLink key={item.href} {...item} active={location === item.href} />
            ))}
          </div>

          <div className="mt-7 space-y-1">
            <p className="field-note px-3 pb-2">Account</p>
            {accountNav.map((item) => (
              <NavigationLink key={item.href} {...item} active={location === item.href} />
            ))}
          </div>

          <Link href="/auth" className="mt-auto flex items-center gap-3 rounded-[1.15rem] border border-[#e2d6c4] bg-[#fffaf1] p-3.5 shadow-[0_8px_20px_rgba(45,56,47,0.05)] transition hover:border-[#b7cdbb]">
            <div className="grid size-9 place-items-center rounded-xl bg-[#dce9df] font-display text-lg font-semibold text-[#1f6b55]">{user?.name.charAt(0) || "F"}</div>
            <div className="min-w-0"><p className="truncate text-sm font-extrabold">{user?.name || "Faisal Mahmud"}</p><p className="mt-0.5 text-xs text-[#66716b]">{user ? "Signed in" : "Sign in or register"}</p></div>
          </Link>
          <div className="mt-4 rounded-[1.2rem] border border-[#e2d6c4] bg-[#fffaf1] p-4 shadow-[0_12px_28px_rgba(45,56,47,0.06)]">
            <div className="mb-3 flex size-8 items-center justify-center rounded-xl bg-[#f0d9ca] text-[#b7522e]">
              <Building2 className="size-4" />
            </div>
            <p className="text-sm font-extrabold tracking-[-0.02em]">Are you a landlord?</p>
            <p className="mt-1 text-xs leading-5 text-[#66716b]">Add a rental listing and review inquiries.</p>
            <Link href="/landlord" className="mt-3 inline-flex text-xs font-extrabold text-[#1f6b55] underline decoration-[#9bbdaa] underline-offset-4">
              Landlord dashboard
            </Link>
          </div>
        </aside>

        <main className={`min-w-0 flex-1 ${compact ? "" : "pb-24 lg:pb-10"}`}>{children}</main>
      </div>

      {!compact && (
        <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e3d9ca] bg-[#fffaf1]/95 px-2 pb-[max(0.55rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-md items-center justify-around">
            {primaryNav.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-w-15 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[0.63rem] font-bold transition ${
                    active ? "text-[#1f6b55]" : "text-[#727b76]"
                  }`}>
                  <Icon className="size-[1.15rem]" strokeWidth={active ? 2.35 : 1.8} />
                  <span>{item.label.split(" ")[0]}</span>
                </Link>
              );
            })}
            <Link
              href="/create-listing"
              aria-label="Add a rental listing"
              className="-mt-7 grid size-13 place-items-center rounded-full border-[5px] border-[#fbf5ea] bg-[#c75c36] text-white shadow-[0_10px_18px_rgba(185,78,43,0.3)]">
              <Plus className="size-5" />
            </Link>
            <Link
              href="/messages"
              className={`flex min-w-15 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[0.63rem] font-bold transition ${
                location === "/messages" ? "text-[#1f6b55]" : "text-[#727b76]"
              }`}>
              <MessageCircle className="size-[1.15rem]" strokeWidth={location === "/messages" ? 2.35 : 1.8} />
              <span>Messages</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
