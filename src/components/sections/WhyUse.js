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
      name: "Uniform Interface",
      description:
        "The beauty of our Generic REST APIs lies in their uniformity. You don't need to learn the specifics of each blockchain; instead, you can rely on a consistent interface that streamlines the integration process.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Reduced Development Time",
      description:
        "By providing a standardized set of commands, our APIs significantly reduce the development time required for integrating with different blockchains. This efficiency allows you to focus on the unique aspects of your project rather than on the blockchain intricacies.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Flexibility",
      description:
        "As your project evolves, the ease of our Generic REST APIs allows for seamless adjustments. Whether you're shifting to a different blockchain or expanding functionality, the flexibility of our APIs ensures a smooth transition.",
      icon: CheckBadgeIcon,
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
                Why it’s easier?
              </h2>
              <p className="mt-6 lg:text-lg  text-gray-600">
                Versatility first.
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
