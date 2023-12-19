export default function Features() {
  const features = [
    {
      name: "Blockchain Empowerment",
      description:
        "Each project comes with unique requirements that may demand different types of blockchains. Our API-driven approach ensures that your blockchain integration is not only powerful but also tailored to your project's distinct needs.",
      image: "1.png",
    },
    {
      name: "Simplified Integration",
      description:
        "Chainkeeper streamlines the integration of new smart contracts through its user-friendly REST API interface, simplifying complex processes and enhancing operational efficiency. Additionally, it provides a secure Custodian Wallet solution and supports Non-Custodian Interactions, ensuring that user data and transactions remain protected and compliant with industry standards.",
      image: "2.png",
    },
    {
      name: "Flexibility",
      description:
        "ChainKeeper provides the freedom to choose the blockchain that best suits your business requirements. Whether you're establishing a community-driven initiative or certifying crucial data, our platform adapts to diverse scenarios.",
      image: "3.png",
    },
  ];

  return (
    <section className="features">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        {/* <h2 className="text-sm font-semibold text-primary uppercase">
          Features
        </h2> */}
        <h2 className="mt-2 text-xl lg:text-2xl md:mb-8">
          Some things ChainKpr can give you
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-1 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-start text-center bg-secondary p-4 rounded-md"
            >
              <img
                alt={item.name}
                src={`./features/${item.image}`}
                className=" w-24 pt-6 pb-10  hue-rotate-90 mx-auto"
              />
              <div>
                <h3 className="text-xl">{item.name}</h3>

                <p className="py-3 text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
