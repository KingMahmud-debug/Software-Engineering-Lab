/** BashaMate Courtyard Editorial: frontend-only domain models and clearly labelled demonstration data. */

export type Listing = {
  id: string;
  title: string;
  area: string;
  distance: string;
  rent: number;
  bedrooms: number;
  bathroom: number;
  type: "Bachelor friendly" | "Family only";
  furnished: boolean;
  featured?: boolean;
  image: string;
  accent: string;
  availability: string;
  description: string;
  amenities: string[];
  landlord: {
    name: string;
    role: string;
    verified: boolean;
  };
};

export type Roommate = {
  id: string;
  name: string;
  program: string;
  area: string;
  budget: string;
  compatibility: number;
  habits: string[];
  availability: string;
  color: string;
};

export const listingImages = {
  hero: "/manus-storage/bashamate-hero-courtyard_f7e0819c.jpg",
  interior: "/manus-storage/bashamate-listing-interior_57564670.jpg",
  rooftop: "/manus-storage/bashamate-roommate-rooftop_1ea04637.jpg",
  logo: "/manus-storage/bashamate-doorway-icon_47635fde.png",
};

export const fallbackImages = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  interior: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  rooftop: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
  logo: "https://placehold.co/96x96/1F6B55/FFFaf1?text=B",
};

export const listings: Listing[] = [
  {
    id: "green-road-flat",
    title: "2-bedroom flat near Dhanmondi",
    area: "Dhanmondi, Dhaka",
    distance: "Near university area",
    rent: 13500,
    bedrooms: 2,
    bathroom: 2,
    type: "Bachelor friendly",
    furnished: true,
    featured: true,
    image: listingImages.interior,
    accent: "bg-[#d9e6dc]",
    availability: "Available now",
    description:
      "A two-bedroom shared flat with a study corner, nearby transport, and basic facilities for students and young professionals.",
    amenities: ["Wi-Fi ready", "Study corner", "Balcony", "Lift access"],
    landlord: { name: "Rafiq Hasan", role: "Property owner", verified: true },
  },
  {
    id: "shyamoli-room",
    title: "Shared room near GEC Circle",
    area: "GEC Circle, Chattogram",
    distance: "Near transport and shops",
    rent: 9500,
    bedrooms: 1,
    bathroom: 1,
    type: "Bachelor friendly",
    furnished: true,
    image: listingImages.hero,
    accent: "bg-[#f0d9ca]",
    availability: "Move in this month",
    description:
      "A practical shared room with a balcony, regular water supply, and convenient access to the city centre.",
    amenities: ["Furnished room", "Balcony", "Water filter", "Caretaker"],
    landlord: { name: "Sadia Rahman", role: "Listing manager", verified: true },
  },
  {
    id: "mohammadpur-flat",
    title: "Student flat near Shaheb Bazar",
    area: "Shaheb Bazar, Rajshahi",
    distance: "Close to university routes",
    rent: 8800,
    bedrooms: 2,
    bathroom: 1,
    type: "Bachelor friendly",
    furnished: false,
    image: listingImages.interior,
    accent: "bg-[#f7e8bb]",
    availability: "Available in 2 weeks",
    description:
      "An affordable two-bedroom flat with a shared dining space, suitable for students looking for a central Rajshahi location.",
    amenities: ["Gas connection", "Dining space", "Secure entry", "Rooftop access"],
    landlord: { name: "M. Kabir", role: "Property owner", verified: false },
  },
  {
    id: "dhanmondi-family",
    title: "Two-bedroom home in Sonadanga",
    area: "Sonadanga, Khulna",
    distance: "Near local transport",
    rent: 10200,
    bedrooms: 2,
    bathroom: 2,
    type: "Family only",
    furnished: true,
    image: listingImages.hero,
    accent: "bg-[#d9e6dc]",
    availability: "Available after discussion",
    description:
      "A furnished two-bedroom apartment included to show how tenant preference is displayed before an inquiry is sent.",
    amenities: ["Lift access", "Generator", "Guard", "Furnished"],
    landlord: { name: "Homeowner account", role: "Property owner", verified: true },
  },
];

export const roommates: Roommate[] = [
  {
    id: "naila",
    name: "Naila A.",
    program: "Architecture · 3rd year",
    area: "Dhaka",
    budget: "৳10k–14k",
    compatibility: 92,
    habits: ["Early riser", "Keeps shared areas tidy", "Prefers a quiet evening"],
    availability: "Looking for a place this month",
    color: "bg-[#e9bd9e]",
  },
  {
    id: "tahmid",
    name: "Tahmid R.",
    program: "CSE · 2nd year",
    area: "Chattogram",
    budget: "৳9k–12k",
    compatibility: 86,
    habits: ["Night study routine", "Enjoys cooking", "Non-smoker"],
    availability: "Open to a two-bedroom flat",
    color: "bg-[#b8d2c3]",
  },
  {
    id: "arisha",
    name: "Arisha K.",
    program: "Economics · 4th year",
    area: "Rajshahi",
    budget: "৳11k–15k",
    compatibility: 81,
    habits: ["Weekend explorer", "Shares chores", "Prefers morning study"],
    availability: "Ready to connect before viewing",
    color: "bg-[#eddc9e]",
  },
];

export const formatTaka = (amount: number) => `৳${amount.toLocaleString("en-US")}`;
