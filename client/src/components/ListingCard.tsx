/** BashaMate Courtyard Editorial: tactile listing cards that foreground rent, fit, and trusted signals. */

import { BedDouble, Heart, MapPin } from "lucide-react";
import { Link } from "wouter";
import { formatTaka, type Listing } from "@/lib/mock-data";
import { fallbackImages } from "@/lib/mock-data";
import { useBashaMate } from "@/contexts/BashaMateContext";
import BashaImage from "@/components/BashaImage";
import VerificationSeal from "@/components/VerificationSeal";

export default function ListingCard({
  listing,
  featured = false,
}: {
  listing: Listing;
  featured?: boolean;
}) {
  const { favoriteIds, toggleFavorite } = useBashaMate();
  const isFavorite = favoriteIds.includes(listing.id);

  return (
    <article className={`listing-card group relative overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
      <Link href={`/listing/${listing.id}`} className="block">
        <div className={`relative overflow-hidden ${featured ? "h-60 sm:h-72" : "h-52"}`}>
          <BashaImage src={listing.image} fallback={listing.image.includes("hero") ? fallbackImages.hero : fallbackImages.interior} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#172d31]/35 to-transparent" />
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.64rem] font-extrabold tracking-[0.08em] ${
              listing.type === "Bachelor friendly"
                ? "bg-[#e7f0e9] text-[#1f6b55]"
                : "bg-[#fff1e9] text-[#ae512f]"
            }`}>
            {listing.type}
          </span>
          {listing.landlord.verified && <span className="absolute bottom-3 left-3"><VerificationSeal label="Verified host" /></span>}
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleFavorite(listing.id)}
        aria-label={isFavorite ? `Remove ${listing.title} from saved homes` : `Save ${listing.title}`}
        className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full border transition duration-200 active:scale-95 ${
          isFavorite
            ? "border-[#c75c36] bg-[#c75c36] text-white"
            : "border-white/60 bg-[#fffaf1]/92 text-[#24393a] hover:bg-white"
        }`}>
        <Heart className="size-4" fill={isFavorite ? "currentColor" : "none"} />
      </button>

      <Link href={`/listing/${listing.id}`} className="block px-4 pb-4 pt-3.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.25rem] font-semibold leading-[1.1] tracking-[-0.035em] text-[#172d31]">
            {listing.title}
          </h3>
          <p className="shrink-0 text-sm font-extrabold text-[#1f6b55]">{formatTaka(listing.rent)}</p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-[#68756f]">
          <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{listing.area}</span>
          <span className="inline-flex items-center gap-1"><BedDouble className="size-3.5" />{listing.bedrooms} bed</span>
          <span className="text-[#9a8172]">{listing.furnished ? "Furnished" : "Unfurnished"}</span>
        </div>
      </Link>
    </article>
  );
}
