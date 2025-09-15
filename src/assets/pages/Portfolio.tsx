import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "AttendX",
    category: "web",
    description:
      "Smart Attendance Solution — AttendX is an automated attendance system designed for large institutions. With one-click attendance, mobile-based verification, and anti-proxy measures, it ensures 100% accuracy. The platform reduces workload, saves time, and provides real-time dashboards for teachers and administrators. Custom solution for institutions.",
    image: "/photos/attendX_portfolio.jpg",
  },
  {
    id: 2,
    title: "MatriCare",
    category: "mobile",
    description:
      "Pregnancy Healthcare App — MatriCare is a custom pregnancy healthcare app designed to guide expecting mothers through every stage. It provides personalized health monitoring, medical report analysis, diet planning, and a supportive community. With reminders and 24/7 expert support, it ensures safe and stress-free maternity care. Available on iOS & Android.",
    image:
      "/photos/matri_portfolio.jpg",
  },
  {
    id: 3,
    title: "Shape – Cylinder Management App",
    category: "mobile",
    description:
      "Industrial Utility App — This custom solution helps gas distributors manage cylinders efficiently. It enables real-time tracking, inventory updates, and customer record management, along with automated notifications for due dates. Designed for ease of use, it streamlines workflows and enhances safety in cylinder distribution operations. Available on Android.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Aromex",
    category: "mobile",
    description:
      "Mobile Shop Management App — Tailored for a mobile retail business, Aromex enables efficient product management, supplier tracking, sales analysis, and inventory control. With detailed statistics and streamlined workflows, it helps the client manage operations more effectively. Custom solution available on Windows, iOS, and Android.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Jewellery Shop App",
    category: "mobile",
    description:
      "Retail Management App — A tailored application for jewellery retailers to handle inventory, billing, customer orders, and sales tracking. With a sleek interface and integrated analytics, it optimizes operations while offering customers a smooth and professional shopping experience, helping businesses improve efficiency and customer satisfaction. Available on Android.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b6e6ff46d2?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Harish Karyana Merchants App",
    category: "mobile",
    description:
      "A custom-built grocery shopping solution enabling users to browse categories, access discounts, and order essentials seamlessly. Integrated with delivery tracking, active order management, and smooth navigation, it ensures convenient shopping and efficient delivery for both customers and store managers.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342dfd0ff?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    title: "PrintShop – Smart Printing App",
    category: "mobile",
    description:
      "PrintEase makes document printing simple and convenient. Upload your files, customize print settings, preview with transparent pricing, and track your orders in real-time—all from your phone. Perfect for students, professionals, and businesses.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 8,
    title: "Health Camp Management System",
    category: "web",
    description:
      "A role-based platform for community health camps. From participant registration and vitals recording to doctor consultations and pharmacy dispensing, each desk has its own portal. Admins manage sponsors, camps, and reports, ensuring transparency, efficiency, and accurate digital health records.",
    image:
      "/photos/health_portfolio.jpg",
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-x-hidden">
      <div className="pt-5 relative z-[100]">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div
          className={`transition-all duration-300 ${
            hoveredProject ? "blur-md scale-[0.97]" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of successful projects and creative
              solutions.
            </p>
          </motion.div>

          {/* Grid of all projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl cursor-pointer group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="fixed inset-0 flex items-center justify-center z-30 p-4 pointer-events-none"
            >
              {projects
                .filter((p) => p.id === hoveredProject)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-lg"
                    
                    animate={{ scale: 1.1, backgroundColor: "#9333ea" }} // purple-600
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      {/* Replace the image with a background */}
                      <motion.div
                        className="w-full h-full"
                        initial={{ backgroundColor: "#1f2937" }} // gray-800
                        animate={{ backgroundColor: "#9333ea" }} // purple-600
                        transition={{ duration: 0.5 }}
                      />

                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2 text-center">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-3 text-center">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
