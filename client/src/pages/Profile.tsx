/** BashaMate Courtyard Editorial: a transparent verification-progress interface that does not claim real identity checks. */

import { BadgeCheck, CheckCircle2, ChevronRight, ClipboardCheck, ShieldCheck, UserRound } from "lucide-react";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { useAuth } from "@/contexts/AuthContext";
import VerificationSeal from "@/components/VerificationSeal";

const verificationSteps = [
  { title: "Basic profile", text: "Name, university area, and preferred contact method", done: true, icon: UserRound },
  { title: "Phone confirmation", text: "A real product would confirm ownership with a short-lived OTP", done: true, icon: BadgeCheck },
  { title: "Student ID review", text: "A complete system would securely review a submitted student ID", done: false, icon: ClipboardCheck },
];

export default function Profile() {
  const { user } = useAuth();
  const displayName = user?.name || "Faisal Mahmud";
  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Your profile" title="Set your rent range and shared-home preferences." description="Keep your city, budget, and living preferences updated so landlords and roommates understand what you need." />
        <section className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <article className="paper-card p-6 sm:p-7"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><div className="grid size-16 place-items-center rounded-[1.35rem] bg-[#dce9df] font-display text-3xl font-semibold text-[#1f6b55]">{displayName.charAt(0)}</div><div><p className="field-note text-[#376d5a]">Student profile</p><h2 className="mt-1 font-display text-3xl font-semibold tracking-[-0.05em]">{displayName}</h2><p className="mt-1 text-sm text-[#6c7870]">CSE · Dhaka</p></div></div><button type="button" className="secondary-action" onClick={() => toast.info("Profile editing can be connected to the backend later.")}>Edit profile <ChevronRight className="size-4" /></button></div><div className="mt-7 grid gap-3 border-t border-[#ebe0d0] pt-5 sm:grid-cols-3"><div><p className="field-note text-[#7a847d]">Budget</p><p className="mt-1 text-sm font-extrabold">৳10k–14k</p></div><div><p className="field-note text-[#7a847d]">Routine</p><p className="mt-1 text-sm font-extrabold">Quiet evenings</p></div><div><p className="field-note text-[#7a847d]">Move-in</p><p className="mt-1 text-sm font-extrabold">September</p></div></div></article>
            <article className="paper-card p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="field-note text-[#376d5a]">Roommate preferences</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">Details that matter when sharing a home.</h2></div><ShieldCheck className="size-7 text-[#1f6b55]" /></div><div className="mt-6 flex flex-wrap gap-2"><span className="match-pill">Prefers tidy shared areas</span><span className="match-pill">Usually studies in the evening</span><span className="match-pill">Open to two-bedroom flat</span></div><button type="button" className="text-link mt-6" onClick={() => toast.info("Roommate preferences can be connected to the backend later.")}>Update roommate preferences <ChevronRight className="size-4" /></button></article>
          </div>
          <aside className="rounded-[1.55rem] border border-[#d9e1d8] bg-[#eff5ef] p-5 sm:p-6 xl:sticky xl:top-6"><p className="field-note text-[#376d5a]">Verification progress</p><div className="mt-2 flex items-center justify-between gap-3"><h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">2 of 3 steps shown</h2><VerificationSeal label="Trust signal" /></div><p className="mt-3 text-sm leading-6 text-[#647169]">Verification helps landlords assess a student inquiry while sensitive information stays protected.</p><div className="mt-6 space-y-4">{verificationSteps.map((step, index) => { const Icon = step.icon; return <div key={step.title} className="flex gap-3"><div className={`grid size-9 shrink-0 place-items-center rounded-xl ${step.done ? "bg-[#1f6b55] text-white" : "bg-[#fffaf1] text-[#a56a4f]"}`}>{step.done ? <CheckCircle2 className="size-4" /> : <Icon className="size-4" />}</div><div><p className="text-sm font-extrabold">{index + 1}. {step.title}</p><p className="mt-1 text-xs leading-5 text-[#6c7870]">{step.text}</p></div></div>; })}</div><button type="button" className="decision-action mt-7 w-full" onClick={() => toast.info("Student ID upload is not enabled in this frontend-only course project.")}>View verification steps</button></aside>
        </section>
      </div>
    </AppShell>
  );
}
