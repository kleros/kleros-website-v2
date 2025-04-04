"use client";

import { useScreenSize } from "@/hooks/useScreenSize";

import { AnimatedStat } from "./AnimatedStat";

export function StatsSection() {
  const screenSize = useScreenSize();

  return screenSize === "lg" ? (
    <div className="flex flex-wrap gap-16 pt-28">
      <AnimatedStat value="$200K+" label="Paid to jurors" />
      <AnimatedStat value="35%" label="Staked on Court" />
    </div>
  ) : null;
}
