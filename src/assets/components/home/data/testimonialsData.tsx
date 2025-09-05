// src/data/testimonialsData.tsx
export type Testimonial = {
  name: string;
  role: string;
  text: string;
  image?: string; // optional
};

export const testimonials: Testimonial[] = [
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

export const cardColors = [
  "bg-gray-900",
  "bg-yellow-950",
  "bg-lime-950",
  "bg-blue-950",
  "bg-indigo-950",
];
