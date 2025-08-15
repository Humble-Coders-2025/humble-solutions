// src/pages/Home.tsx

import Navbar from "../components/navbar";
import HumbleAdvantage from "../components/home/HumbleAdvantage";
import Testimonials from "../components/home/Testimonials";
import Accordion from "../components/home/Accordion";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/Footer";
import HomeSections from "../components/home/HomeSections";

import { useRef } from "react";

const Home = () => {
  const scrollSnapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full bg-cover bg-left-top bg-no-repeat"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}photos/bg.png')`,
      }}
    >
      <div className="sticky top-5 left-0 right-0 z-50 shadow-md">
        <Navbar />
      </div>

      {/* Scroll Snap Container */}
      <HomeSections scrollContainerRef={scrollSnapRef} />

      {/* Remaining sections */}
      <HumbleAdvantage />
      <Testimonials />
      <Accordion />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
