import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us - Abia Cleaning Services",
  description:
    "Get your free cleaning quote in Billerica, MA! Call (978) 437-3728 or email abiacleaningservices@gmail.com today.",
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
    title: "Contact Us - Abia Cleaning Services",
    description:
      "Get your free cleaning quote in Billerica, MA! Call (978) 437-3728 or email abiacleaningservices@gmail.com today.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
