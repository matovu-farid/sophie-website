import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Cleaning Quote - Billerica, MA",
  description:
    "Get a free cleaning quote in Billerica, MA! In-person walkthroughs for accurate pricing. Call (978) 437-3728 today.",
  keywords: [
    "free cleaning quote Billerica MA",
    "cleaning services estimate",
    "cleaning quote request",
    "professional cleaning pricing",
    "cleaning services walkthrough",
    "free cleaning consultation",
  ],
  openGraph: {
    title: "Free Cleaning Quote - Billerica, MA",
    description:
      "Get a free cleaning quote in Billerica, MA! In-person walkthroughs for accurate pricing. Call (978) 437-3728 today.",
    type: "website",
  },
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  redirect("/contact");
}
