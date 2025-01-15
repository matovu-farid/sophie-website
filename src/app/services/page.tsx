import { Clock, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      category: "Commercial Services",
      items: [
        {
          title: "Education Centers",
          duration: "5 hours",
          features: [
            "Free walkthrough",
            "Specialized cleaning protocols",
            "Flexible scheduling",
          ],
        },
        {
          title: "Facilities Cleaning",
          duration: "5 hours",
          features: [
            "Free walkthrough",
            "Customized cleaning plans",
            "Professional equipment",
          ],
        },
      ],
    },
    {
      category: "Residential Services",
      items: [
        {
          title: "Move In/Out Cleaning",
          duration: "8 hours",
          features: [
            "Free walkthrough",
            "Duration varies by property size",
            "Deep cleaning included",
          ],
        },
        {
          title: "Recurring Services",
          duration: "5 hours",
          features: [
            "Free walkthrough",
            "Weekly, bi-weekly, or monthly options",
            "Consistent cleaning team",
          ],
        },
        {
          title: "Complete House Cleaning",
          duration: "6 hours",
          features: [
            "Free walkthrough",
            "Comprehensive cleaning",
            "All rooms included",
          ],
        },
      ],
    },
    {
      category: "Individual Room Services",
      items: [
        {
          title: "Living Area",
          duration: "1.5 hours",
          features: ["Free estimates", "Detailed dusting", "Floor care"],
        },
        {
          title: "Bedroom",
          duration: "1.5 hours",
          features: [
            "Free estimates",
            "Linen change available",
            "Surface cleaning",
          ],
        },
        {
          title: "Bathrooms",
          duration: "1 hour",
          features: [
            "Free estimates",
            "Deep sanitization",
            "Tile and grout cleaning",
          ],
        },
      ],
    },
    {
      category: "Additional Services",
      items: [
        {
          title: "Inside Fridge Cleaning",
          duration: "1 hour",
          pricing: "$50/hour",
          features: ["Deep cleaning", "Sanitization", "Organization"],
        },
        {
          title: "Inside Oven Cleaning",
          duration: "1 hour",
          pricing: "$50/hour",
          features: ["Deep cleaning", "Degreasing", "Removal of burnt residue"],
        },
        {
          title: "Extra Services",
          features: [
            "Free estimates",
            "Custom cleaning solutions",
            "Additional services upon request",
          ],
        },
      ],
    },
  ];

  return (
    <main className="py-20">
      <div className="container">
        <h1 className="mb-4 text-center text-4xl font-bold">Our Services</h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground">
          We offer a comprehensive range of cleaning services for both
          residential and commercial properties. All our services include free
          walkthroughs or estimates to ensure accurate pricing.
        </p>

        <div className="space-y-16">
          {services.map((category) => (
            <div key={category.category}>
              <h2 className="mb-8 text-2xl font-bold">{category.category}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <Card key={service.title}>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {service.duration && (
                        <div className="mb-4 flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{service.duration}</span>
                          {service.pricing && ` - ${service.pricing}`}
                        </div>
                      )}
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
