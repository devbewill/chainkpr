export default function WhyBlockchain() {
  const blockchain = [
    {
      name: "A single source of truth",
      description:
        "Datome offers a unique ledger that serves as the definitive source of truth for all stakeholders involved.",
    },
    {
      name: "Centralized business logic",
      description:
        "say goodbye to the complexity of scattered business process logic. With Datome, you can consolidate all aspects of your business logic in one central location. This not only streamlines your operations but also eradicates discrepancies that often arise from fragmented systems.",
    },
    {
      name: "Certainty at every step",
      description:
        "Datome ensures that each step in your processes is marked by certainty. You have precise information about the date, document versions, user identities, and validation rules associated with every action.",
    },
    {
      name: "Real-time certifications for auditors",
      description:
        "Datome's real-time access to certification records empowers auditors to swiftly and thoroughly assess your compliance and operations.",
    },
  ];

  return (
    <section className="whyBlockchain bg-slate-100">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        <h2 className="text-sm font-semibold text-primary uppercase">
          Last but not least
        </h2>

        <p className="mt-2 text-2xl md:text-4xl md:mb-8">
          <span className="font-black">Why blockchain?</span>
          <br></br>
          You might wonder why, with existing process orchestration systems in
          place, you should consider Datome and blockchain technology. The
          answer lies in the uniqueness of out blockchain.
        </p>

        <div className="mt-8 pt-8 border-t border-gray-600  grid grid-cols-1 gap-2 md:mt-8  md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-600 ">
          {blockchain.map((item) => (
            <div key={item.name} className="flex items-start p-8">
              <div>
                <h3 className=" text-xl">{item.name}</h3>

                <p className="mt-2 text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
