/** BashaMate Courtyard Editorial: moderation is visualized as a carefully scoped workflow, never a working enforcement system. */

import { useState } from "react";
import { CheckCircle2, Flag, ShieldAlert, XCircle } from "lucide-react";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";

type Report = { id: string; subject: string; category: string; reports: number; status: "Needs review" | "Hidden pending review" | "Resolved" };
const initialReports: Report[] = [
  { id: "r1", subject: "Listing: Green Road shared flat", category: "Potentially inaccurate availability", reports: 3, status: "Hidden pending review" },
  { id: "r2", subject: "Profile: Demo landlord account", category: "Incomplete property details", reports: 1, status: "Needs review" },
  { id: "r3", subject: "Listing: Dhanmondi Lake apartment", category: "Tenant-fit wording needs review", reports: 2, status: "Needs review" },
];
export default function AdminModeration() {
  const [reports, setReports] = useState(initialReports);
  const resolve = (id: string) => { setReports((current) => current.map((report) => report.id === id ? { ...report, status: "Resolved" } : report)); toast.success("Demo moderation status updated locally."); };
  return (
    <AppShell><div className="page-wrap py-7 sm:py-10"><PageHeader eyebrow="Admin moderation demonstration" title="Keep trust signals useful and accountable." description="This mock workspace explains how reported listings and profiles could be reviewed. No real content is removed, hidden, or stored in this frontend prototype." /><section className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_330px]"><div className="overflow-hidden rounded-[1.55rem] border border-[#e5dac9] bg-[#fffaf1]"><div className="flex items-center justify-between border-b border-[#e9dfd0] px-5 py-5 sm:px-6"><div><p className="field-note text-[#376d5a]">Review queue</p><h2 className="mt-1 font-display text-3xl font-semibold tracking-[-0.05em]">Reported sample content</h2></div><Flag className="size-6 text-[#b7522e]" /></div><div className="divide-y divide-[#ebe0d0]">{reports.map((report) => <article key={report.id} className="p-5 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-6"><div><p className="text-sm font-extrabold">{report.subject}</p><p className="mt-1 text-xs text-[#6e7a72]">{report.category} · {report.reports} report{report.reports !== 1 ? "s" : ""}</p><span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-extrabold ${report.status === "Resolved" ? "bg-[#dce9df] text-[#1f6b55]" : report.status === "Hidden pending review" ? "bg-[#f0d9ca] text-[#a04d2d]" : "bg-[#f7e8bb] text-[#77611a]"}`}>{report.status}</span></div>{report.status !== "Resolved" && <button type="button" onClick={() => resolve(report.id)} className="secondary-action mt-4 sm:mt-0"><CheckCircle2 className="size-4" /> Resolve sample</button>}</article>)}</div></div><aside className="rounded-[1.55rem] bg-[#1c403a] p-6 text-[#fffaf1]"><ShieldAlert className="size-8 text-[#f7e8bb]" /><h2 className="mt-5 font-display text-3xl font-semibold leading-[0.96] tracking-[-0.05em]">What the real workflow needs.</h2><div className="mt-5 space-y-4 text-sm leading-6 text-[#d2e2d5]"><p><b className="text-white">Role permissions:</b> only approved moderators should act on reports.</p><p><b className="text-white">Audit history:</b> each decision should record a reason and reviewer.</p><p><b className="text-white">Safe escalation:</b> repeated reports can hide content pending review, not permanently delete it without a decision.</p></div><button type="button" onClick={() => toast.info("This panel is explanatory only; no admin role is active.")} className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[#f7e8bb] underline underline-offset-4"><XCircle className="size-4" /> Demo scope reminder</button></aside></section></div></AppShell>
  );
}

