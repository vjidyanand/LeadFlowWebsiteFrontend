"use client"

import { createContext, useContext, useState } from "react"

export type SelectedPlan = {
  name: string
  price: string
  priceNote: string
  users: string
  leads: string
}

type PlanSelectionContextValue = {
  selectedPlan: SelectedPlan | null
  selectPlan: (plan: SelectedPlan | null) => void
}

const PlanSelectionContext = createContext<PlanSelectionContextValue | null>(null)

export function PlanSelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null)

  return (
    <PlanSelectionContext.Provider value={{ selectedPlan, selectPlan: setSelectedPlan }}>
      {children}
    </PlanSelectionContext.Provider>
  )
}

export function usePlanSelection() {
  const context = useContext(PlanSelectionContext)
  if (!context) throw new Error("usePlanSelection must be used within PlanSelectionProvider")
  return context
}