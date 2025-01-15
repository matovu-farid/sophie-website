import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "src/components/ui/card";
import { Button } from "src/components/ui/button";

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Get in touch with us for a free walkthrough and estimate. We serve
            Billerica and surrounding areas.
          </p>

          <div className="grid gap-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Billerica, MA</p>
                </div>
              </CardContent>
            </Card>

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
          </div>

          <div className="mt-12 space-x-4">
            <Button size="lg" asChild>
              <a href="mailto:abiacleaningservices@gmail.com">Send Email</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:9784373728">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
} 