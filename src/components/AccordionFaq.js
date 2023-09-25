export default function AccordionFaq() {
  const faqData = [
    {
      q: "What are the advantages of Datome over a traditional database?",
      a: "In a relational database a user known as a client with specific permissions associated with their account can modify entries stored on a centralized server, by modifying the &quot;master copy&quot;; control of the database remains with a designated authority, which authenticates a user's credentials before providing access to the database. Since this authority is responsible for managing the database, if the security of the authority is compromised, the data can be changed or even deleted. Compared to a traditional information management via relational databases, Datome guarantees a series of tangible benefits: &zwj; - Immutability - Decentralization - Disintermediation - Traceability - Transparency / Verifiability - Confidentiality &zwj; For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
    {
      q: "How Datome streamlines audit procedures?",
      a: "Thanks to the timely notarization of the information and related processes involved, the preventive control and the intelligent validation of data operations and state changes, and the cryptographic authentication of the Digital Identity for all the Users, Datome allows you to selectively expose certified data-lakes with respect to the information generation and evolution paths, able to simplify and streamline audit procedures even in the context of very fragmented information ecosystems or poorly orchestrated application environments. For more information, please take a look at the available resources and documentation about Datome services by clicking here or contact us here to get in touch with our team.",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      {faqData.map((faq, index) => (
        <details
          key={index}
          className="group [&_summary::-webkit-details-marker]:hidden my-5"
        >
          <summary className="flex py-5 cursor-pointer items-center justify-between rounded-lg bg-secondary p-4 text-gray-900 font-semibold">
            <h2 className="text-xl">{faq.q}</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 text-lg leading-relaxed text-gray-700">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
