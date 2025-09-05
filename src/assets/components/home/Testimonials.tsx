// src/components/Testimonials.tsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials, cardColors } from "../home/data/testimonialsData";

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column */}
        <div ref={leftRef} className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            What <span className="text-blue-400">Our Clients</span> Say About <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Hear directly from our clients about how Humble Solutions transformed their businesses with efficient and tailor-made tech solutions.
          </p>
          <button className="bg-[#1C1C1C] hover:bg-[#2e2e2e] text-white py-3 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition-transform duration-300 ease-in-out hover:scale-105">
            See All Testimonies
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Right Column: Scrollable Cards */}
        <div className="lg:w-1/2 w-full overflow-x-auto relative scrollbar-hide">
          {/* Gradient overlays for scroll hint */}
          <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />

          <div
            ref={cardsRef}
            className="flex gap-6 snap-x snap-mandatory px-2 py-2 overflow-visible"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`snap-center shrink-0 w-[280px] md:w-[350px] lg:w-[380px] flex flex-col justify-between p-6 rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative ${cardColors[index % cardColors.length]}`}
              >
                <p className="text-gray-200 whitespace-pre-line mb-4 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  {t.image && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
