"use client";
import { BadgeCheck, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
const ServicePackage = () => {
  const cards = [
    {
      label: "Bronze Contract",
      features: [
        "2 Minor Services (Every 15,000 KM)",
        "1 Major Service",
        "Engine Oil & Filter Change",
        "Fluids & A/C Gas Top-up",
        "26-Point Inspection",
        "Car Wash Included",
      ],
      btn: "bronze",
      coverage: "30,000 Km",
      standard: "basic",
      bgColor: "bg-[#CE8946]",
      textColor: "text-white",
      btnColor: "bg-white",
      btnTextColor: "text-[#CE8946]",
      btnHover: "hover:bg-white/90",
      circleColor: "#CE8946",
      badgeBg: "bg-white/20",
      badgeText: "text-white",
    },
    {
      label: "Silver Contract",
      features: [
        "4 Minor Services (Every 10,000 KM)",
        "1 Major Service",
        "Engine Oil & Filter Change",
        "Fluids & A/C Gas Top-up",
        "26-Point Inspection",
        "Car Wash Included",
      ],
      btn: "silver",
      coverage: "50,000 Km",
      standard: "standard",
      bgColor: "bg-[#C0C0C0]",
      textColor: "text-slate-900",
      btnColor: "bg-slate-800",
      btnTextColor: "text-[#ffffff]",
      btnHover: "hover:bg-slate-700",
      circleColor: "#8E8D89",
      badgeBg: "bg-white/80",
      badgeText: "text-slate-900",
    },
    {
      label: "Gold Contract",
      features: [
        "4 Minor Services (Every 10,000 KM)",
        "2 Major Services",
        "Engine Oil & Filter Change",
        "Fluids & A/C Gas Top-up",
        "26-Point Inspection",
        "Car Wash Included",
      ],
      btn: "gold",
      coverage: "50,000 Km",
      standard: "premium",
      bgColor: "bg-[#EFBF04]",
      textColor: "text-slate-900",
      btnColor: "bg-[#CC7722]",
      btnTextColor: "text-white",
      btnHover: "hover:bg-[#B86A1F]",
      circleColor: "#CC7722",
      badgeBg: "bg-white/80",
      badgeText: "text-slate-900",
    },
  ];
  return (
    <section className=" my-20">
      <div className="max-w-6xl px-5 mx-auto">
        <div>
          <h1 className="text-4xl font-bold  font-domine text-center text-slate-900">
            Our Service Packages
          </h1>
          <h2 className="text-center max-w-2xl mx-auto mt-2 text-slate-800">
            Comprehensive maintenance contracts designed to keep your vehicle in
            perfect condition. Choose the package that best fits your driving
            needs.
          </h2>
        </div>
        <div className={`grid grid-cols-1 gap-5 lg:grid-cols-3 mt-10`}>
          {cards.map((card, idx) => (
            <ServiceCard key={idx} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackage;

type CardProp = {
  card: any;
};
const ServiceCard = ({ card }: CardProp) => {
  const isPremium = card.standard === "premium";
  const isStandard = card.standard === "standard";
  const isBasic = card.standard === "basic";

  return (
    <div
      className={cn(
        `relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-slate-200 shadow backdrop-blur-sm`,
        card.bgColor
      )}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3
            className={cn(
              `text-lg font-medium  font-inter`,
              isBasic && "text-white"
            )}
          >
            {card.label}
          </h3>
          <p
            className={cn(
              `text-black ${card.btnColor} flex items-center gap-1 capitalize text-xs bg-slate-100 border rounded-lg px-3 py-1`,
              isBasic && "text-black"
            )}
          >
            <span>
              <Circle stroke={card.bgColor} size={8} fill={card.bgColor} />
            </span>
            {card.standard}
          </p>
        </div>

        <div className=" mb-6">
          <p
            className={cn(
              `text-4xl font-semibold font-inter tracking-tighter`,
              isBasic && "text-white"
            )}
          >
            {card.coverage}
          </p>
          <span className={cn(`text-sm opacity-70`, isBasic && "text-white")}>
            Coverage
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/10 mb-6" />

        {/* Features */}
        <ul className="space-y-3 text-sm">
          {card.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={cn(`text-green-50 mt-.5`, isBasic && "text-white")}
              >
                <BadgeCheck className="fill-green-500" />
              </span>
              <span className={cn(`leading-snug`, isBasic && "text-white")}>
                {feature.replace("✓", "")}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        className={cn(
          `mt-8 w-full rounded-xl ${card.btnColor} ${card.btnTextColor} capitalize py-3 text-sm font-medium`
        )}
      >
        Book {card.btn} Package
      </button>
    </div>
  );
};
