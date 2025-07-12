import { useState } from 'react';
import { services } from './data/services';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center justify-center px-4 py-16 gap-10"
    >
      {/* Left Image */}
      <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
        <img
          src={`${import.meta.env.BASE_URL}photos/hand.png`}
          alt="Hand"
          className="max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-w-lg w-full h-auto"
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
