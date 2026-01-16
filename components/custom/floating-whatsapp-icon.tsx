"use client";
import Image from "next/image";
import { motion } from "motion/react";

const FloatingWhatsappIcon = () => {
  return (
    <div className="fixed bottom-10 right-18 z-50">
      <div className="relative">
        {/* Ripple */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"
          animate={{
            scale: [1, 2.3, 0],
            opacity: [0.35, 0, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "loop",
          }}
          style={{
            transformOrigin: "center",
          }}
        />

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-full p-3 bg-green-400 shadow-xl cursor-pointer"
        >
          <Image
            src="/icons/whatsapp-outline.png"
            className="invert brightness-0"
            alt="WhatsApp"
            width={30}
            height={30}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingWhatsappIcon;
