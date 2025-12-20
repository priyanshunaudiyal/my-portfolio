const experienceList = [
    {
      role: "Frontend Developer",
      company: "Lawise.ai",
      duration: "November 2024 - December 2025",
      description:
        "Developed and improved legal-tech web applications with a focus on clean UI and responsive design. Worked closely with backend and design teams to ship features, optimize components, and enhance user experience.",
    },
    {
      role: "Machine Learning Intern",
      company: "Remote Project",
      duration: "August 2024 - October 2024",
      description:
        "Created an EV population prediction model using Python, Pandas, and various ML algorithms. Decision Tree achieved lowest MSE.",
    },
    // {
    //   role: "Freelance React Developer",
    //   company: "CA Website",
    //   duration: "Jun 2025",
    //   description:
    //     "Built a personal website for a Chartered Accountant using React and Tailwind.",
    // },
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="py-20 px-6 bg-white text-center bg-dot-pattern">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-gray-800">Experience</h2>
          <div className="space-y-8 text-left">
            {experienceList.map((exp, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {exp.company} • {exp.duration}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  