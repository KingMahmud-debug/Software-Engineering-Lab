/** BashaMate practical marketplace: recognizable house-and-check trust seal used wherever verification matters. */

import { Check, House } from "lucide-react";

export default function VerificationSeal({ label = "Verified" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7f0e9] px-2.5 py-1 text-[0.63rem] font-extrabold text-[#1f6b55]">
      <span className="relative grid size-3.5 place-items-center rounded-full bg-[#1f6b55] text-white"><House className="size-2.5" /><Check className="absolute -right-1 -bottom-1 size-2.5 rounded-full bg-[#c75c36] p-px text-white" strokeWidth={3} /></span>
      {label}
    </span>
  );
}

