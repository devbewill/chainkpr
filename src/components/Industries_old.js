import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    name: "Supply Chain Tracking",
    description:
      "Monitor each stage of your product's life cycle, from manufacturing to distribution, ensuring full transparency and compliance.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Intellectual Property Management",
    description:
      "Secure, trace, and verify the use of copyrighted materials or patented inventions, ensuring legal compliance and protecting against infringement.",
    icon: LockClosedIcon,
  },
  {
    name: "Financial Audits",
    description:
      "Streamline the audit process by securely and efficiently managing all financial records, transactions, and reports in one centralized model.",
    icon: ArrowPathIcon,
  },
  {
    name: "Real Estate Asset Management",
    description:
      "Keep track of property details, tenant information, and maintenance schedules, all while ensuring document authenticity.",
    icon: FingerPrintIcon,
  },
  {
    name: "Customer Relationship Management",
    description:
      "Customize your CRM model to track customer interactions, sales pipelines, and support tickets, boosting customer satisfaction and retention.",
    icon: ArrowPathIcon,
  },
  {
    name: "Quality Assurance in Manufacturing",
    description:
      "Easily monitor production quality, manage certificates, and track changes, all in real-time to meet industry standards and regulations.",
    icon: FingerPrintIcon,
  },
];

export default function Target() {
  return (
    <section className="target">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold leading-7 text-primary">a</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Datome in the Real World
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From healthcare to logistics, Datome has enabled businesses to
            transition from outdated, compliance-risky operations to
            transparent, fully-compliant data management systems.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {industries.map((industry) => (
              <div key={industry.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <industry.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {industry.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {industry.description}
                </dd>
                <a href="#" className="text-sm font-semibold leading-6 ">
                  Detail <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
