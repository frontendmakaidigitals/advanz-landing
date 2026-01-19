import Hero from "./sections/hero";
import Testimonial from "./components/Testimonial";
import Services from "./sections/services";
import CTA from "./sections/cta";
import StatCard from "./components/stat-card";
const page = () => {
  return (
    <main>
      <Hero />
      <Services />
      <div className="max-w-6xl px-5 mx-auto">
        <StatCard />
      </div>
      <Testimonial />
      <CTA />
    </main>
  );
};

export default page;
