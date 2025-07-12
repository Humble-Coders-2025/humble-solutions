const HeroSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 min-h-screen mt-8 gap-10"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 md:p-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
          Transform Ideas into Intuitive <br />
          <span className="text-blue-400">Digital Experiences.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl">
          We craft sleek mobile apps, responsive websites, and user-centered UI/UX designs...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow transition text-base">
            Get In Touch
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow transition text-base flex items-center gap-2 justify-center">
            Explore Our Portfolio <span>→</span>
          </button>
        </div>
      </div>

      {/* Right: Images */}
      <div className="flex-1 flex items-center justify-center md:justify-end w-full mt-8 md:mt-0">
        <div className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[300px] md:h-[400px] lg:w-[360px] lg:h-[480px] xl:w-[400px] xl:h-[520px]">
          <img
            src={`${import.meta.env.BASE_URL}photos/phone-1-test.png`}
            alt="Phone 1"
            className="absolute z-20 rounded-3xl shadow-2xl rotate-[-8deg] 
                       w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]
                       left-[100px] top-[20px]"
          />
          <img
            src={`${import.meta.env.BASE_URL}photos/phone-2.png`}
            alt="Phone 2"
            className="absolute z-10 rounded-3xl shadow-2xl rotate-[-8deg]
                       w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]
                       left-0 top-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
