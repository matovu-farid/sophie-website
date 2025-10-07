import "src/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "src/components/layout/navbar";

export const metadata: Metadata = {
  title: {
    default: "Abia Cleaning Services | Billerica, MA",
    template: "%s | Abia Cleaning Services",
  },
  description:
    "Professional cleaning services in Billerica, MA. Residential & commercial cleaning with free estimates. Call (978) 437-3728 today!",
  keywords: [
    "cleaning services Billerica MA",
    "residential cleaning",
    "commercial cleaning",
    "house cleaning",
    "office cleaning",
    "move in move out cleaning",
    "deep cleaning",
    "professional cleaners",
    "eco-friendly cleaning",
    "Billerica cleaning company",
  ],
  authors: [{ name: "Abia Cleaning Services LLC" }],
  creator: "Abia Cleaning Services LLC",
  publisher: "Abia Cleaning Services LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abiacleaning.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abiacleaning.com",
    title: "Abia Cleaning Services | Billerica, MA",
    description:
      "Professional cleaning services in Billerica, MA. Residential & commercial cleaning with free estimates. Call (978) 437-3728 today!",
    siteName: "Abia Cleaning Services",
    images: [
      {
        url: "/images/abia-landing-header.png",
        width: 1200,
        height: 630,
        alt: "Abia Cleaning Services - Professional cleaning services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abia Cleaning Services | Billerica, MA",
    description:
      "Professional cleaning services in Billerica, MA. Residential & commercial cleaning with free estimates. Call (978) 437-3728 today!",
    images: ["/images/abia-landing-header.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" },
  ],
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abiacleaning.com/#organization",
    name: "Abia Cleaning Services LLC",
    description:
      "Professional cleaning services in Billerica, MA. Residential & commercial cleaning with free estimates. Call (978) 437-3728 today!",
    url: "https://abiacleaning.com",
    telephone: "+1-978-437-3728",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // Replace with actual address
      addressLocality: "Billerica",
      addressRegion: "MA",
      postalCode: "01821",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.5584", // Replace with actual coordinates
      longitude: "-71.2689", // Replace with actual coordinates
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "42.5584",
        longitude: "-71.2689",
      },
      geoRadius: "25000", // 25km radius
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Cleaning",
            description: "Professional house and apartment cleaning services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Cleaning",
            description: "Office and business space cleaning services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Move In/Out Cleaning",
            description: "Deep cleaning for move-in and move-out situations",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/abiacleaning", // Replace with actual social media URLs
      "https://www.instagram.com/abiacleaning",
    ],
  };

  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="px-5">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
