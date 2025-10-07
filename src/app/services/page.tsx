import type { Metadata } from "next";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "Cleaning Services - Billerica, MA",
  description:
    "Residential & commercial cleaning services in Billerica, MA. Move-in/out, recurring cleaning & more. Free estimates! Call (978) 437-3728.",
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
    title: "Cleaning Services - Billerica, MA",
    description:
      "Residential & commercial cleaning services in Billerica, MA. Move-in/out, recurring cleaning & more. Free estimates! Call (978) 437-3728.",
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
