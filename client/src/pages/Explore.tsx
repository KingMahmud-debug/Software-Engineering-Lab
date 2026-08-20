/** BashaMate practical marketplace: city-first rental search with concise controls and clear tenant preference. */

import { useMemo, useState } from "react";
import { ArrowDownUp, Filter, Search, SlidersHorizontal, X } from "lucide-react";
import AppShell from "@/components/AppShell";
import ListingCard from "@/components/ListingCard";
import PageHeader from "@/components/PageHeader";
import { listings } from "@/lib/mock-data";

const areaOptions = ["All locations", "Dhaka", "Chattogram", "Rajshahi", "Khulna", "Sylhet", "Rangpur", "Barishal"];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All locations");
  const [budget, setBudget] = useState("16000");
  const [bachelorOnly, setBachelorOnly] = useState(true);
  const [sort, setSort] = useState("recommended");

  const filteredListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const maxBudget = Number(budget);
    const result = listings.filter((listing) => {
      const searchText = `${listing.title} ${listing.area} ${listing.description}`.toLowerCase();
      return (
        (!normalizedQuery || searchText.includes(normalizedQuery)) &&
        (area === "All locations" || listing.area.includes(area)) &&
        (!maxBudget || listing.rent <= maxBudget) &&
        (!bachelorOnly || listing.type === "Bachelor friendly")
      );
    });
    return [...result].sort((a, b) => {
      if (sort === "rent-low") return a.rent - b.rent;
      if (sort === "rent-high") return b.rent - a.rent;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [area, bachelorOnly, budget, query, sort]);

  const resetFilters = () => {
    setQuery("");
    setArea("All locations");
    setBudget("16000");
    setBachelorOnly(true);
    setSort("recommended");
  };

  return (
    <AppShell>
      <div className="page-wrap py-7 sm:py-10">
        <PageHeader
          eyebrow="Rental homes across Bangladesh"
          title="Find a home by city and budget."
          description="Search listings, check tenant preference, and save the homes you want to compare."
          aside={<p className="field-note text-[#a65a3b]">{filteredListings.length} listings found</p>}
        />

        <section className="mt-7 grid gap-5 lg:grid-cols-[276px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[1.45rem] border border-[#e5dac9] bg-[#fffaf1] p-4 shadow-[0_10px_24px_rgba(68,57,40,.045)] lg:sticky lg:top-6">
            <div className="flex items-center justify-between border-b border-[#eee3d2] pb-4">
              <div className="flex items-center gap-2 text-sm font-extrabold"><SlidersHorizontal className="size-4 text-[#1f6b55]" /> Your search</div>
              <button type="button" onClick={resetFilters} className="text-xs font-bold text-[#a65a3b] hover:underline">Reset</button>
            </div>
            <label className="mt-5 block">
              <span className="field-note text-[#6b756e]">City or division</span>
              <select value={area} onChange={(event) => setArea(event.target.value)} className="field-select mt-2">
                {areaOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="mt-5 block">
              <span className="field-note text-[#6b756e]">Maximum monthly rent</span>
              <select value={budget} onChange={(event) => setBudget(event.target.value)} className="field-select mt-2">
                <option value="0">Any budget</option>
                <option value="10000">Up to ৳10,000</option>
                <option value="12000">Up to ৳12,000</option>
                <option value="16000">Up to ৳16,000</option>
                <option value="25000">Up to ৳25,000</option>
              </select>
            </label>
            <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl bg-[#f5eee2] p-3 transition hover:bg-[#eee5d6]">
              <input type="checkbox" checked={bachelorOnly} onChange={(event) => setBachelorOnly(event.target.checked)} className="mt-0.5 size-4 accent-[#1f6b55]" />
              <span><span className="block text-sm font-extrabold">Bachelor-friendly only</span><span className="mt-0.5 block text-xs leading-5 text-[#6d776f]">Hide family-only listings.</span></span>
            </label>
            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-[#6a756e]"><Filter className="mt-0.5 size-4 shrink-0 text-[#1f6b55]" /> Tenant preference is visible on each listing before you send an inquiry.</p>
          </aside>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#1f6b55]" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a city, area, or listing..." className="search-input pl-11" />
                {query && <button type="button" onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#7b827c] hover:bg-[#eee5d6]" aria-label="Clear search"><X className="size-4" /></button>}
              </label>
              <label className="relative min-w-[190px]">
                <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#64716b]" />
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="field-select h-full pl-9">
                  <option value="recommended">Default order</option>
                  <option value="rent-low">Lowest rent</option>
                  <option value="rent-high">Highest rent</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-bold text-[#64716b]">
              <span className="field-note mr-1 text-[#819088]">Showing</span>
              <span className="rounded-full bg-[#dce9df] px-3 py-1.5 text-[#1f6b55]">{bachelorOnly ? "Bachelor-friendly" : "All tenant types"}</span>
              {area !== "All locations" && <span className="rounded-full bg-[#eee5d6] px-3 py-1.5">{area}</span>}
              {Number(budget) > 0 && <span className="rounded-full bg-[#eee5d6] px-3 py-1.5">Under ৳{Number(budget).toLocaleString("en-US")}</span>}
            </div>

            {filteredListings.length ? (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredListings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
              </div>
            ) : (
              <div className="mt-5 rounded-[1.45rem] border border-dashed border-[#d9cbb6] bg-[#fffaf1] px-6 py-14 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#eee5d6] text-[#1f6b55]"><Search className="size-5" /></div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]">No listings found.</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#69746d]">Try another city, increase the budget, or view all tenant types.</p>
                <button type="button" onClick={resetFilters} className="secondary-action mt-5">Reset the search</button>
              </div>
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
