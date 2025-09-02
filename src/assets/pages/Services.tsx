import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: '💻',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed to enhance user experience and engagement.',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your applications.',
    icon: '☁️',
  },
  {
    title: 'E-commerce',
    description: 'Complete e-commerce solutions to grow your online business.',
    icon: '🛒',
  },
  {
    title: 'SEO & Marketing',
    description: 'Improve your online visibility and reach more customers with our SEO services.',
    icon: '📈',
  },
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
            We offer a comprehensive suite of digital solutions to help your business thrive in the digital landscape.
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
