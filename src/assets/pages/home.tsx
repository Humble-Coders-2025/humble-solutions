// src/pages/Home.tsx

import Navbar from '../components/navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import HumbleAdvantage from '../components/home/HumbleAdvantage';
import Testimonials from '../components/home/Testimonials';
import Accordion from '../components/home/Accordion';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div
      className="w-full bg-cover bg-left-top bg-no-repeat"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}photos/bg.png')` }}
    >
      <div className="sticky top-5 left-0 right-0 z-50 shadow-md">
        <Navbar />
      </div>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <HumbleAdvantage />
      <Testimonials />
      <Accordion />
      <ContactSection />
      
      <Footer />
    </div>
  );
};


export default Home;
