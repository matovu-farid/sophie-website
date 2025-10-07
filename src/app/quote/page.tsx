import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Free Cleaning Quote - Abia Cleaning Services Billerica, MA",
  description:
    "Get a free, no-obligation cleaning quote from Abia Cleaning Services. We offer in-person walkthroughs for accurate pricing on residential and commercial cleaning in Billerica, MA.",
  keywords: [
    "free cleaning quote Billerica MA",
    "cleaning services estimate",
    "cleaning quote request",
    "professional cleaning pricing",
    "cleaning services walkthrough",
    "free cleaning consultation",
  ],
  openGraph: {
    title: "Get Free Cleaning Quote - Abia Cleaning Services Billerica, MA",
    description:
      "Get a free, no-obligation cleaning quote from Abia Cleaning Services. We offer in-person walkthroughs for accurate pricing on residential and commercial cleaning in Billerica, MA.",
    type: "website",
  },
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  redirect("/contact");
}
