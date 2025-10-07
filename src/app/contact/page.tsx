"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import type { Metadata } from "next";

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
  return (
    <main className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="mb-4 text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch with us for a free walkthrough and estimate. We serve
            Billerica and surrounding areas.
          </motion.p>

          <AnimatePresence>
            <div className="grid gap-6">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Billerica, MA</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:abiacleaningservices@gmail.com"
                        className="text-primary hover:underline"
                      >
                        abiacleaningservices@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:9784373728"
                        className="text-primary hover:underline"
                      >
                        (978) 437-3728
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </AnimatePresence>

          <motion.div
            className="mt-12 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              asChild
              className="transition-transform hover:scale-105"
            >
              <a href="mailto:abiacleaningservices@gmail.com">Send Email</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="transition-transform hover:scale-105"
            >
              <a href="tel:9784373728">Call Now</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
