import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image?: string; // optional, some don't have images
};

const testimonials: Testimonial[] = [
  {
    name: "Owner of Gobind Traders",
    role: "",
    text: `Investing in Humble solutions was worth it! I'm glad I found the perfect tech partners who helped bring my vision to life. I simply explained my bookkeeping process for cylinder management and how I wanted my application to look and function like. Humble Solutions understood the task on the first go and developed such an incredible application that I can't imagine a more efficient way to manage cylinders! Now, I am able to upscale my cylinder distribution as now I know I have track of every cylinder that I have!`,
  },
  {
    name: "Gagan Verma",
    role: "Owner of Gagan Jewellers",
    text: `I have always wanted to expand my jewelry business by opening multiple branches, just like major brands such as Tanishq and Bluestone. When I outlined my requirement for a mobile application similar to Tanishq's, Humble Solutions assured me that they would deliver an app that was even better and they truly did. Unlike large brands that require an entire in-house development team to manage their applications, I now have a super-efficient and easy-to-use admin panel. This allows me to seamlessly handle my app, store inventory, and billing, all at the same time. All thanks to Humble solutions.`,
  },
  {
    name: "Pukhrajdeep Singh Makkar",
    role: "Owner of Aromex",
    text: `I never imagined that my complex business transactions could be automated with a single entry, until I discovered Humble Solutions. Their transparency and quality of work truly impressed me. Based on the application's complexity, I initially estimated it would take at least two months to develop. However, not only did they commit to delivering it within one month, but they also fulfilled that promise.`,
  },
  {
    name: "Owner of Harish Karyana Merchant",
    role: "",
    text: `"Managing inventory, tracking orders, and coordinating deliveries used to take hours every day. With the custom app built by Humble Solutions, everything is now streamlined into one seamless flow. I can browse products, manage stock, and track deliveries in real-time, all from my phone. I expected the project to drag on for weeks, but they not only delivered ahead of schedule, they exceeded my expectations in design and functionality. Highly dependable team!"`,
  },
];

const cardColors = [
  "bg-gray-900",
  "bg-yellow-950",
  "bg-lime-950",
  "bg-blue-950",
  "bg-indigo-950",
];

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
          <p className="text-gray-400">
            Hear directly from our clients about how Humble Solutions transformed their businesses with efficient and tailor-made tech solutions.
          </p>
          <button className="bg-[#1C1C1C] hover:bg-[#2e2e2e] text-white py-3 px-6 rounded-full flex items-center gap-2 text-sm font-medium transition">
            See All Testimonies
            <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Right Column: Scrollable Cards */}
        <div className="lg:w-1/2 w-full overflow-x-auto scrollbar-hide">
          <div ref={cardsRef} className="flex gap-6 snap-x snap-mandatory px-1 py-2 overflow-visible">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`snap-center shrink-0 w-[280px] md:w-[350px] lg:w-[380px] flex flex-col justify-between p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out relative ${cardColors[index % cardColors.length]}`}
              >
                <p className="text-gray-200 whitespace-pre-line mb-4">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  {t.image && (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
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
