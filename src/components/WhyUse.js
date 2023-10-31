import {
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
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
      icon: ShieldCheckIcon,
    },
    {
      name: "Audits",
      description:
        "Map and secure the most  risk-prone aspects of your processes, providing invaluable insights into areas often subject to audits. Simplify the process of responding to third-party claims as you can provide a verifiable and tamper-proof record of your activities.",
      icon: CheckBadgeIcon,
    },
    {
      name: "Story telling",
      description:
        "Blockchain technology allows you to tell a compelling and verifiable story of your product's journey. Whether you're showcasing a product's development, features, or quality, Datome helps you narrate your product's story with confidence.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: "Data-driven decision making",
      description:
        "Datome ensures that you can trust your data and processes, enabling confident, data-driven choices.",
      icon: PresentationChartBarIcon,
    },
  ];

  return (
    <section className="Whyuse">
      <div className="mx-auto max-w-7xl pb-16 px-6 ">
        <div className="lg:py-32">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-semibold leading-7 text-primary uppercase">
                So why
              </h2>
              <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
                Why should you use Datome?
              </h2>
              <p className="mt-6 lg:text-lg  text-gray-600">
                Datome is a versatile platform designed to deliver benefits to
                businesses across various industries, regardless of their size
                or scale. While Datome's flexibility ensures that it can be
                applied to any business, here are a few examples of areas where
                Datome can make a substantial impact.
              </p>
            </div>
            <div className="grid gap-8 col-span-2">
              {whyList.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col lg:flex-row relative lg:pl-16"
                >
                  <div className="flex lg:pr-6 py-3 ">
                    <item.icon
                      className="h-10 w-10 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="">
                    <h3 className=" text-gray-900 text-lg">{item.name}</h3>
                    <div className="mt-2 text-base text-gray-600">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
