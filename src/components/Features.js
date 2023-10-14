export default function Features() {
  const features = [
    {
      name: "Personalized blockchain standards",
      description:
        "Datome empowers you to create a personalized blockchain standard tailored to your specific business needs.",
      image: "1.png",
    },
    {
      name: "Process optimization",
      description:
        "Datome reduces errors and redundancies,  leading to increased productivity and cost savings.",
      image: "2.png",
    },
    {
      name: "Stakeholder coordination",
      description:
        "Datome  harmonizes stakeholder'scontributions to enhance collaboration and operational efficiency.",
      image: "3.png",
    },
    {
      name: "Compliance assurance",
      description:
        "Datome minimizes the risk of legal disputes and ensuring that your operations meet all necessary requirements.",
      image: "4.png",
    },
    {
      name: "Data-driven decision making",
      description:
        "Datome ensures that you can trust your data, enabling confident, data-driven choices.",
      image: "5.png",
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

        <div className="mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-start text-center bg-secondary p-4 rounded-md"
            >
              <img
                alt={item.name}
                src={`./features/${item.image}`}
                className=" w-32 pt-10 pb-16 mx-auto"
              />
              <div>
                <h2 className="font-bold text-xl">{item.name}</h2>

                <p className="mt-2 text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
