import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

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
export default function Context() {
  return (
    <section className="context">
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Industries
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Datome in the Real World
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  From healthcare to logistics, Datome has enabled businesses to
                  transition from outdated, compliance-risky operations to
                  transparent, fully-compliant data management systems.
                </p>
              </div>
            </div>
            <Flicking align="prev" circular={true}>
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="panel mx-3 w-80 rounded-xl bg-primary  p-6 shadow-sm "
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-15 w-15">
                      <industry.icon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-white mt-6 text-xl">{industry.name}</p>
                  </dt>
                  <dd className="mt-2 text-base leading-6 text-gray-300">
                    {industry.description}
                  </dd>
                </div>
              ))}
            </Flicking>
          </div>
        </div>
      </div>
    </section>
  );
}
