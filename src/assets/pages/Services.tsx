import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Mobile App Development ',
    description: 'Native and cross-platform mobile applications for iOS and Android, built to deliver intuitive design, high performance, and engaging user experiences. ',
    icon: '💻',
  },
  {
    title: 'Web Development ',
    description: 'Custom websites and scalable web applications designed with the latest technologies for performance, functionality, and seamless user experience. ',
    icon: '📱',
  },
  {
    title: 'Embedded & IoT Solutions ',
    description: 'Smart embedded systems and IoT-enabled applications tailored to connect devices, automate processes, and unlock intelligent business insights. ',
    icon: '🎨',
  },
  {
    title: 'Security & Utility Tools ',
    description: 'Robust security solutions and utility tools to safeguard data, optimize workflows, and improve overall digital efficiency. ',
    icon: '☁️',
  },
  {
    title: 'UI/UX Design',
    description: 'Engaging and user-friendly designs crafted to enhance usability, boost engagement, and create memorable customer journeys. ',
    icon: '🛒',
  },
  {
    title: 'E-commerce Development ',
    description: 'End-to-end e-commerce solutions to launch and scale your online store, from storefront design to secure payment integration. ',
    icon: '📈',
  },
  {
    title: 'Freelance & Agile Delivery ',
    description: 'Flexible engagement models with agile methodologies, ensuring timely project delivery and tailored solutions for every business need. ',
    icon: '📈',
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="pt-5">
        <Navbar />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide innovative digital solutions to help businesses grow, adapt, and thrive in the modern tech-driven world. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss how we can help bring your ideas to life.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Get A Free Quote
          </button>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
