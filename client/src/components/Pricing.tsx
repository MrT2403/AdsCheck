import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    name: "Basic",
    price: "99",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Email support",
      "24/7 customer service",
      "Basic reporting",
    ],
  },
  {
    name: "Professional",
    price: "199",
    features: [
      "Up to 15 projects",
      "Advanced analytics",
      "Priority email support",
      "24/7 customer service",
      "Advanced reporting",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "399",
    features: [
      "Unlimited projects",
      "Enterprise analytics",
      "Dedicated support team",
      "24/7 priority support",
      "Custom reporting",
      "API access",
      "Custom solutions",
    ],
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`${
                billingCycle === "monthly" ? "bg-white shadow-sm" : ""
              } relative px-4 py-2 rounded-md text-sm font-medium transition-all`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`${
                billingCycle === "yearly" ? "bg-white shadow-sm" : ""
              } relative px-4 py-2 rounded-md text-sm font-medium transition-all`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "yearly" ? plan.price * 0.8 : plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50">
                <div className="text-sm text-gray-600">
                  Payment methods: Credit Card, PayPal, Bank Transfer
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Information */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900">
            Secure Payment Methods
          </h3>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium text-gray-900">Credit Card</h4>
              <p className="mt-2 text-sm text-gray-600">
                Visa, MasterCard, American Express
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium text-gray-900">PayPal</h4>
              <p className="mt-2 text-sm text-gray-600">
                Fast and secure online payment
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-medium text-gray-900">Bank Transfer</h4>
              <p className="mt-2 text-sm text-gray-600">
                Direct bank wire transfer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
