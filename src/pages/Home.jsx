const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-neutral-50"
    >
      <h1 className="text-4xl font-semibold text-gray-800 max-w-2xl select-none">
        Hi, I’m Priyanshu — a Frontend Engineer building clean, scalable, and
        user-focused web applications.
      </h1>

      <p className="text-gray-500 mt-5 max-w-xl select-none">
        I specialize in React and Tailwind CSS, with hands-on experience building
        production-ready dashboards, UI systems, and responsive web apps.
        Previously worked on real-world products at a legal-tech startup.
      </p>

      <button
        onClick={scrollToAbout}
        className="mt-8 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition"
      >
        More about me
      </button>
    </section>
  );
};

export default Home;
