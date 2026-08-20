/** BashaMate practical marketplace: clear private-message interface for rental and roommate discussions. */

import { FormEvent, useState } from "react";
import { ArrowUp, LockKeyhole, MessageCircle, Search } from "lucide-react";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { useBashaMate } from "@/contexts/BashaMateContext";

export default function Messages() {
  const { messages, sendMessage } = useBashaMate();
  const [draft, setDraft] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage(draft);
    setDraft("");
  };
  const sendQuickQuestion = (question: string) => { sendMessage(question); };

  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Messages" title="Ask about rent, room size, and a suitable viewing time." description="Discuss a rental home with a potential roommate or landlord before you share personal contact details." />
        <section className="mt-7 overflow-hidden rounded-[1.6rem] border border-[#e4d8c7] bg-[#fffaf1] shadow-[0_16px_34px_rgba(68,57,40,.05)]">
          <div className="grid min-h-[620px] lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="border-b border-[#e7dccb] bg-[#f7f0e4] p-4 lg:border-b-0 lg:border-r">
              <div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#778078]" /><input className="search-input py-2.5 pl-9 text-xs" placeholder="Search conversations" /></div>
              <button type="button" className="mt-4 flex w-full items-center gap-3 rounded-2xl bg-[#dce9df] p-3 text-left">
                <div className="grid size-10 place-items-center rounded-xl bg-[#e9bd9e] font-display text-lg font-semibold text-[#23413e]">N</div>
                <span className="min-w-0 flex-1"><span className="flex justify-between gap-2"><b className="text-sm">Naila A.</b><small className="text-[0.63rem] text-[#708078]">10:42</small></span><span className="mt-0.5 block truncate text-xs text-[#627069]">Hi! I also prefer the Green Road area...</span></span>
              </button>
              <div className="mt-4 rounded-xl border border-dashed border-[#d7c6b2] p-3 text-xs leading-5 text-[#6b766f]"><LockKeyhole className="mb-1.5 size-4 text-[#1f6b55]" /> Keep conversations respectful. Private contact details should be shared only when both users agree.</div>
            </aside>
            <div className="flex min-w-0 flex-col">
              <header className="flex items-center justify-between border-b border-[#e7dccb] px-5 py-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-[#e9bd9e] font-display text-lg font-semibold text-[#23413e]">N</div><div><p className="text-sm font-extrabold">Naila A.</p><p className="text-xs text-[#778078]">Architecture · Dhaka</p></div></div><span className="rounded-full bg-[#dce9df] px-2.5 py-1 text-[0.62rem] font-extrabold text-[#1f6b55]">Roommate request</span></header>
              <div className="flex-1 space-y-4 bg-[#fbf7ef] p-5 sm:p-7">
                <div className="mx-auto w-fit rounded-full bg-[#eee5d6] px-3 py-1 text-[0.6rem] font-bold text-[#727c75]">Today</div>
                <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-[#d7c6b2] bg-[#fffaf1] p-3.5 text-xs leading-5 text-[#66746d]"><p className="field-note text-[0.56rem] text-[#376d5a]">Shared-home note</p><p className="mt-1.5">Naila is looking for a shared home in Dhaka with a monthly budget of ৳10k–14k. Ask about availability, rent, room size, or viewing time.</p></div>
                {messages.map((message) => <div key={message.id} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}><div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender === "You" ? "rounded-br-md bg-[#1f6b55] text-[#fffaf1]" : "rounded-bl-md border border-[#e5dac9] bg-[#fffaf1] text-[#304540]"}`}><p>{message.text}</p><p className={`mt-1 text-[0.62rem] font-semibold ${message.sender === "You" ? "text-[#b9d4c1]" : "text-[#89928a]"}`}>{message.time}</p></div></div>)}
              </div>
              <form onSubmit={submit} className="border-t border-[#e7dccb] bg-[#fffaf1] p-4"><div className="mb-3 flex flex-wrap gap-2">{["Is the room still available?", "How much is the rent?", "Is the room wide enough?", "Can I visit this weekend?"].map((question) => <button key={question} type="button" onClick={() => sendQuickQuestion(question)} className="rounded-full border border-[#dfd2bf] bg-[#fffdf8] px-2.5 py-1.5 text-[0.67rem] font-bold text-[#54635c] transition hover:border-[#c75c36] hover:text-[#ae512f]">{question}</button>)}</div><div className="flex gap-2"><input value={draft} onChange={(event) => setDraft(event.target.value)} className="search-input flex-1" placeholder="Write a message..." /><button type="submit" className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#c75c36] text-white transition hover:bg-[#ae512f] active:scale-95" aria-label="Send message"><ArrowUp className="size-5" /></button></div><p className="mt-2 text-[0.65rem] font-medium text-[#879088]">Common questions receive an automatic reply in this course version.</p></form>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
