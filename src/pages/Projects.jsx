const projects = [
  {
    title: "Portfolio Website",
    description:
      "Single-page scroll portfolio built with React and Tailwind showcasing projects and contact info.",
    tech: ["React", "Tailwind CSS", "HTML", "CSS"],
    image: "/portfolio.png",
    link: "https://my-portfolio-neon-mu-90.vercel.app",
  },
  {
    title: "Job Application Tracker",
    description:
      "A Power BI dashboard analyzing menu item sales, location-wise performance, and 3-month rolling trends.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    image: "/job-tracker.png",
    link: "https://job-application-tracker-ashy-six.vercel.app",
  },
  {
    title: "EV Population Prediction",
    description:
      "Used Python and multiple ML algorithms to predict the ratio of EVs to total vehicles across Indian states.",
    tech: ["Python", "Pandas", "Matplotlib", "Decision Tree", "ML"],
    image: "/ev.png",
    link: "https://github.com/priyanshunaudiyal/EV-Population-Prediction",
  },
  {
    title: "Southern Restaurant Dashboard",
    description:
      "A Power BI dashboard analyzing menu item sales, location-wise performance, and 3-month rolling trends.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    image: "/southern.jpeg",
    link: "https://github.com/priyanshunaudiyal/Southern-Restaurant-Dashboard",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 text-center bg-dot-pattern"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition duration-300"
            >
              {project.image && (
                <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                {project.tech.map((techItem, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 px-2 py-1 rounded shadow-sm"
                  >
                    {techItem}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
