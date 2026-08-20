/** BashaMate practical marketplace: landlord tools for rental listings and applicant inquiries. */

import { ArrowRight, Building2, CheckCircle2, ClipboardList, Eye, Plus, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { listings, formatTaka } from "@/lib/mock-data";
import { fallbackImages } from "@/lib/mock-data";
import BashaImage from "@/components/BashaImage";
import VerificationSeal from "@/components/VerificationSeal";

const applicants = [
  { name: "Faisal Mahmud", program: "CSE · Student profile", home: "2-bedroom flat near Dhanmondi", status: "New inquiry", color: "bg-[#dce9df]" },
  { name: "Mim Sultana", program: "Economics · Student profile", home: "Quiet room with a leafy balcony", status: "Ready to review", color: "bg-[#f0d9ca]" },
];

export default function Landlord() {
  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Landlord dashboard" title="Manage your rental listings and inquiries." description="Add a rental home, set tenant preference, and review student inquiries in one place." aside={<Link href="/create-listing" className="decision-action"><Plus className="size-4" /> Add a listing</Link>} />
        <section className="mt-7 grid gap-4 sm:grid-cols-3">
          {[{ label: "Active listings", value: "2", icon: Building2, color: "bg-[#dce9df] text-[#1f6b55]" }, { label: "New inquiries", value: "2", icon: UsersRound, color: "bg-[#f0d9ca] text-[#b7522e]" }, { label: "Listings with tenant preference", value: "100%", icon: CheckCircle2, color: "bg-[#f7e8bb] text-[#6e5a16]" }].map((stat) => { const Icon = stat.icon; return <article key={stat.label} className="paper-card p-5"><div className={`grid size-10 place-items-center rounded-2xl ${stat.color}`}><Icon className="size-5" /></div><p className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em]">{stat.value}</p><p className="mt-1 text-xs font-bold text-[#6b776f]">{stat.label}</p></article>; })}
        </section>
          <div className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_370px]">
          <div className="rounded-[1.55rem] border border-[#e5dac9] bg-[#fffaf1] p-5 sm:p-6"><div className="flex items-end justify-between gap-4"><div><p className="field-note text-[#376d5a]">Your listings</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">Active rental homes.</h2></div><Link href="/create-listing" className="text-link hidden sm:inline-flex">Add a listing <ArrowRight className="size-4" /></Link></div><div className="mt-6 divide-y divide-[#ebe0d0]">{listings.slice(0, 2).map((listing) => <div key={listing.id} className="flex flex-col gap-4 py-5 first:pt-0 sm:flex-row sm:items-center"><BashaImage src={listing.image} fallback={listing.image.includes("hero") ? fallbackImages.hero : fallbackImages.interior} alt="" className="h-20 w-full rounded-2xl object-cover sm:w-28" /><div className="min-w-0 flex-1"><p className="text-sm font-extrabold">{listing.title}</p><p className="mt-1 text-xs text-[#6f7c74]">{listing.area} · {formatTaka(listing.rent)} / month</p><span className="mt-2 inline-flex rounded-full bg-[#dce9df] px-2.5 py-1 text-[0.61rem] font-extrabold text-[#1f6b55]">Bachelor-friendly</span></div><button type="button" onClick={() => toast.info("Listing details are represented in this course prototype.")} className="secondary-action shrink-0"><Eye className="size-4" /> View details</button></div>)}</div></div>
          <aside className="rounded-[1.55rem] bg-[#1c403a] p-5 text-[#fffaf1] sm:p-6"><div className="flex size-10 items-center justify-center rounded-2xl bg-[#f7e8bb] text-[#1c403a]"><ClipboardList className="size-5" /></div><p className="field-note mt-6 text-[#b9d4c1]">New inquiries</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">Review interested tenants.</h2><div className="mt-5 space-y-3">{applicants.map((applicant) => <div key={applicant.name} className="rounded-2xl bg-white/10 p-3.5"><div className="flex items-center gap-3"><div className={`grid size-9 place-items-center rounded-xl ${applicant.color} font-display text-lg text-[#24423e]`}>{applicant.name.charAt(0)}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-extrabold">{applicant.name}</p><p className="mt-0.5 text-[0.67rem] text-[#c8dacd]">{applicant.program}</p></div><VerificationSeal label="Verified" /></div><p className="mt-3 text-xs text-[#d2e2d5]">For: {applicant.home}</p><button type="button" className="mt-3 text-xs font-extrabold text-[#f7e8bb] underline underline-offset-4" onClick={() => toast.info("Applicant profiles can be connected to the backend later.")}>{applicant.status}</button></div>)}</div><Link href="/admin" className="mt-6 inline-flex text-xs font-extrabold text-[#f7e8bb] underline underline-offset-4">View moderation page</Link></aside>
          </div>
      </div>
    </AppShell>
  );
}
