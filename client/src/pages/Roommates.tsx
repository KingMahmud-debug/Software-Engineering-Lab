/** BashaMate practical marketplace: simple roommate search based on location, budget, and routine. */

import { useState } from "react";
import { CheckCircle2, ChevronRight, Clock3, MapPin, Send, Sparkles, Wallet } from "lucide-react";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { roommates } from "@/lib/mock-data";

export default function Roommates() {
  const [area, setArea] = useState("Dhaka");
  const [routine, setRoutine] = useState("Quiet evenings");
  const [budget, setBudget] = useState("৳10k–14k");
  const [connectedIds, setConnectedIds] = useState<string[]>([]);

  const connect = (id: string, name: string) => {
    setConnectedIds((current) => current.includes(id) ? current : [...current, id]);
    toast.success(`Connection request sent to ${name}`, { description: "The request is saved in this browser for the course prototype." });
  };

  const compatibilityOffset = area === "Dhaka" ? 0 : -3;

  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Roommate search" title="Find roommates by location and budget." description="Compare city, budget, and living preferences before you send a connection request." />

        <section className="mt-7 grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[1.5rem] bg-[#1c403a] p-5 text-[#fffaf1] shadow-[0_16px_32px_rgba(28,64,58,.16)] xl:sticky xl:top-6">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-[#f7e8bb] text-[#1c403a]"><Sparkles className="size-5" /></div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[0.97] tracking-[-0.05em]">Set your search preferences.</h2>
            <p className="mt-3 text-sm leading-6 text-[#d2e2d5]">Choose the location, budget, and routine that matter most to you.</p>
            <div className="mt-6 space-y-4">
              <label className="block"><span className="field-note text-[#b9d4c1]">Preferred city</span><select value={area} onChange={(event) => setArea(event.target.value)} className="dark-select mt-2"><option>Dhaka</option><option>Chattogram</option><option>Rajshahi</option><option>Khulna</option><option>Sylhet</option></select></label>
              <label className="block"><span className="field-note text-[#b9d4c1]">Monthly budget</span><select value={budget} onChange={(event) => setBudget(event.target.value)} className="dark-select mt-2"><option>৳10k–14k</option><option>৳8k–10k</option><option>৳14k–16k</option></select></label>
              <label className="block"><span className="field-note text-[#b9d4c1]">Shared-space routine</span><select value={routine} onChange={(event) => setRoutine(event.target.value)} className="dark-select mt-2"><option>Quiet evenings</option><option>Flexible routine</option><option>Early mornings</option></select></label>
            </div>
          </aside>

          <div>
            <div className="rounded-[1.5rem] border border-[#e5dac9] bg-[#fffaf1] p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div><p className="field-note text-[#376d5a]">Potential matches</p><h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em]">People with similar preferences.</h2></div>
                <p className="rounded-full bg-[#dce9df] px-3 py-1.5 text-xs font-extrabold text-[#1f6b55]">3 results</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2"><span className="match-pill"><MapPin className="size-3.5" /> {area}</span><span className="match-pill"><Wallet className="size-3.5" /> {budget}</span><span className="match-pill"><Clock3 className="size-3.5" /> {routine}</span></div>
            </div>

            <div className="mt-5 space-y-4">
              {roommates.map((roommate) => {
                const score = Math.max(72, roommate.compatibility + compatibilityOffset);
                const connected = connectedIds.includes(roommate.id);
                return (
                  <article key={roommate.id} className="paper-card flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
                    <div className={`grid size-15 shrink-0 place-items-center rounded-[1.35rem] ${roommate.color} font-display text-2xl font-semibold text-[#23413e]`}>{roommate.name.charAt(0)}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{roommate.name}</h3><p className="mt-0.5 text-xs font-semibold text-[#738078]">{roommate.program} · {roommate.area}</p></div><div className="rounded-2xl bg-[#dce9df] px-3 py-2 text-right"><p className="field-note text-[0.54rem] text-[#40705f]">Good fit</p><p className="font-display text-xl font-semibold text-[#1f6b55]">{score}%</p></div></div>
                      <div className="mt-4 flex flex-wrap gap-2">{roommate.habits.map((habit) => <span key={habit} className="rounded-full bg-[#f2ebe0] px-2.5 py-1.5 text-[0.7rem] font-bold text-[#59665f]">{habit}</span>)}</div>
                      <p className="mt-3 text-xs font-semibold text-[#768078]">{roommate.availability}</p>
                    </div>
                    <button type="button" onClick={() => connect(roommate.id, roommate.name)} className={connected ? "secondary-action shrink-0" : "decision-action shrink-0"}><Send className="size-4" /> {connected ? "Request sent" : "Connect"}</button>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 flex gap-3 rounded-[1.1rem] border border-[#e2d6c4] bg-[#f5eee2] p-4 text-sm leading-6 text-[#63706a]"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#1f6b55]" /><p>Matches use location, budget, and routine preferences as a starting point. Both people should agree before sharing private contact details.</p></div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
