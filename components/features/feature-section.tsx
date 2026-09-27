"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, LineChart, Layers, Globe, Lock, Network, Gauge, BellRing, Radar, ListChecks, Sparkles } from "lucide-react"

const features = [
  {
    icon: Network,
    title: "Enquiries arrive everywhere",
    description: "Portal, website, campaign, and referral leads can create disconnected handoffs.",
    color: "teal",
    stat: "< 10ms",
    statLabel: "avg latency"
  },
  {
    icon: Gauge,
    title: "Priority is hard to judge",
    description: "Without shared context, it is difficult to know which conversation needs attention first.",
    color: "coral",
    stat: "SOC 2",
    statLabel: "certified"
  },
  {
    icon: BellRing,
    title: "Follow-ups lose momentum",
    description: "Manual reminders and unclear next steps can make a promising enquiry easy to miss.",
    color: "gold",
    stat: "40%",
    statLabel: "faster insights"
  },
  {
    icon: Radar,
    title: "Managers see the story too late",
    description: "Ownership, activity, and pipeline movement are difficult to review across a growing team.",
    color: "teal",
    stat: "200+",
    statLabel: "integrations"
  },
  {
    icon: ListChecks,
    title: "Organize every enquiry",
    description: "Create a connected view of incoming leads, their context, and their current owner.",
    color: "coral",
    stat: "40+",
    statLabel: "edge regions"
  },
  {
    icon: Sparkles,
    title: "Guide the next action",
    description: "Use AI-assisted signals and workflows to help the team act with relevant context.",
    color: "gold",
    stat: "99.99%",
    statLabel: "uptime SLA"
  },
]

const colorClasses = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/20",
    glow: "shadow-teal/5"
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/20",
    glow: "shadow-coral/5"
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/20",
    glow: "shadow-gold/5"
  },
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const colors = colorClasses[feature.color as keyof typeof colorClasses]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <feature.icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

      {/* Stat */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} ${colors.border} border`}>
        <span className={`text-sm font-bold ${colors.text}`}>{feature.stat}</span>
        <span className="text-xs text-muted-foreground">{feature.statLabel}</span>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 blur-xl`} />
    </motion.div>
  )
}

export function FeatureSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 lg:py-18 overflow-hidden">
      {/* Angled divider top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background transform -skew-y-2 origin-top-left -translate-y-12" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Follow-up is fragmented{" "}
            <span className="text-teal">booking can be hard to see</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Property sales teams need more than a list of enquiries. They need clear ownership,
             relevant buyer context, and a disciplined path for every next action.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Angled divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform skew-y-2 origin-bottom-right translate-y-12" />
    </section>
  )
}
