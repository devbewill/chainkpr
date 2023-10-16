export default function WhyBlockchain() {
  const blockchain = [
    {
      name: "Centralized business logic",
      description:
        "say goodbye to the complexity of scattered business process logic. With Datome, you can consolidate all aspects of your business logic in one central location. This not only streamlines your operations but also eradicates discrepancies that often arise from fragmented systems.",
    },

    {
      name: "Real-time certifications for auditors",
      description:
        "Datome's real-time access to certification records empowers auditors to swiftly and thoroughly assess your compliance and operations.",
    },
    {
      name: "Certainty at every step",
      description:
        "Datome ensures that each step in your processes is marked by certainty. You have precise information about the date, document versions, user identities, and validation rules associated with every action.",
    },
    {
      name: "A single source of truth",
      description:
        "Datome offers a unique ledger that serves as the definitive source of truth for all stakeholders involved.",
    },
  ];

  return (
    <section className="whyBlockchain bg-black text-white">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        <h2 className="text-sm font-semibold text-primary uppercase">
          Last but not least
        </h2>

        <p className="mt-2 max-w-4xl text-xl md:mb-8">
          <span className="block font-black  pb-3 text-2xl lg:text-4xl">
            Why blockchain?
          </span>
          You might wonder why, with existing process orchestration systems in
          place, you should consider Datome and blockchain technology. The
          answer lies in the uniqueness of out blockchain.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-700  grid gap-y-10 grid-cols-1 gap-2 md:mt-8  md:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-gray-700 ">
          {blockchain.map((item) => (
            <div key={item.name} className="flex items-start md:p-4">
              <div className="">
                <h3 className="text-xl">{item.name}</h3>

                <p className="mt-2 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
