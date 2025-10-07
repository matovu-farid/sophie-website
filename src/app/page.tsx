"use client";

import { Button } from "src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SkeletonCard } from "src/components/ui/skeleton-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { AnimationProvider } from "../components/providers/animation-provider";

export default function HomePage() {
  return (
    <AnimationProvider>
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            style={{
              backgroundImage: "url('/images/abia-landing-header.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="container relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-6xl font-bold tracking-tight text-white">
                Professional Cleaning Services in Billerica, MA
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                Abia Cleaning Services LLC provides professional residential and
                commercial cleaning services in Billerica, MA and surrounding
                areas. Our customized cleaning plans, flexible scheduling, and
                in-person walkthroughs ensure you get exactly what you need at a
                fair, transparent price. Trusted by homeowners and businesses
                throughout the region.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center gap-4"
              >
                <Button size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Why Choose Abia Cleaning Services LLC in Billerica, MA?
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Customized Plans",
                  description:
                    "Every home or business is different—let us tailor a cleaning plan for yours.",
                },
                {
                  title: "Transparent Pricing",
                  description:
                    "We offer in-person walkthroughs to give you the most accurate quote.",
                },
                {
                  title: "Flexible Scheduling",
                  description:
                    "From weekly to monthly or as-needed service, we work around your timetable.",
                },
                {
                  title: "Trusted Professionals",
                  description:
                    "Our cleaners are trained, vetted, and committed to ensuring your space is spotless.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-4xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Professional Cleaning Services in Billerica, MA
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Residential Cleaning",
                  description:
                    "Keep your apartment or house pristine with our thorough, eco-friendly cleaning methods. We handle everything from kitchens and bathrooms to living spaces and bedrooms—so you can come home to a fresh, clean environment every day.",
                  image: "/images/residential-cleaning.png",
                },
                {
                  title: "Commercial Cleaning",
                  description:
                    "Our commercial cleaning services keep your office or business space tidy and professional. From lobbies and common areas to break rooms and private offices, we ensure your workspace is both welcoming and productive.",
                  image: "/images/commercial-cleaning.png",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 20,
                    ...(typeof window !== "undefined" &&
                      window.innerWidth >= 768 && {
                        x: index === 0 ? -20 : 20,
                        y: 0,
                      }),
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: -20,
                    ...(typeof window !== "undefined" &&
                      window.innerWidth >= 768 && {
                        x: index === 0 ? -20 : 20,
                        y: 0,
                      }),
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden bg-white">
                    <div className="relative h-64 w-full">
                      <SkeletonCard />
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                Transparent Pricing for Cleaning Services in Billerica, MA
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We believe in fair, upfront pricing for all our cleaning
                services. That&apos;s why we schedule an in-person walkthrough
                of your property before providing a quote. Our pricing considers
                square footage, specific cleaning needs, and any special
                circumstances. Get your free estimate today!
              </p>
              <Button size="lg" asChild>
                <Link href="/quote">Get Free Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-4xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  question: "What areas do you serve for cleaning services?",
                  answer:
                    "We provide professional cleaning services throughout Billerica, MA and surrounding areas including Burlington, Tewksbury, Chelmsford, and Lowell.",
                },
                {
                  question:
                    "Do you offer both residential and commercial cleaning?",
                  answer:
                    "Yes! We specialize in both residential cleaning for homes and apartments, and commercial cleaning for offices, education centers, and other business facilities.",
                },
                {
                  question: "How much do your cleaning services cost?",
                  answer:
                    "Our pricing is customized based on your specific needs. We provide free in-person walkthroughs to give you an accurate quote with no hidden fees.",
                },
                {
                  question: "Are your cleaning products eco-friendly?",
                  answer:
                    "Yes, we use eco-friendly and safe cleaning products that are effective yet gentle on your family and the environment.",
                },
                {
                  question: "Do you bring your own cleaning supplies?",
                  answer:
                    "Yes, we provide all cleaning supplies and equipment needed for your cleaning service. You don't need to provide anything.",
                },
                {
                  question: "How do I schedule a cleaning service?",
                  answer:
                    "Contact us at (978) 437-3728 or email abiacleaningservices@gmail.com to schedule your free walkthrough and get a personalized quote.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-32 text-white">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            style={{
              backgroundImage: "url('/images/footer.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-white">
                Discover the Abia Cleaning Difference
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
                Our goal is simple: Provide consistent, high-quality cleaning at
                a fair price. Let us handle the mess so you can focus on what
                matters most.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="border-white/10 bg-white/20 font-extrabold text-white shadow-2xl backdrop-blur-sm hover:bg-white/30"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </AnimationProvider>
  );
}
