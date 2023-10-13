import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
export default function WhyUse() {
  const whyList = [
    {
      name: "Supply chain management",
      description:
        "Track every step of your goods' journey with a tamper-proof blockchain ledger.  Create a standardized system for stakeholders, fostering trust and coordination throughout your supply chain.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Intellectual property certification",
      description:
        "Protect your intellectual property with Datome's robust certification system. Prevent unauthorized usage and establish the rightful owner of your intellectual assets.",
      icon: LockClosedIcon,
    },
    {
      name: "Audits",
      description:
        "Map and secure the most  risk-prone aspects of your processes, providing invaluable insights into areas often subject to audits. Simplify the process of responding to third-party claims, as you can provide a verifiable and tamper-proof record of your activities.",
      icon: ArrowPathIcon,
    },
    {
      name: "Story telling",
      description:
        "Blockchain technology allows you to tell a compelling and verifiable story of your product's journey. Whether you're showcasing a product's development, features, or quality, Datome helps you narrate your product's story with confidence.",
      icon: FingerPrintIcon,
    },
    {
      name: "Data-driven decision making",
      description:
        "Datome ensures that you can trust your data, enabling confident, data-driven choices.",
      icon: FingerPrintIcon,
    },
  ];

  return (
    <section className="Whyuse">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="font-semibold leading-7 text-primary uppercase">
                So why
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why should you use Datome?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Datome is a versatile platform designed to deliver benefits to
                businesses across various industries, regardless of their size
                or scale. While Datome's flexibility ensures that it can be
                applied to any business, here are a few examples of areas where
                Datome can make a substantial impact.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {whyList.map((item) => (
                  <div key={item.name} className="relative pl-16">
                    <div className="font-semibold leading-7 text-gray-900 md:text-lg">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <item.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </div>
                    <div className="mt-2 text-base leading-7 text-gray-600">
                      {item.description}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
