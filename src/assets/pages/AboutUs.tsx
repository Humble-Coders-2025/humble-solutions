import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of experience in digital transformation and business strategy.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Williams',
    role: 'Lead Designer',
    bio: 'Creative mind behind our stunning user interfaces, with a passion for intuitive user experiences.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Senior Developer',
    bio: 'Full-stack developer specializing in building scalable and performant web applications.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director',
    bio: 'Digital marketing expert with a proven track record of driving growth through innovative strategies.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];

const stats = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '180+' },
  { label: 'Team Members', value: '40+' },
  { label: 'Years Experience', value: '8' },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="pt-5 relative z-50 ">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://tailwindui.com/img/component/abstract-shapes/pattern-grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Humble Solutions
            </motion.h1>
            {/* <motion.p 
              className="mt-6 text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Empowering businesses with innovative digital solutions since 2015. We believe in the power of technology to transform ideas into reality.
            </motion.p> */}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              className="relative lg:mt-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="relative rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Our team working together" 
                  />
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Humble Solutions, we craft technology that adapts to your business. Every organization is unique, and so are its challenges. That’s why we design and deliver tailor-made solutions—whether web-based, app-based, or fully integrated systems—built to match the specific needs of our clients. 
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We believe innovation works best when it’s simple, purposeful, and built with humility. Our focus is on creating solutions that don’t just solve problems, but help businesses grow smarter and faster. 
              </p>
              
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl font-extrabold text-blue-400">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-500">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform} 
                        href={url} 
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <span className="sr-only">{platform}</span>
                        <i className={`fab fa-${platform} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your next project?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Get in touch with us today and let's create something amazing together.
          </p>
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#" 
              className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div> */}
      
      <Footer />
    </div>
  );
};

export default AboutUs;
