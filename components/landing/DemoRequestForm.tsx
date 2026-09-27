"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, LoaderCircle, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { usePlanSelection } from "./PlanSelectionContext"
import { plans } from "./PurchasePlans"

const organizationTypes = [
  "Real estate developer",
  "Brokerage or real estate agency",
  "Property consultant",
  "Property management company",
  "Other real estate business",
] as const

const interests = [
  "Lead management",
  "AI assistance and automation",
  "WhatsApp, SMS and IVR",
  "Project and payment plans",
  "Property bookings and documents",
  "Employee management",
  "Reports and analytics",
] as const

const demoRequestSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name.").max(160),
  work_email: z.string().trim().email("Enter a valid work email.").max(254),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(40),
  company_name: z.string().trim().min(2, "Enter your organization name.").max(180),
  role: z.string().trim().max(120),
  organization_type: z.enum(organizationTypes, { required_error: "Select your organization type." }),
  city: z.string().trim().min(2, "Enter your organization’s primary city.").max(120),
  website: z.union([z.string().url("Enter a valid website URL."), z.literal("")]).or(z.literal("https://")),
  project_count: z.string().min(1, "Select your active project range."),
  monthly_lead_volume: z.string().min(1, "Select your monthly lead volume."),
  sales_team_size: z.string().min(1, "Select your sales team size."),
  employee_count: z.string(),
  current_crm: z.string().trim().max(120),
  interests: z.array(z.enum(interests)).min(1, "Choose at least one area for the demo."),
  rollout_timeline: z.string(),
  preferred_contact: z.enum(["Phone", "Email", "WhatsApp"]),
  message: z.string().trim().max(2000, "Keep your note under 2,000 characters."),
  consent: z.boolean().refine((value) => value, "Please agree to be contacted about your demo request."),
})

type DemoRequestValues = z.infer<typeof demoRequestSchema>

const defaultValues: DemoRequestValues = {
  full_name: "",
  work_email: "",
  phone: "",
  company_name: "",
  role: "",
  organization_type: "Real estate developer",
  city: "",
  website: "",
  project_count: "",
  monthly_lead_volume: "",
  sales_team_size: "",
  employee_count: "",
  current_crm: "",
  interests: [],
  rollout_timeline: "",
  preferred_contact: "Phone",
  message: "",
  consent: false,
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}{required ? <span aria-hidden="true" className="ml-1 text-destructive">*</span> : null}
      </Label>
      {children}
      {error ? <p id={`${id}-error`} className="text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  )
}

function apiBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "")
  if (configured) return configured
  if (typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname)) {
    return "http://localhost:3000"
  }
  return "https://api.magicghar.com"
}

