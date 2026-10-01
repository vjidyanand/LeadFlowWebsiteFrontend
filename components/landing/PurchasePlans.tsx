"use client"

import { Check, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

import { SectionHeading } from "./SectionHeading"
import { usePlanSelection } from "./PlanSelectionContext"

type Plan = {
  name: string
  label: string
  price: string
  priceNote: string
  description: string

  // Primary limits
  users: string
  leads: string

  // Additional measurable usage limits
  usageLimits: string[]

  featured?: boolean

  features: string[]
}

export const plans: readonly Plan[] = [
  {
    name: "Basic",
    label: "For getting started",
    price: "Free",
    priceNote: "forever",
    description:
      "A focused lead workspace for a small property sales team.",

    users: "Up to 3 users",
    leads: "Up to 500 active leads",

    usageLimits: [
      "Up to 1 project",
      "Up to 100 inventory units",
      "Up to 1,000 new leads/month",
      "Up to 2 automation workflows",
      "Up to 100 AI credits/month",
      "Up to 500 WhatsApp conversations/month",
      "Up to 2 GB storage",
    ],

    features: [
      "Lead capture, pipeline and follow-up tasks",
      "Lead assignment and activity history",
      "Basic lead and conversion reports",
      "Core property and customer records",
      "Basic lead source management",
      "Email support and guided setup",
    ],
  },

  {
    name: "Medium",
    label: "For growing sales teams",
    price: "₹12,999",
    priceNote: "per month",
    description:
      "Connected sales, AI assistance and team controls for active developers and agencies.",

    users: "Up to 15 users",
    leads: "Up to 5,000 active leads",

    featured: true,

    usageLimits: [
      "Up to 10 projects",
      "Up to 5,000 inventory units",
      "Up to 10,000 new leads/month",
      "Up to 10,000 automation runs/month",
      "Up to 2,000 AI credits/month",
      "Up to 10,000 WhatsApp conversations/month",
      "Up to 50 GB storage",
    ],

    features: [
      "Everything in Basic",
      "RBAC for admins, managers and lead agents",
      "AI assistance for qualification, scoring and follow-ups",
      "WhatsApp chat, text messaging and AI agent calling",
      "Project setup, inventory and payment plan management",
      "Booking, KYC, agreements and customer setup",
      "Advanced lead, project and booking reports",
      "Lead routing and automated follow-up workflows",
    ],
  },

  {
    name: "Premium",
    label: "For complete operations",
    price: "₹29,999",
    priceNote: "per month",
    description:
      "A company-wide operating system for sales, people, projects and property bookings.",

    users: "Up to 50 users",
    leads: "Unlimited active leads",

    usageLimits: [
      "Unlimited projects",
      "Unlimited inventory units",
      "Unlimited lead sources",
      "Up to 100,000 automation runs/month",
      "Up to 10,000 AI credits/month",
      "Up to 50,000 WhatsApp conversations/month",
      "Up to 250 GB storage",
    ],

    features: [
      "Everything in Medium",
      "Full AI automation center, IVR setup and management",
      "Advanced AI agent calling and conversation workflows",
      "Complete EMS: recruitment, verification, onboarding, salary, FNF, attendance and leaves",
      "Organization structures across projects, employees, leads and agents",
      "Full booking lifecycle: registry, nominee, possession, cancellations and refunds",
      "Employee, salary, customer, project and management reports",
      "Priority support, data import and custom integrations",
    ],
  },
] as const

export function PurchasePlans() {
  const { selectedPlan, selectPlan } = usePlanSelection()

  return (
    <section
      id="purchase-plans"
      aria-labelledby="purchase-plans-title"
      className="scroll-mt-20 border-y border-border/70 bg-slate-50/70 py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="purchase-plans-title"
          eyebrow="Plans that grow with your operation"
          title="Start with lead management. Scale into a complete property business platform."
          description="Choose the level of automation, people operations and booking control your team needs today. Upgrade as your portfolio and organization grow."
          centered
          className="mx-auto"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              onClick={() => selectPlan(plan)}
              className={`relative flex cursor-pointer flex-col rounded-2xl border p-6 shadow-[0_16px_30px_-24px_rgba(16,24,40,0.4)] sm:p-7 ${
                plan.featured
                  ? "border-primary bg-primary text-primary-foreground lg:-mt-4 lg:mb-4"
                  : "border-border bg-card"
              } ${selectedPlan?.name === plan.name ? "ring-2 ring-accent ring-offset-2" : ""}`}
            >
              {/* Popular badge */}
              {plan.featured ? (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  <Sparkles
                    aria-hidden="true"
                    className="size-3.5"
                  />
                  Most popular
                </div>
              ) : null}

              {/* Plan heading */}
              <p
                className={`text-sm font-semibold ${
                  plan.featured
                    ? "text-primary-foreground/75"
                    : "text-primary"
                }`}
              >
                {plan.label}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em]">
                {plan.name}
              </h3>

              <button
                type="button"
                aria-pressed={selectedPlan?.name === plan.name}
                onClick={() => selectPlan(plan)}
                className={`mt-3 w-fit rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  selectedPlan?.name === plan.name
                    ? "border-accent bg-accent text-accent-foreground"
                    : plan.featured
                      ? "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                      : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {selectedPlan?.name === plan.name ? "Selected" : "Select plan"}
              </button>

              <p
                className={`mt-3 min-h-14 text-sm leading-6 ${
                  plan.featured
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-[-0.03em]">
                  {plan.price}
                </span>

                <span
                  className={`text-sm ${
                    plan.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.priceNote}
                </span>
              </div>

              {/* Primary account limits */}
              <div
                className={`mt-6 grid gap-2 border-y py-4 text-sm font-semibold ${
                  plan.featured
                    ? "border-primary-foreground/20"
                    : "border-border"
                }`}
              >
                <p>{plan.users}</p>
                <p>{plan.leads}</p>
              </div>

              {/* Usage limits */}
              <div className="mt-5">
                <p
                  className={`mb-3 text-xs font-bold uppercase tracking-wider ${
                    plan.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  Usage limits
                </p>

                <ul className="grid gap-2.5">
                  {plan.usageLimits.map((limit) => (
                    <li
                      key={limit}
                      className="flex gap-2.5 text-sm leading-5"
                    >
                      <Check
                        aria-hidden="true"
                        className={`mt-0.5 size-4 shrink-0 ${
                          plan.featured
                            ? "text-accent"
                            : "text-primary"
                        }`}
                      />

                      <span
                        className={
                          plan.featured
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }
                      >
                        {limit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature list */}
              <div
                className={`my-6 border-t pt-5 ${
                  plan.featured
                    ? "border-primary-foreground/20"
                    : "border-border"
                }`}
              >
                <p
                  className={`mb-3 text-xs font-bold uppercase tracking-wider ${
                    plan.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  Included features
                </p>

                <ul className="grid gap-3">
                  {plan.features.map((feature) => (
                    <li
                      className="flex gap-2.5 text-sm leading-5"
                      key={feature}
                    >
                      <Check
                        aria-hidden="true"
                        className={`mt-0.5 size-4 shrink-0 ${
                          plan.featured
                            ? "text-accent"
                            : "text-primary"
                        }`}
                      />

                      <span
                        className={
                          plan.featured
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                asChild
                variant={plan.featured ? "secondary" : "outline"}
                className="mt-auto w-full"
              >
                <a href="#book-demo">
                  {plan.name === "Basic"
                    ? "Start free"
                    : "Talk to sales"}
                </a>
              </Button>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need more than 50 users, multiple business units or a tailored
          rollout? Premium plans can be customized for your organization.
        </p>

        {/* Fair usage note */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-5 text-muted-foreground/80">
          Usage limits help keep plans predictable. Enterprise-scale
          requirements, higher messaging volumes, AI usage and additional
          storage can be customized based on your organization&apos;s needs.
        </p>
      </Container>
    </section>
  )
}