const PortfolioSection = () => {
  const projects = [
    {
      title: "Fintrack",
      subtitle: "Finance Tracking Mobile App",
      description:
        "FinTrack is a smart finance tracking app designed to help you manage expenses, set savings goals, monitor subscriptions, and gain insights into your spending habits. With sleek visuals, personalized suggestions, and weekly progress tracking, FinTrack makes saving simple and efficient – all in one place. Available on iOS and Android.",
      image: "/images/fintrack.png",
    },
    {
      title: "Cyclone Manager",
      subtitle: "Task Automation App",
      description:
        "Cyclone helps teams automate repetitive tasks and manage workflows with intuitive UI and real-time sync. Build custom flows, integrate APIs, and supercharge your productivity.",
      image: "/images/cyclone.png",
    },
    {
      title: "Xplore360",
      subtitle: "Travel Discovery Platform",
      description:
        "Explore new destinations, connect with local guides, and plan personalized trips all in one app. Xplore360 is your AI-powered travel assistant.",
      image: "/images/xplore360.png",
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-24 bg-[#0f172a] text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 max-w-7xl mx-auto gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Here Is A Glimpse Of <span className="text-blue-400">Our Work....</span>
        </h2>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-base md:text-lg shadow flex items-center gap-2">
          View Our Portfolio →
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto custom-scrollbar">
        <div className="flex gap-6 sm:gap-8 px-2 md:px-6 py-6 min-w-fit">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#1e293b] rounded-3xl p-6 sm:p-10 md:p-14 w-[90vw] sm:w-[650px] md:w-[900px] lg:w-[1100px] shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              {/* Text Section */}
              <div className="md:w-2/3 w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{project.title}</h3>
                <h4 className="text-gray-400 text-lg sm:text-xl mb-4">{project.subtitle}</h4>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/3 w-full max-w-[350px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl object-cover w-full h-auto max-h-[280px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