export function DemoRequestForm() {
  const { selectedPlan, selectPlan } = usePlanSelection()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoRequestValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues,
  })

  const submit = async (values: DemoRequestValues) => {
    setSubmitError(null)
    setSuccessMessage(null)
    try {
      const response = await fetch(`${apiBaseUrl()}/public/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok) {
        const message = Array.isArray(result?.message) ? result.message.join(" ") : result?.message
        throw new Error(message || "We could not submit your request. Please try again.")
      }
      setSuccessMessage(result?.message || "Your demo request has been received. Our team will contact you shortly.")
      reset(defaultValues)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your demo request. Please try again.")
    }
  }

  const inputClass = "bg-white text-slate-950 placeholder:text-slate-400"
  const fieldProps = (name: keyof DemoRequestValues, id: string) => ({
    id,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${id}-error` : undefined,
  })

  return (
    <div className="rounded-xl border border-border bg-card p-5 text-foreground shadow-[0_20px_55px_-30px_rgba(3,17,34,0.5)] sm:p-7">
      {successMessage ? (
        <div className="grid min-h-80 content-center gap-5">
          <Alert className="border-emerald-300 bg-emerald-50 text-emerald-950 [&>svg]:text-emerald-700">
            <CheckCircle2 aria-hidden="true" className="size-5" />
            <AlertTitle>Request received</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
          <Button type="button" variant="outline" onClick={() => setSuccessMessage(null)} className="w-fit">
            Send another request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(submit)} noValidate className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">Plan your CRM walkthrough</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Share a little about your organization and we’ll tailor the demo to your operation.</p>
          </div>

          <Field id="demo-plan" label="Plan preference">
            <select
              id="demo-plan"
              value={selectedPlan?.name ?? ""}
              onChange={(event) => selectPlan(plans.find((plan) => plan.name === event.target.value) ?? null)}
              className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">No specific plan</option>
              {plans.map((plan) => (
                <option key={plan.name} value={plan.name}>
                  {plan.name} ({plan.price} {plan.priceNote})
                </option>
              ))}
            </select>
          </Field>

          {selectedPlan ? (
            <div className="rounded-md border border-primary/20 bg-primary/5 px-4 py-3" aria-live="polite">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Selected plan</p>
              <p className="mt-1 font-semibold text-foreground">
                {selectedPlan.name} <span className="font-normal text-muted-foreground">· {selectedPlan.price} {selectedPlan.priceNote}</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{selectedPlan.users} · {selectedPlan.leads}</p>
            </div>
          ) : null}

          {submitError ? <Alert variant="destructive" className="text-sm">{submitError}</Alert> : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="demo-full-name" label="Full name" required error={errors.full_name?.message}>
              <Input {...register("full_name")} {...fieldProps("full_name", "demo-full-name")} autoComplete="name" placeholder="Your name" className={inputClass} />
            </Field>
            <Field id="demo-work-email" label="Work email" required error={errors.work_email?.message}>
              <Input {...register("work_email")} {...fieldProps("work_email", "demo-work-email")} type="email" autoComplete="email" placeholder="you@company.com" className={inputClass} />
            </Field>
            <Field id="demo-phone" label="Phone / WhatsApp" required error={errors.phone?.message}>
              <Input {...register("phone")} {...fieldProps("phone", "demo-phone")} type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={inputClass} />
            </Field>
            <Field id="demo-company" label="Organization name" required error={errors.company_name?.message}>
              <Input {...register("company_name")} {...fieldProps("company_name", "demo-company")} autoComplete="organization" placeholder="Your company" className={inputClass} />
            </Field>
            <Field id="demo-role" label="Your role" error={errors.role?.message}>
              <Input {...register("role")} {...fieldProps("role", "demo-role")} placeholder="e.g. Sales Director" className={inputClass} />
            </Field>
            <Field id="demo-organization-type" label="Organization type" required error={errors.organization_type?.message}>
              <select id="demo-organization-type" {...register("organization_type")} aria-invalid={Boolean(errors.organization_type)} aria-describedby={errors.organization_type ? "demo-organization-type-error" : undefined} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {organizationTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </Field>
            <Field id="demo-city" label="Primary operating city" required error={errors.city?.message}>
              <Input {...register("city")} {...fieldProps("city", "demo-city")} placeholder="e.g. Pune" className={inputClass} />
            </Field>
            <Field id="demo-website" label="Company website" error={errors.website?.message}>
              <Input {...register("website")} {...fieldProps("website", "demo-website")} type="url" placeholder="https://yourcompany.com" className={inputClass} />
            </Field>
          </div>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-foreground">Organization scale</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="demo-project-count" label="Active projects" required error={errors.project_count?.message}>
                <select id="demo-project-count" {...register("project_count")} aria-invalid={Boolean(errors.project_count)} aria-describedby={errors.project_count ? "demo-project-count-error" : undefined} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select range</option><option>1</option><option>2-5</option><option>6-10</option><option>11-25</option><option>26+</option>
                </select>
              </Field>
              <Field id="demo-lead-volume" label="New leads per month" required error={errors.monthly_lead_volume?.message}>
                <select id="demo-lead-volume" {...register("monthly_lead_volume")} aria-invalid={Boolean(errors.monthly_lead_volume)} aria-describedby={errors.monthly_lead_volume ? "demo-lead-volume-error" : undefined} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select range</option><option>Under 100</option><option>100-500</option><option>501-2,000</option><option>2,001-10,000</option><option>10,000+</option>
                </select>
              </Field>
              <Field id="demo-sales-team" label="Sales agents" required error={errors.sales_team_size?.message}>
                <select id="demo-sales-team" {...register("sales_team_size")} aria-invalid={Boolean(errors.sales_team_size)} aria-describedby={errors.sales_team_size ? "demo-sales-team-error" : undefined} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select range</option><option>1-5</option><option>6-15</option><option>16-50</option><option>51-100</option><option>100+</option>
                </select>
              </Field>
              <Field id="demo-employee-count" label="Total employees">
                <select id="demo-employee-count" {...register("employee_count")} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select range</option><option>1-10</option><option>11-50</option><option>51-200</option><option>201-500</option><option>500+</option>
                </select>
              </Field>
            </div>
            <Field id="demo-current-crm" label="Current CRM or lead tracking process">
              <Input {...register("current_crm")} {...fieldProps("current_crm", "demo-current-crm")} placeholder="e.g. spreadsheets, another CRM, or none" className={inputClass} />
            </Field>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-foreground">What should we focus on? <span className="font-normal text-muted-foreground">(choose all that apply)</span></legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {interests.map((interest) => (
                <label key={interest} className="flex min-h-10 cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-foreground">
                  <input type="checkbox" value={interest} {...register("interests")} className="size-4 shrink-0 rounded border-input accent-primary" />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests?.message ? <p className="text-xs font-medium text-destructive">{errors.interests.message}</p> : null}
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="demo-rollout" label="Desired rollout timeline">
              <select id="demo-rollout" {...register("rollout_timeline")} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Not decided</option><option>Immediately</option><option>Within 1 month</option><option>Within 1-3 months</option><option>More than 3 months</option>
              </select>
            </Field>
            <Field id="demo-contact-preference" label="Preferred contact method">
              <select id="demo-contact-preference" {...register("preferred_contact")} className="h-10 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option>Phone</option><option>Email</option><option>WhatsApp</option>
              </select>
            </Field>
          </div>

          <Field id="demo-message" label="Anything else we should know?" error={errors.message?.message}>
            <Textarea {...register("message")} {...fieldProps("message", "demo-message")} rows={3} placeholder="Share any specific workflows, integrations, or questions." className="bg-white text-slate-950 placeholder:text-slate-400" />
          </Field>

          <div className="space-y-2">
            <label className="flex items-start gap-3 text-sm leading-5 text-muted-foreground">
              <input type="checkbox" {...register("consent")} className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary" aria-invalid={Boolean(errors.consent)} />
              <span>I agree that LeadFlow may contact me about this demo request.</span>
            </label>
            {errors.consent?.message ? <p className="text-xs font-medium text-destructive">{errors.consent.message}</p> : null}
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? <><LoaderCircle aria-hidden="true" className="size-4 animate-spin" />Sending request...</> : <>Request my demo<Send aria-hidden="true" /></>}
          </Button>
          <p className="text-center text-xs leading-5 text-muted-foreground">Your information is used only to respond to this request.</p>
        </form>
      )}
    </div>
  )
}