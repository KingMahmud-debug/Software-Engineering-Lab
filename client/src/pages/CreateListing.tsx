/** BashaMate practical marketplace: listing form with local validation and a concise preview. */

import { FormEvent, useState } from "react";
import { ArrowLeft, CheckCircle2, Image, MapPin, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import AppShell from "@/components/AppShell";
import PageHeader from "@/components/PageHeader";
import { listingImages } from "@/lib/mock-data";
import { fallbackImages } from "@/lib/mock-data";
import BashaImage from "@/components/BashaImage";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("Dhaka");
  const [rent, setRent] = useState("");
  const [tenantFit, setTenantFit] = useState("Bachelor friendly");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !rent.trim()) { toast.error("Add a listing title and monthly rent first."); return; }
    setSubmitted(true);
    toast.success("Listing preview prepared.", { description: "Connect this form to the listing API when the backend is added." });
  };
  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10"><Link href="/landlord" className="text-link"><ArrowLeft className="size-4" /> Back to landlord dashboard</Link><div className="mt-6"><PageHeader eyebrow="Add a listing" title="Add rent, location, and tenant preference." description="Complete the form to prepare a rental listing preview." /></div><section className="mt-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]"><form onSubmit={submit} className="rounded-[1.55rem] border border-[#e5dac9] bg-[#fffaf1] p-5 sm:p-7"><div className="grid gap-5 sm:grid-cols-2"><label className="sm:col-span-2"><span className="form-label">Listing title <b>*</b></span><input value={title} onChange={(event) => setTitle(event.target.value)} className="form-input mt-2" placeholder="Example: 2-bedroom flat near Dhanmondi" /></label><label><span className="form-label">City <b>*</b></span><select value={area} onChange={(event) => setArea(event.target.value)} className="field-select mt-2"><option>Dhaka</option><option>Chattogram</option><option>Rajshahi</option><option>Khulna</option><option>Sylhet</option><option>Rangpur</option><option>Barishal</option></select></label><label><span className="form-label">Monthly rent (৳) <b>*</b></span><input value={rent} onChange={(event) => setRent(event.target.value.replace(/[^0-9]/g, ""))} inputMode="numeric" className="form-input mt-2" placeholder="Example: 13500" /></label><label><span className="form-label">Tenant preference <b>*</b></span><select value={tenantFit} onChange={(event) => setTenantFit(event.target.value)} className="field-select mt-2"><option>Bachelor friendly</option><option>Family only</option><option>Open to both</option></select></label><label><span className="form-label">Bedrooms</span><select className="field-select mt-2"><option>2 bedrooms</option><option>1 bedroom</option><option>3 bedrooms</option></select></label><label className="sm:col-span-2"><span className="form-label">Description</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="form-input mt-2 min-h-28 resize-y" placeholder="Add nearby landmarks, furniture, facilities, or move-in date..." /></label></div><div className="mt-6 rounded-2xl border border-dashed border-[#d7c6b2] bg-[#f7f0e4] p-4"><div className="flex items-start gap-3"><div className="grid size-10 place-items-center rounded-xl bg-[#f0d9ca] text-[#b7522e]"><UploadCloud className="size-5" /></div><div><p className="text-sm font-extrabold">Property photos are shown as a preview.</p><p className="mt-1 text-xs leading-5 text-[#6d786f]">Photo upload will need file storage in a full backend version.</p></div></div></div><button type="submit" className="decision-action mt-6"><CheckCircle2 className="size-4" /> {submitted ? "Listing preview ready" : "Prepare listing preview"}</button></form><aside className="h-fit rounded-[1.55rem] border border-[#e5dac9] bg-[#fffaf1] p-5 xl:sticky xl:top-6"><p className="field-note text-[#376d5a]">Listing preview</p><div className="mt-4 overflow-hidden rounded-[1.3rem] bg-[#e7dcc9]"><BashaImage src={listingImages.interior} fallback={fallbackImages.interior} alt="Sample interior used for listing preview" className="h-48 w-full object-cover" /></div><div className="mt-4"><p className="text-xs font-bold text-[#758078]"><MapPin className="mr-1 inline size-3.5 text-[#1f6b55]" /> {area}</p><h2 className="mt-2 font-display text-2xl font-semibold leading-6 tracking-[-0.04em]">{title || "Your listing title"}</h2><p className="mt-2 font-extrabold text-[#1f6b55]">{rent ? `৳${Number(rent).toLocaleString("en-US")} / month` : "Add monthly rent"}</p><span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-extrabold ${tenantFit === "Bachelor friendly" ? "bg-[#dce9df] text-[#1f6b55]" : "bg-[#f0d9ca] text-[#b7522e]"}`}>{tenantFit}</span><p className="mt-4 text-xs leading-5 text-[#6d786f]">{notes || "Add details about the rental home."}</p></div><div className="mt-5 flex items-center gap-2 border-t border-[#ece1d1] pt-4 text-xs font-bold text-[#6d786f]"><Image className="size-4 text-[#1f6b55]" /> Preview image</div></aside></section></div>
    </AppShell>
  );
}
