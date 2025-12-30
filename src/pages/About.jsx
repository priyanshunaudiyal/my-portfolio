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
          I’m <span className="font-medium">Priyanshu</span>, a Frontend Engineer
          with hands-on experience building modern, responsive, and
          user-centric web applications. I focus on writing clean, maintainable
          code while delivering polished UI experiences.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I’ve worked on real-world products including dashboards, internal tools,
          and customer-facing applications using React and Tailwind CSS. My work
          involves collaborating with designers and backend developers,
          optimizing UI performance, and improving usability across devices.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Currently, I’m strengthening my full-stack capabilities while actively
          seeking frontend-focused roles where I can contribute to impactful
          products and grow as an engineer.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Tech I Use Regularly
        </h3>

        <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm select-none">
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">React</li>
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">JavaScript</li>
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Tailwind CSS</li>
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Git & GitHub</li>
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">REST APIs</li>
          <li className="bg-gray-100 px-4 py-2 rounded shadow-sm">Python (Basics)</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
