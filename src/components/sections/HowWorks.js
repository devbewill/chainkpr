export default function HowWorks() {
  const howworks = [
    {
      intro: "01. Call",
      title: "Standardized Communication",
      description:
        "Our APIs abstract the complexities of various blockchain technologies, offering a uniform set of commands that can be easily understood and implemented..",
      image: "communication.png",
    },
    {
      intro: "02. Rest API",
      title: "Interoperability",
      description:
        "Whether you're working with Ethereum, Binance, Polygon, or other blockchains, our Generic REST APIs ensure interoperability, allowing you to seamlessly integrate your systems with the blockchain that best suits your project.",
      image: "api.png",
    },
    {
      intro: "03. Orchestrate",
      title: "Simplified Commands",
      description:
        "With straightforward commands, such as reading block information, submitting transactions, or interacting with smart contracts, our APIs eliminate the need for extensive blockchain expertise. This simplicity translates to a faster and more efficient integration process.",
      image: "commands.png",
    },
  ];
  return (
    <section className="howWorks">
      <div className="mx-auto max-w-screen-xl px-6 py-10 lg:py-20">
        <div className="flex">
          <div className="lg:pr-8 lg:pt-4">
            <div className="">
              <h2 className="text-sm font-semibold leading-7 text-primary uppercase">
                How the magic happens
              </h2>
              <h2 className="my-2 text-2xl tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </h2>
              <p className="mt-2 pb-10 text-gray-600 ">
                Curious about how ChainKpr can transform your business
                operations? Let's dive in and explore the process that turns
                your vision into reality.
              </p>
            </div>
          </div>
        </div>

        {howworks.map((item, index) => (
          <div
            key={item.intro}
            className="grid grid-cols-1 lg:grid-cols-2 py-2"
          >
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-sm font-semibold  text-primary uppercase">
                  {item.intro}
                </p>
                <h3 className="mt-2 font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
            <div
              className={
                index % 2 == 0
                  ? "relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first "
                  : "relative h-64 overflow-hidden rounded-lg sm:h-80 "
              }
            >
              {/* <svg
                viewBox="0 0 200 200"
                className="fill-slate-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.3,-69.8C51.5,-60,53.3,-42.6,61.3,-27.4C69.3,-12.1,83.3,0.9,79.9,10.1C76.5,19.3,55.5,24.6,42.8,34.2C30,43.9,25.6,57.8,17.4,61.1C9.2,64.4,-2.7,57,-17.2,54.6C-31.7,52.1,-48.8,54.6,-57.1,47.9C-65.3,41.1,-64.7,25.2,-66.4,9.9C-68,-5.4,-72,-20,-64.8,-27C-57.6,-34.1,-39.4,-33.5,-26.7,-41.8C-14.1,-50.1,-7,-67.3,4.8,-74.7C16.6,-82.1,33.1,-79.7,42.3,-69.8Z"
                  transform="translate(100 100)"
                />
              </svg> */}
              <img
                alt={item.name}
                src={`./howworks/${item.image}`}
                className="absolute h-full w-full lg:w-9/12 object-contain "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
