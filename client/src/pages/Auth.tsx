/** BashaMate practical marketplace: clear registration and login interface backed by browser storage only. */

import { FormEvent, useState } from "react";
import { CheckCircle2, LockKeyhole, LogIn, UserPlus } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { useAuth } from "@/contexts/AuthContext";

export default function Auth() {
  const { user, register, login, logout } = useAuth();
  const [, navigate] = useLocation();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("Faisal Mahmud");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !password.trim() || (mode === "register" && !name.trim())) {
      toast.error("Complete the required fields to continue.");
      return;
    }
    if (mode === "register") register(name, email); else login(email);
    toast.success(mode === "register" ? "Account created in this browser." : "Signed in successfully.");
    navigate("/profile");
  };

  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader eyebrow="Student account" title={user ? "Your BashaMate account" : "Keep your rental shortlist for the semester."} description={user ? "Your account is active in this browser. You can sign out at any time." : "Create an account to save homes, continue rental conversations, and keep your roommate preferences together."} />
        <section className="relative mx-auto mt-7 max-w-xl overflow-hidden rounded-[1.3rem] border border-[#e5dac9] bg-[#fffaf1] p-5 shadow-[0_10px_24px_rgba(68,57,40,.05)] sm:p-7">
          <div className="arch-stamp absolute -right-6 -top-10 h-28 w-20" aria-hidden="true" />
          <p className="field-note relative mb-5 text-[#376d5a]">Rental note · Bangladesh</p>
          {user ? (
            <div>
              <div className="flex items-center gap-4"><div className="grid size-14 place-items-center rounded-2xl bg-[#dce9df] font-display text-2xl font-semibold text-[#1f6b55]">{user.name.charAt(0)}</div><div><p className="text-lg font-extrabold">{user.name}</p><p className="text-sm text-[#708078]">{user.email}</p></div></div>
              <div className="mt-7 grid gap-3 border-y border-[#ebe0d0] py-5 text-sm"><p className="flex items-center gap-2 font-semibold"><CheckCircle2 className="size-4 text-[#1f6b55]" /> Saved listings stay available in this browser.</p><p className="flex items-center gap-2 font-semibold"><CheckCircle2 className="size-4 text-[#1f6b55]" /> Your account is ready for future backend integration.</p></div>
              <button type="button" onClick={() => { logout(); toast.success("Signed out from this browser."); }} className="secondary-action mt-6 w-full">Sign out</button>
            </div>
          ) : (
            <>
              <div className="flex rounded-xl bg-[#f3eadf] p-1"><button type="button" onClick={() => setMode("login")} className={`flex-1 rounded-lg px-3 py-2 text-sm font-extrabold ${mode === "login" ? "bg-[#fffaf1] text-[#1f6b55] shadow-sm" : "text-[#748078]"}`}>Sign in</button><button type="button" onClick={() => setMode("register")} className={`flex-1 rounded-lg px-3 py-2 text-sm font-extrabold ${mode === "register" ? "bg-[#fffaf1] text-[#1f6b55] shadow-sm" : "text-[#748078]"}`}>Register</button></div>
              <form onSubmit={submit} className="mt-6 space-y-5">
                {mode === "register" && <label className="block"><span className="form-label">Full name</span><input value={name} onChange={(event) => setName(event.target.value)} className="form-input mt-2" placeholder="Your full name" /></label>}
                <label className="block"><span className="form-label">Email address</span><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-input mt-2" placeholder="name@example.com" /></label>
                <label className="block"><span className="form-label">Password</span><input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-input mt-2" placeholder="Enter a password" /></label>
                <button type="submit" className="decision-action w-full">{mode === "login" ? <LogIn className="size-4" /> : <UserPlus className="size-4" />}{mode === "login" ? "Sign in" : "Create account"}</button>
              </form>
              <p className="note-divider mt-5 flex gap-2 pt-4 text-xs leading-5 text-[#68746d]"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#1f6b55]" /> This course version stores only your name and email in your browser. A real system would use secure server-side authentication.</p>
            </>
          )}
        </section>
      </div>
    </AppShell>
  );
}
