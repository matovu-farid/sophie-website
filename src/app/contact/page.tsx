import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Abia Cleaning Services - Free Quote in Billerica, MA",
  description:
    "Contact Abia Cleaning Services for a free walkthrough and estimate. Professional cleaning services in Billerica, MA. Call (978) 437-3728 or email us today.",
  keywords: [
    "contact cleaning services Billerica MA",
    "free cleaning quote",
    "cleaning services estimate",
    "professional cleaners contact",
    "Billerica cleaning company",
    "cleaning services phone number",
    "cleaning services email",
  ],
  openGraph: {
    title: "Contact Abia Cleaning Services - Free Quote in Billerica, MA",
    description:
      "Contact Abia Cleaning Services for a free walkthrough and estimate. Professional cleaning services in Billerica, MA. Call (978) 437-3728 or email us today.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
