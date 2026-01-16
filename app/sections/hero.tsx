"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import PopupForm from "../components/popup-form";
import { useState } from "react";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <section className="relative">
      {showPopup ? <PopupForm handleClose={handleClose} /> : null}
      <Image
        src={"/brand-images/DSC02035.jpg"}
        alt={"hero"}
        fill
        className="object-cover"
      />
      <div className="bg-black/50 absolute inset-0 w-full h-full z-10" />
      <div className="max-w-6xl mx-auto relative px-5 z-10">
        <div className="flex flex-col justify-center items-center min-h-130  max-h-[90dvh]">
          <h1 className="text-4xl lg:text-5xl max-w-3xl text-center text-slate-50 font-semibold font-inter tracking-tight ">
            Expert Auto Repair & Maintenance Service Center in Dubai
          </h1>
          <p className="text-center max-w-4xl text-slate-100 mt-5 mx-auto">
            We are an auto repair workshop in Dubai delivering precision-driven
            car servicing, diagnostics, and repairs. From routine maintenance to
            complex mechanical and electrical work, our facility is fully
            equipped to handle every stage
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-7">
            <button className="px-4 py-2 bg-[#25D366] w-full lg:w-auto justify-center  hover:bg-green-500 flex items-center text-slate-50 border rounded">
              <Image
                src={"/icons/whatsapp-dark-filled.png"}
                alt={""}
                className="invert brightness-0"
                width={20}
                height={20}
              />{" "}
              <span className="ml-2 font-inter font-semibold tracking-tighter text-slate-50">
                Book on WhatsApp
              </span>
            </button>
            <button
              onClick={handleClick}
              className="px-4 cursor-pointer py-2 hover:bg-yellow-500 border flex transition-colors duration-300 items-center text-slate-50 rounded"
            >
              <Phone size={20} stroke="white" />
              <span className="ml-2 font-inter font-semibold tracking-tighter ">
                Request Car Repair Estimate
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
