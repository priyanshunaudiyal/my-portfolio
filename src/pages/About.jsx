const About = () => {
    return (
      <section
        id="about"
        className="py-20 px-6 bg-white text-center bg-dot-pattern"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            About Me
          </h2>
  
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hey! I'm <span className="font-medium">Priyanshu</span>, a frontend
            developer with a passion for clean UI and intuitive experiences. I
            specialize in building responsive web applications using React, and
            I'm actively expanding into fullstack development.
          </p>
  
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I've worked on projects involving dashboards, AI integrations,
            visualizations, and single-page applications — all built with
            performance and accessibility in mind.
          </p>
  
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-700">
            Tech Stack
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm select-none">
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">React</li>
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">JavaScript</li>
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Tailwind CSS</li>
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Power BI</li>
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Python</li>
            <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">MongoDB</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default About;
  