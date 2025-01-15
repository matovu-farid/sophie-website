import { Button } from "src/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Check, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              Your Cleaning Needs—Our Priority
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              We offer professional residential and commercial cleaning services
              personalized to your unique requirements. Our flexible scheduling,
              in-person walkthroughs, and transparent pricing ensure that you
              get just what you need at a price you can trust.
            </p>
            <Button size="lg" asChild className="mr-4">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Abia Cleaning Services LLC?
          </h2>
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
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Residential Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep your apartment or house pristine with our thorough,
                  eco-friendly cleaning methods. We handle everything from
                  kitchens and bathrooms to living spaces and bedrooms—so you
                  can come home to a fresh, clean environment every day.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Commercial Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our commercial cleaning services keep your office or business
                  space tidy and professional. From lobbies and common areas to
                  break rooms and private offices, we ensure your workspace is
                  both welcoming and productive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Pricing Tailored to You</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We believe in fair, upfront pricing. That&apos;s why we schedule
              an in-person walkthrough of your property before providing a
              quote. Our pricing considers square footage, specific cleaning
              needs, and any special circumstances.
            </p>
            <Button size="lg" asChild>
              <Link href="/quote">Schedule a Walkthrough</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Discover the Abia Cleaning Difference
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Our goal is simple: Provide consistent, high-quality cleaning at a
            fair price. Let us handle the mess so you can focus on what matters
            most.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
