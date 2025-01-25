"use client";
import { Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

interface Service {
  category: string;
  items: {
    title: string;
    duration: string;
    pricing?: string;
    features: string[];
  }[];
}

export default function ServicesPage() {
  const services: Service[] = [
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
          duration: "To be discussed",
        },
      ],
    },
  ];

  return (
    <main className="py-20">
      <div className="container">
        <motion.h1
          className="mb-4 text-center text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer a comprehensive range of cleaning services for both
          residential and commercial properties. All our services include free
          walkthroughs or estimates to ensure accurate pricing.
        </motion.p>

        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {services.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <h2 className="mb-8 text-2xl font-bold">{category.category}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence>
                    {category.items.map((service, serviceIndex) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + serviceIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-xl">
                              {service.title}
                            </CardTitle>
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
                                <li
                                  key={feature}
                                  className="flex items-start gap-2"
                                >
                                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                  <span className="text-sm text-muted-foreground">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
