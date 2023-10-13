export default function Features() {
  const features = [
    {
      name: "Personalized blockchain standards",
      description:
        "Datome empowers you to create a personalized blockchain standard tailored to your specific business needs.",
    },
    {
      name: "Process optimization",
      description:
        "Datome reduces errors and redundancies,  leading to increased productivity and cost savings.",
    },
    {
      name: "Stakeholder coordination",
      description:
        "Datome  harmonizes stakeholder'scontributions to enhance collaboration and operational efficiency.",
    },
    {
      name: "Compliance assurance",
      description:
        "Datome minimizes the risk of legal disputes and ensuring that your operations meet all necessary requirements.",
    },
    {
      name: "Data-driven decision making",
      description:
        "Datome ensures that you can trust your data, enabling confident, data-driven choices.",
    },
  ];

  return (
    <section className="features">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        <h2 className="text-sm font-semibold text-primary uppercase">
          Features
        </h2>
        <p className="mt-2 text-2xl font-bold  md:text-4xl md:mb-8">
          Five things Datome can do for you
        </p>

        <div className="text-white mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex items-start bg-black p-8 rounded-lg"
            >
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>

                <p className="mt-2 text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
