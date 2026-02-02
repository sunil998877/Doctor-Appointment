"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    credits: 4,
    price: 19,
    description: "Perfect for occasional check-ups",
    features: ["2 video consultations", "Credits never expire", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    credits: 12,
    price: 49,
    description: "Best for regular healthcare needs",
    features: [
      "6 video consultations",
      "Priority booking",
      "Credits never expire",
      "24/7 support",
    ],
    popular: true,
  },
  {
    name: "Family",
    credits: 24,
    price: 89,
    description: "Ideal for the whole family",
    features: [
      "12 video consultations",
      "Share across family members",
      "Priority booking",
      "Credits never expire",
      "Dedicated support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Card className="border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent">
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden border-emerald-900/30 ${
                pkg.popular
                  ? "ring-2 ring-emerald-500/50 bg-emerald-950/20"
                  : "bg-muted/10"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 pt-8">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /{pkg.credits} credits
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pkg.popular ? "default" : "outline"}
                  className={
                    pkg.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                      : "border-emerald-700/30 w-full"
                  }
                >
                  <Link href="/onboarding">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Pricing;
