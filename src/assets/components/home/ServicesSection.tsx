import { useState } from 'react';
import { services } from './data/services';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  return (
    <section
      className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-10"
    >
      {/* Left Image */}
      <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0 relative">
        <img
          src={`${import.meta.env.BASE_URL}photos/hand.png`}
          alt="Hand"
          className="max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-w-lg w-full h-auto z-10"
        />

        {/* Foreground Phone Image */}
        <motion.img
          src={`${import.meta.env.BASE_URL}photos/phone-2.png`}
          alt="Phone"
          initial={{ opacity: 0, y: -140 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px]
            w-full h-auto z-[30]"
        />
      </div>

      {/* Right Accordion */}
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2 text-center lg:text-left">
          Services We Provide
        </h2>
        <p className="text-gray-300 mb-8 text-center lg:text-left max-w-lg">
          We help you grow– with smart technology, honest design, and scalable solutions...
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              service={service}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
