import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
            
          },
        }
      );
    }
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2057C5] to-[#9CBDFF] text-white px-6 py-4">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div ref={leftRef}>
          <h3 className="text-xl font-medium mb-2">Got a Project in Mind?</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Make It Happen Together!
          </h1>
          <img
            src="/paper-plane-girl.png" // Replace with your actual image path
            alt="Girl on paper plane"
            className="w-32 mt-4"
          />
        </div>

        {/* Right Side */}
        <form ref={rightRef} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email address</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2"
              placeholder="+123456789"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Message:</label>
            <textarea
              className="w-full bg-transparent border-b border-white placeholder-white outline-none py-2 h-24"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition duration-300"
          >
            Submit
            <span className="text-lg">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
