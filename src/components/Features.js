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
        <h2 className="text-sm font-semibold leading-7 text-primary uppercase">
          Features
        </h2>
        <p className="mt-2 text-2xl font-bold tracking-tight md:text-4xl md:mb-8">
          Five things Datome can do for you
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((item) => (
            <div key="" className="flex items-start gap-4 ">
              <div>
                <h2 className="font-semibold leading-7 text-gray-900 md:text-lg">
                  {item.name}
                </h2>

                <p className="mt-2 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
