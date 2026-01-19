import React from "react";
import Hero from "./sections/hero";
import ServicePackage from "./sections/service-package";
import Testimonial from "./components/Testimonial";
import Services from "./sections/services";
import CTA from "./sections/cta";
const page = () => {
  return (
    <main>
      <Hero />
      <ServicePackage />
      <Services />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
