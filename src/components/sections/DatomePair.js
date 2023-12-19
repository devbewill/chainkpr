export default function DatomePair() {
  const blockchain = [
    {
      name: "Centralized business logic",
      description:
        "Say goodbye to the complexity of scattered business process logic. With Datome, you can consolidate all aspects of your business logic in one central location. This not only streamlines your operations but also eradicates discrepancies that often arise from fragmented systems.",
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
      <div className="mx-auto max-w-5xl lg:py-16 lg:text-left">
        <h2 className="text-sm font-semibold text-primary uppercase">
          ChainKpr + Datome
        </h2>
        <p className="mt-6 text-xl lg:text-3xl lg:leading-10 font-black text-gray-100">
          Elevate Data Management with Chainkeeper and Datome
        </p>
        <p className="mt-6 text-lg lg:text-2xl text-gray-100">
          Datome is a robust data management platform designed to streamline and
          enhance data-related processes. It empowers users with efficient data
          organization, storage, and retrieval capabilities, ensuring a seamless
          and secure data experience.<br></br>
        </p>
        <p className="mt-6 text-xl lg:text-xl lg:leading-10 font-black text-white underline">
          Why integrate Datome with ChainKeeper?
        </p>
        <p className=" text-lg my-2 lg:text-xl text-gray-100">
          Datome's ability to define and implement custom rules enhances
          data-related processes, while ChainKeeper ensures that the chosen
          blockchain network aligns perfectly with the organization's goals.
        </p>
        <ul className="list-disc ml-10 text-lg lg:text-xl">
          <li>Tailored Processes</li>
          <li>Blockchain Security</li>
          <li>Strategic Blockchain Utilization</li>
        </ul>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="http://www.datome.io" className="btn bg-primary text-white">
            Discover Datome
          </a>
        </div>
      </div>
    </section>
  );
}
