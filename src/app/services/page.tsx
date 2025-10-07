import type { Metadata } from "next";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title:
    "Cleaning Services - Residential & Commercial Cleaning in Billerica, MA",
  description:
    "Comprehensive cleaning services including residential cleaning, commercial cleaning, move-in/out cleaning, and specialized services in Billerica, MA. Free estimates available.",
  keywords: [
    "cleaning services Billerica MA",
    "residential cleaning services",
    "commercial cleaning services",
    "move in move out cleaning",
    "house cleaning",
    "office cleaning",
    "deep cleaning services",
    "professional cleaners Billerica",
    "cleaning services near me",
  ],
  openGraph: {
    title:
      "Cleaning Services - Residential & Commercial Cleaning in Billerica, MA",
    description:
      "Comprehensive cleaning services including residential cleaning, commercial cleaning, move-in/out cleaning, and specialized services in Billerica, MA. Free estimates available.",
    images: [
      {
        url: "/images/services/living_room_after.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning services - Before and after results",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
