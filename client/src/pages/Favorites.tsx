/** BashaMate practical marketplace: saved rental listings stored locally for convenient comparison. */

import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "wouter";
import AppShell from "@/components/AppShell";
import ListingCard from "@/components/ListingCard";
import PageHeader from "@/components/PageHeader";
import { useBashaMate } from "@/contexts/BashaMateContext";

export default function Favorites() {
  const { favorites } = useBashaMate();
  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Saved listings" title="Listings you want to review later." description="Save rental homes here to compare rent, location, and tenant preference before you contact a landlord." aside={<span className="field-note text-[#a65a3b]">{favorites.length} saved</span>} />
        {favorites.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{favorites.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <section className="mt-7 overflow-hidden rounded-[1.3rem] border border-[#e6dac9] bg-[#fffaf1] p-7 sm:p-10"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><div className="grid size-12 place-items-center rounded-xl bg-[#f0d9ca] text-[#b7522e]"><Heart className="size-5" /></div><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em]">No saved listings yet.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#68746d]">Use the heart button on any rental listing to save it here for later comparison.</p><Link href="/explore" className="primary-action mt-6">Browse homes <ArrowRight className="size-4" /></Link></div><div className="rounded-[1.2rem] bg-[#dce9df] p-6 text-[#1f6b55]"><Sparkles className="size-9" /><p className="mt-10 font-display text-2xl font-semibold leading-6">Compare rent,<br />location, and fit.</p></div></div></section>}
      </div>
    </AppShell>
  );
}
