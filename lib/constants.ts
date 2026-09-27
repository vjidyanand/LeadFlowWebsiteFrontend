import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  BellRing,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Handshake,
  House,
  LayoutDashboard,
  LineChart,
  ListChecks,
  MapPin,
  MessageSquareText,
  Network,
  Radar,
  Route,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react"

export type NavigationItem = {
  label: string
  href: string
}

export type Cta = {
  label: string
  href: string
}

export type IconContentItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type LifecycleStage = IconContentItem & {
  ai: string
  team: string
  outcome: string
}

export type AutomationFeature = IconContentItem & {
  category: "AI assistance" | "Team workflow" | "Manager visibility"
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  name: "LeadFlow",
  title: "Real Estate Lead Management Software | AI-Assisted Lead Flow",
  description:
    "AI-assisted real estate lead management software for developers, agencies, and sales teams. Organize enquiries, prioritize follow-ups, guide sales activity, and track opportunities toward property booking.",
} as const

export const primaryCta: Cta = {
  label: "Book a Demo",
  href: "#book-demo",
}

export const secondaryCta: Cta = {
  label: "See How It Works",
  href: "#how-it-works",
}

export const navigationItems: readonly NavigationItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "AI assistance", href: "#ai-assistance" },
  { label: "Team management", href: "#team-management" },
  { label: "Analytics", href: "#analytics" },
  { label: "Plans", href: "#purchase-plans" },
  { label: "FAQ", href: "#faq" },
]

export const trustSources: readonly IconContentItem[] = [
  {
    title: "Property portals",
    description: "Bring supported lead sources into one shared workflow.",
    icon: Building2,
  },
  {
    title: "Website enquiries",
    description: "Give direct enquiries a visible owner and next step.",
    icon: House,
  },
  {
    title: "Marketing campaigns",
    description: "Keep campaign context close to the lead journey.",
    icon: Target,
  },
  {
    title: "Business systems",
    description: "Discuss the systems your team needs to connect.",
    icon: Network,
  },
]

export const problemItems: readonly IconContentItem[] = [
  {
    title: "Enquiries arrive everywhere",
    description:
      "Portal, website, campaign, and referral leads can create disconnected handoffs.",
    icon: Network,
  },
  {
    title: "Priority is hard to judge",
    description:
      "Without shared context, it is difficult to know which conversation needs attention first.",
    icon: Gauge,
  },
  {
    title: "Follow-ups lose momentum",
    description:
      "Manual reminders and unclear next steps can make a promising enquiry easy to miss.",
    icon: BellRing,
  },
  {
    title: "Managers see the story too late",
    description:
      "Ownership, activity, and pipeline movement are difficult to review across a growing team.",
    icon: Radar,
  },
]

export const solutionPillars: readonly IconContentItem[] = [
  {
    title: "Organize every enquiry",
    description:
      "Create a connected view of incoming leads, their context, and their current owner.",
    icon: ListChecks,
  },
  {
    title: "Guide the next action",
    description:
      "Use AI-assisted signals and workflows to help the team act with relevant context.",
    icon: Sparkles,
  },
  {
    title: "Keep execution visible",
    description:
      "Give managers a clearer view of workload, activity, pipeline movement, and booking progress.",
    icon: LayoutDashboard,
  },
]

export const lifecycleStages: readonly LifecycleStage[] = [
  {
    title: "Lead captured",
    description: "Bring an incoming property enquiry into a shared lead flow.",
    icon: Building2,
    ai: "Organizes available enquiry details.",
    team: "Confirms source and ownership.",
    outcome: "A visible lead record.",
  },
  {
    title: "Qualification",
    description: "Understand buyer needs, timing, and relevant context.",
    icon: ClipboardCheck,
    ai: "Surfaces available context and potential fit.",
    team: "Checks needs and intent.",
    outcome: "A clearer next step.",
  },
  {
    title: "Priority signals",
    description: "Help the team decide which opportunity needs attention now.",
    icon: Gauge,
    ai: "Brings useful lead signals together.",
    team: "Reviews signals in context.",
    outcome: "Deliberate attention.",
  },
  {
    title: "Assignment",
    description: "Give the right person clear ownership of the opportunity.",
    icon: UsersRound,
    ai: "Supports configured routing where available.",
    team: "Accepts ownership and next action.",
    outcome: "Clear accountability.",
  },
  {
    title: "Sales engagement",
    description: "Start a relevant conversation with the buyer.",
    icon: MessageSquareText,
    ai: "Keeps useful history and context available.",
    team: "Builds trust and understands requirements.",
    outcome: "Buyer needs understood.",
  },
  {
    title: "Follow-up assistance",
    description: "Keep conversations moving with visible tasks and timing.",
    icon: BellRing,
    ai: "Surfaces reminders and reviewable suggestions.",
    team: "Follows up and records the outcome.",
    outcome: "Momentum maintained.",
  },
  {
    title: "Property matching",
    description: "Use buyer context to inform relevant property conversations.",
    icon: House,
    ai: "Suggests options from available preferences.",
    team: "Makes the final recommendation.",
    outcome: "More relevant conversations.",
  },
  {
    title: "Site visit & negotiation",
    description: "Track progress through high-value sales interactions.",
    icon: Handshake,
    ai: "Keeps history and next steps visible.",
    team: "Handles questions, visits, and negotiation.",
    outcome: "Progress toward a decision.",
  },
  {
    title: "Booking progress",
    description: "Keep opportunity stage and ownership clear through the final flow.",
    icon: CalendarCheck2,
    ai: "Highlights workflow signals for review.",
    team: "Guides the buyer through booking.",
    outcome: "A tracked booking opportunity.",
  },
]

