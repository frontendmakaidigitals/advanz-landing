"use client";
import { useState } from "react";
import Image from "next/image";
import PopupForm from "../components/popup-form";
export const services = [
  {
    title: "General Repair",
    desc: "Minor & Major Servicing, Mechanical Repairs, Electrical Diagnostics, Underbody Repairs & General Maintenance.",
    img: "general-service.jpg",
    btn: "Book Now",
  },
  {
    title: "Brakes Service",
    desc: "Free Brake Inspection, Brake Pad Replacement, Disc Replacement & Skimming, Brake Noise Diagnosis.",
    img: "brake-services.jpg",
    btn: "Book Brake Service",
  },
  {
    title: "Oil Change Service",
    desc: "Premium Engine Oil Change, Oil Filter Replacement, Fluids Top-up, Free Inspection, Computer Scan & Car Wash.",
    img: "oil-change.webp",
    btn: "Book Oil Change",
  },
  {
    title: "Car A/C Repair & Service",
    desc: "Free A/C Inspection, A/C Gas Refill, Cooling Performance Repair, Smell Removal & Complete A/C Overhaul.",
    img: "ac-repair.jpg",
    btn: "Book A/C Service",
  },
  {
    title: "Engine Repair / Rebuild",
    desc: "Engine Diagnostics, Engine Overhaul, Rebuild & Repair, Efficiency Optimization & Oil Service.",
    img: "engine-repair.webp",
    btn: "Book Engine Inspection",
  },
  {
    title: "Gearbox / Transmission Repair",
    desc: "Free Transmission Inspection & Estimate, Gearbox Repair, Overhaul, Oil & Filter Replacement.",
    img: "car-transmission.jpeg",
    btn: "Book Transmission Service",
  },
  {
    title: "Suspension Repair",
    desc: "Suspension Inspection, Shock Absorbers, Struts, Axles, Full Underbody Suspension & Alignment.",
    img: "suspension.jpg",
    btn: "Book Suspension Service",
  },
  {
    title: "Free Car Pickup & Drop",
    desc: "We collect your car from home, office, or anywhere in Dubai, service it professionally, and deliver it back.",
    img: "car-pick-up.jpg",
    btn: "Schedule Free Pickup",
  },
  {
    title: "Auto Parts",
    desc: "Genuine Auto Parts Supply & Installation, including mirrors, windshields, windows, electrical & mechanical components.",
    img: "automotive-parts.webp",
    btn: "Request Parts",
  },
  {
    title: "Tyres Shop",
    desc: "Tyre Replacement, Wheel Alignment & Balancing, Tyre Rotation, Rim Repair & New Rims.",
    img: "car-tyres.avif",
    btn: "Buy Tyres Now",
  },
  {
    title: "Inspection & Computer Diagnostics",
    desc: "Free Computer Scanning, Full Vehicle Diagnostics & Pre-Purchase Inspection.",
    img: "autoinspection.jpg",
    btn: "Book Inspection",
  },
  {
    title: "Steering Repair",
    desc: "Steering Inspection, Rack & Assembly Repair, Power Steering Service.",
    img: "car-steering.jpg",
    btn: "Book Steering Service",
  },
  {
    title: "Body Shop & Paint",
    desc: "Accident Repair, Full Body Painting, Detailing, Polishing & Dent Removal.",
    img: "car-paint.jpg",
    btn: "Book Body Repair",
  },
  {
    title: "Auto Glass / Windscreen",
    desc: "Windscreen Replacement, Door Glass Replacement for all makes & models.",
    img: "car-windshield.jpg",
    btn: "Replace Glass",
  },
  {
    title: "Battery Replacement",
    desc: "Free Battery Testing & On-the-Spot Battery Replacement.",
    img: "battery-replacement.webp",
    btn: "Replace Battery",
  },
  {
    title: "Car Detailing",
    desc: "Interior & Exterior Detailing, Polishing & Paint Protection Services.",
    img: "paint.jpg",
    btn: "Book Detailing",
  },
  {
    title: "Car Accident Repair",
    desc: "Minor & Major Collision Repair for American, German, Exotic & Luxury Cars.",
    img: "Car-accident-repair.webp",
    btn: "Accident Repair Support",
  },
  {
    title: "Ceramic Coating",
    desc: "Premium Ceramic Coating for Long-Term Paint Protection & Gloss.",
    img: "cermaic-coating.jpeg",
    btn: "Apply Ceramic Coating",
  },
];
const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 8);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="max-w-6xl px-5 mx-auto my-5">
      {open ? <PopupForm handleClose={handleClose} /> : null}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-domine text-center">
          We Provide Professional Repair Services
        </h1>
        <p className="text-center max-w-2xl mx-auto mt-1">
          Car Repair Services at Motorox Automotive Dubai
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-7">
        {visibleServices.map((service, idx) => (
          <div key={idx}>
            <div className="bg-slate-100 relative overflow-hidden h-50 border border-slate-600/40 rounded-lg mb-2">
              <Image
                fill
                src={`/landing/services/${service.img}`}
                alt={service.title}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-inter font-medium mb-0.5">
                {service.title}
              </h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6 ">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-1.5 border bg-yellow-500 rounded text-slate-50"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-1.5 border border-black rounded"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Services;
