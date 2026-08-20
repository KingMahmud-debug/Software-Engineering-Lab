/** BashaMate practical marketplace: direct Bangladesh-wide search tasks with a restrained visual hierarchy. */

import { ArrowRight, CheckCircle2, Compass, Heart, Search, Sparkles } from "lucide-react";
import { Link } from "wouter";
import AppShell from "@/components/AppShell";
import ListingCard from "@/components/ListingCard";
import { fallbackImages, listingImages, listings } from "@/lib/mock-data";
import BashaImage from "@/components/BashaImage";

const steps = [
  { number: "01", title: "Search by city and rent", text: "Use city, area, and budget filters to find suitable rental homes.", icon: Search },
  { number: "02", title: "Check tenant preference", text: "See bachelor-friendly tags before you contact a landlord.", icon: Sparkles },
  { number: "03", title: "Save and contact", text: "Save useful listings and send an inquiry when you are ready.", icon: Heart },
];

export default function Home() {
  return (
    <AppShell>
      <div className="page-wrap pb-8 pt-6 sm:pt-8 lg:pb-12 lg:pt-10">
        <section className="relative overflow-hidden rounded-[1.6rem] border border-[#e5dac8] bg-[#eee3d1] px-5 py-7 sm:px-8 sm:py-10 xl:px-12 xl:py-12">
          <div className="hero-grain" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.94fr)] lg:gap-10">
            <div className="max-w-xl">
              <p className="field-note mb-4 text-[#376d5a]">Housing and roommate search for Bangladesh</p>
              <h1 className="font-display text-[clamp(2.65rem,5.3vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#172d31]">
                Find rental homes and <em className="font-normal text-[#c75c36]">roommates</em> in one place.
              </h1>
              <p className="mt-5 max-w-lg text-[0.96rem] leading-7 text-[#50615b] sm:text-[1.02rem]">
                Search listings across Bangladesh by city, area, rent, and tenant preference. Save listings, compare options, and find potential roommates.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/explore" className="primary-action">Browse rental homes <ArrowRight className="size-4" /></Link>
                <Link href="/roommates" className="secondary-action"><Sparkles className="size-4" /> Browse roommates</Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#dacdbb] pt-5 text-xs font-semibold text-[#5b6962]">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-[#1f6b55]" /> Bangladesh-wide search</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-[#1f6b55]" /> Bachelor-friendly listings</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-t-[6rem] rounded-b-[1.6rem] border-[7px] border-[#f9f3e9] shadow-[0_20px_45px_rgba(61,53,35,0.16)]">
                <BashaImage src={listingImages.hero} fallback={fallbackImages.hero} alt="A rental home interior" className="h-[350px] w-full object-cover sm:h-[420px]" />
              </div>
              <div className="absolute -bottom-4 -left-2 max-w-[240px] rounded-xl border border-[#e7dac7] bg-[#fffaf1]/95 p-3 shadow-[0_12px_24px_rgba(50,50,35,0.12)] backdrop-blur-sm sm:-left-5">
                <div className="flex items-center gap-2"><div className="grid size-7 place-items-center rounded-full bg-[#d9e6dc] text-[#1f6b55]"><Compass className="size-3.5" /></div><p className="text-xs font-extrabold">Search by city, rent, and tenant preference.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="finding-strip mt-5">
          <div className="flex flex-1 items-center gap-3 px-4 py-3.5 sm:px-5"><Search className="size-5 text-[#1f6b55]" /><div className="min-w-0"><p className="field-note text-[0.58rem]">Search by location</p><p className="truncate text-sm font-bold text-[#25383a]">Dhaka, Chattogram, Rajshahi, Khulna and more</p></div></div>
          <div className="hidden border-l border-[#e3d8c7] px-5 py-3.5 sm:block"><p className="field-note text-[0.58rem]">Monthly rent</p><p className="text-sm font-bold text-[#25383a]">৳8,000 — ৳16,000</p></div>
          <Link href="/explore" className="m-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#172d31] px-4 py-3 text-xs font-extrabold text-[#fffaf1] transition hover:bg-[#284248] active:scale-[0.97] sm:px-5">Search homes <ArrowRight className="size-4" /></Link>
        </section>

        <section className="mt-14 sm:mt-18">
          <div className="section-heading-row"><div><p className="field-note text-[#376d5a]">How BashaMate works</p><h2 className="section-heading">Search, compare, and contact.</h2></div><Link href="/explore" className="text-link hidden sm:inline-flex">Browse all homes <ArrowRight className="size-4" /></Link></div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{steps.map((step) => { const Icon = step.icon; return <article key={step.number} className="paper-card p-5"><div className="mb-6 flex items-start justify-between"><div className="grid size-10 place-items-center rounded-xl bg-[#e5eee5] text-[#1f6b55]"><Icon className="size-5" /></div><span className="text-sm font-bold text-[#b6a690]">{step.number}</span></div><h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#65716b]">{step.text}</p></article>; })}</div>
        </section>

        <section className="mt-14 sm:mt-18">
          <div className="section-heading-row"><div><p className="field-note text-[#376d5a]">Recent listings</p><h2 className="section-heading">Rental homes across Bangladesh.</h2></div><Link href="/explore" className="text-link hidden sm:inline-flex">View all listings <ArrowRight className="size-4" /></Link></div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{listings.slice(0, 3).map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div>
          <Link href="/explore" className="secondary-action mt-5 sm:hidden">View all listings <ArrowRight className="size-4" /></Link>
        </section>

        <section className="mt-14 overflow-hidden rounded-[1.6rem] bg-[#1c403a] sm:mt-18">
          <div className="grid items-stretch lg:grid-cols-[0.88fr_1.12fr]"><div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-11 lg:px-12"><p className="field-note text-[#b9d4c1]">Roommate search</p><h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#fffaf1]">Find roommates with similar preferences.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#d2e2d5] sm:text-base">Compare location, budget, and lifestyle preferences before deciding whether you want to connect.</p><Link href="/roommates" className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#f7e8bb] px-4 py-3 text-sm font-extrabold text-[#173d35] transition hover:bg-[#fff0c5] active:scale-[0.97]">Browse roommates <ArrowRight className="size-4" /></Link></div><div className="relative min-h-[330px] overflow-hidden lg:min-h-[400px]"><BashaImage src={listingImages.rooftop} fallback={fallbackImages.rooftop} alt="Students discussing housing plans together" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#1c403a]/35 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 rounded-xl border border-white/25 bg-[#fbf5ea]/95 p-3 text-[#172d31] shadow-lg backdrop-blur-sm"><p className="field-note text-[0.57rem] text-[#376d5a]">Compare preferences</p><p className="mt-1 text-sm font-extrabold">City · Budget · Routine</p></div></div></div>
        </section>
      </div>
    </AppShell>
  );
}
