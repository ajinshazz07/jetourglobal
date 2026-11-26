"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { activeVehicles, type Vehicle } from "@/config/site";

type Ctx = {
  selected: Vehicle;
  select: (id: string) => void;
  /** Vehicle preselected in the enquiry form. */
  enquiryVehicleId: string;
  setEnquiryVehicleId: (id: string) => void;
  /** Preselect a vehicle in the enquiry form and scroll to it. */
  enquire: (id: string) => void;
};

const VehicleCtx = createContext<Ctx | null>(null);

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  // Move focus for keyboard and screen-reader users without a second jump.
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  history.replaceState(null, "", `#${id}`);
}

export function VehicleProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState(activeVehicles[0]?.id ?? "");
  const [enquiryVehicleId, setEnquiryVehicleId] = useState("");

  const select = useCallback((id: string) => setSelectedId(id), []);
  const enquire = useCallback((id: string) => {
    setEnquiryVehicleId(id);
    scrollToSection("contact");
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      selected: activeVehicles.find((v) => v.id === selectedId) ?? activeVehicles[0],
      select,
      enquiryVehicleId,
      setEnquiryVehicleId,
      enquire,
    }),
    [selectedId, select, enquiryVehicleId, enquire],
  );

  return <VehicleCtx.Provider value={value}>{children}</VehicleCtx.Provider>;
}

export function useVehicle() {
  const ctx = useContext(VehicleCtx);
  if (!ctx) throw new Error("useVehicle must be used inside VehicleProvider");
  return ctx;
}
