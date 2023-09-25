export default function Benefits() {
  const benefits = [
    {
      name: "Secure Data Management",
      description:
        "Utilize blockchain technology and digital certificates for secure, tamper-proof data storage and operations.",
    },
    {
      name: "Operational Efficiency",
      description:
        "Cut down on time and resources spent on data management, boosting operational efficiency by as much as 16%.",
    },
    {
      name: "Intelligent Workflows",
      description:
        "Customize your workflows and dataset settings as your company evolves, allowing for greater adaptability.",
    },
    {
      name: "User Access Control",
      description:
        "Precise control over who can access and modify data, thanks to specialized user groups and permissions.",
    },
    {
      name: "Asset and Model Relationships",
      description:
        "Create one-to-one or one-to-many relationships between different assets and models, allowing for flexible data organization.",
    },
    {
      name: "No-Code and Advanced Editing",
      description:
        "Design your data models in a no-code environment or take control with advanced JSON editing capabilities.",
    },
    {
      name: "Easy Integration",
      description:
        "Seamlessly integrate Datome with existing systems like ERP, CRM, and more.",
    },
  ];

  return (
    <section className="benefits">
      <div className="mx-auto max-w-7xl py-20 px-6 ">
        <h2 className="text-base font-semibold leading-7 text-primary uppercase">
          Benefits
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The main benefits of using Datome
        </p>
        <div className="mt-20">
          {benefits.map((item) => (
            <div
              key={item.name}
              className="lg:flex py-5 border-b-2 last:border-0"
            >
              <h1 className=" pb-5 text-2xl font-bold lg:w-1/3 lg:pr-24">
                {item.name}
              </h1>
              <div className="lg:w-2/3 text-lg leading-8">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
