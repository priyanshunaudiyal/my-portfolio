const testimonials = [
  {
    name: "Bala Dutt",
    role: "Tech Lead Global Verification and Compliance platform plus India Local Payment Methods, Stripe",
    feedback:
      "Priyanshu is a software enthusiast. He likes building things. He is also a great team player and easy to talk to.",
  },
  // {
  //   name: "DEF",
  //   role: "Product Designer",
  //   feedback:
  //     "He understands design requirements quickly and translates them into pixel-perfect UI. Very reliable and always open to feedback.",
  // },
  // {
  //   name: "GHI",
  //   role: "Project Lead",
  //   feedback:
  //     "Priyanshu shows strong ownership and always delivers before deadlines. His contributions to both UI and deployment processes were valuable to the team.",
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800">
          Testimonials
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{item.feedback}”</p>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