export const automationFeatures: readonly AutomationFeature[] = [
  { title: "Lead qualification", description: "Help turn incoming enquiry details into a clearer starting point.", icon: ClipboardCheck, category: "AI assistance" },
  { title: "Lead scoring", description: "Surface signals for human review when prioritizing the queue.", icon: Gauge, category: "AI assistance" },
  { title: "Lead prioritization", description: "Focus attention on leads and next actions that need it.", icon: Target, category: "Team workflow" },
  { title: "Property matching", description: "Suggest property options using the buyer context available.", icon: House, category: "AI assistance" },
  { title: "Follow-up assistance", description: "Surface reminders and next steps so conversations do not lose momentum.", icon: BellRing, category: "Team workflow" },
  { title: "Message assistance", description: "Create a starting point for team-reviewed communication.", icon: MessageSquareText, category: "AI assistance" },
  { title: "Customer intent signals", description: "Help spot engagement changes worth reviewing.", icon: Radar, category: "AI assistance" },
  { title: "Lead re-engagement", description: "Identify inactive opportunities for a considered follow-up.", icon: Route, category: "Team workflow" },
  { title: "Sales task recommendations", description: "Suggest stage-aware tasks for the owner to review.", icon: CheckCircle2, category: "AI assistance" },
  { title: "Conversion insights", description: "Make pipeline patterns easier for managers to discuss.", icon: LineChart, category: "Manager visibility" },
  { title: "Booking opportunity signals", description: "Highlight progressed opportunities based on workflow signals.", icon: CalendarCheck2, category: "Manager visibility" },
]

export const teamManagementItems: readonly IconContentItem[] = [
  { title: "Clear lead ownership", description: "Give each lead a named owner, clear handoffs, and a visible next action.", icon: UsersRound },
  { title: "Focused work queues", description: "Help representatives see what to review, contact, or progress next.", icon: ListChecks },
  { title: "Shared activity context", description: "Keep follow-up work and lead movement easier to understand as a team.", icon: MessageSquareText },
  { title: "Manager visibility", description: "Review workload, pipeline movement, and performance context in one operating view.", icon: LayoutDashboard },
]

export const matchingCriteria: readonly IconContentItem[] = [
  { title: "Budget", description: "Use available budget context to narrow relevant conversations.", icon: Target },
  { title: "Location", description: "Bring preferred areas and project context into view.", icon: MapPin },
  { title: "Property type", description: "Compare available preferences such as configuration and use case.", icon: Building2 },
  { title: "Timing", description: "Keep stated timelines close to the owner’s next action.", icon: CalendarCheck2 },
]

export const bookingStages = [
  "Lead",
  "Qualified opportunity",
  "Customer engagement",
  "Property interest",
  "Site visit / interaction",
  "Negotiation",
  "Booking progress",
] as const

export const analyticsItems: readonly IconContentItem[] = [
  { title: "Lead flow", description: "Review lead volume and how opportunities move between stages.", icon: Route },
  { title: "Follow-up coverage", description: "See where next actions and overdue work need a closer look.", icon: BellRing },
  { title: "Team activity", description: "Give managers useful context for coaching and workload conversations.", icon: UsersRound },
  { title: "Pipeline progress", description: "Connect lead movement with site visits, negotiation, and booking progress.", icon: BarChart3 },
]

export const integrationCategories: readonly IconContentItem[] = [
  { title: "Lead sources", description: "Supported property portals, website enquiries, campaigns, and referrals.", icon: Building2 },
  { title: "Sales workflow", description: "Discuss communication, calendar, and business systems needed by your team.", icon: MessageSquareText },
  { title: "Your operating context", description: "Confirm connection availability and setup requirements for your workflow.", icon: Network },
]

export const faqItems: readonly FaqItem[] = [
  { question: "What is a real estate lead management platform?", answer: "It is a shared workflow for organizing property enquiries, assigning ownership, tracking activity, and guiding opportunities from first contact through booking progress." },
  { question: "How does AI help with real estate leads?", answer: "AI can help organize lead context, surface priority signals, suggest next actions, support follow-up, and assist property matching. Your team remains responsible for conversations and decisions." },
  { question: "Does AI replace the sales team?", answer: "No. AI assists with repetitive and data-driven work. Salespeople build relationships, understand buyer needs, conduct visits, handle objections, negotiate, and close." },
  { question: "Can leads from property portals be managed?", answer: "The platform is designed to centralize leads from supported property portals, websites, campaigns, and other sources. Exact connection availability should be confirmed for your setup." },
  { question: "Can managers track employee performance?", answer: "Managers can use a shared workflow to review lead ownership, activities, follow-up work, pipeline movement, and team performance context." },
  { question: "Can the platform help increase property bookings?", answer: "It is designed to help teams manage and progress opportunities more consistently. Results depend on lead sources, sales execution, the market, and the team’s process." },
  { question: "Who is the platform for?", answer: "It is designed for real estate developers, agencies, sales managers, CRM or lead managers, sales executives, and property sales teams." },
]
