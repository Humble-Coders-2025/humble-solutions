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
      "AttendX is an automated attendance system designed for large institutions. With one-click attendance, mobile-based verification, and anti-proxy measures, it ensures 100% accuracy. The platform reduces workload, saves time, and provides real-time dashboards for teachers and administrators.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    description:
      "Secure mobile banking application with biometric authentication and transaction tracking.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "web",
    description:
      "Modern and responsive corporate website with CMS integration.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "mobile",
    description:
      "Mobile app for tracking workouts, nutrition, and fitness goals.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    category: "web",
    description:
      "Online reservation system for restaurants with table management.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Task Management App",
    category: "mobile",
    description:
      "Productivity app for managing tasks and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-x-hidden">
      <div className="pt-5 relative z-[100]">
        <Navbar />
      </div>

      {/* Added responsive padding */}
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
            {/* Responsive Typography */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of successful projects and creative
              solutions.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full p-1 bg-gray-800">
              {["all", "web", "mobile"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* The grid is already responsive, which is great! */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
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
              {filteredProjects
                .filter((p) => p.id === hoveredProject)
                .map((project) => (
                  // Responsive Hovered Card
                  <motion.div
                    key={project.id}
                    className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl w-full max-w-lg"
                    animate={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-3">
                          {project.description}
                        </p>
                        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                          View Project
                        </button>
                      </div>
                      <div className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
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