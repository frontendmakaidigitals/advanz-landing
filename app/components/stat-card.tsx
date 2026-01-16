"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 50, label: "Expert Technicians", suffix: "+" },
  { value: 10000, label: "Vehicles Serviced", suffix: "+" },
  { value: 100, label: "Genuine Parts", suffix: "%" },
];

export default function StatCard() {
  return (
    <div className="grid grid-cols-2 border-t border-b border-slate-400 lg:grid-cols-4 gap-6 mt-20 ">
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} delay={index * 0.1} />
      ))}
    </div>
  );
}

function StatItem({
  stat,
  delay,
}: {
  stat: { value: number; label: string; suffix: string };
  delay: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setValue(stat.value);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div ref={ref} className=" backdrop-blur-sm p-6 text-center">
      <div className="flex justify-center items-baseline ">
        <NumberFlow
          value={value}
          className="text-4xl lg:text-6xl text-black font-inter! tracking-tighter font-medium"
          format={{ useGrouping: true }}
        />
        <span className="text-5xl font-bold font-inter text-black">
          {stat.suffix}
        </span>
      </div>

      <p className="text-gray-700 font-medium leading-snug">{stat.label}</p>
    </motion.div>
  );
}
