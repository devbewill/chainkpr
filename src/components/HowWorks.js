export default function HowWorks() {
  const howworks = [
    {
      intro: "Start with a simple question",
      title: "What is the core of your process?",
      description:
        "In the first step, you identify the core element of your process. This could be a physical asset, such as a bag, or a digital asset, like a contract. The blue-print of this asset will be represented by what we call in Datome a Model, i.e. a JSON schema that describes all the characteristics and rules of the asset.",
      image: "how1.png",
    },
    {
      intro: "Match the traits of your data-flow",
      title: "What describes your asset?",
      description:
        "Delve into the specific details that describe your asset. To do this, enrich your model with what we call properties. Properties are nothing more than the characteristics and data that describe the asset (e.g. the quantity or the type of material).",
      image: "how2.png",
    },
    {
      intro: "Trace the path",
      title: "What are the steps of your process?",
      description:
        "Outline the sequence of actions that make up your process. Each actions will be represented by a state. The total chain of your states correspond to the rules of your workflow and will represent at the end the history fo your supply chain.",
      image: "how3.png",
    },
    {
      intro: "Predict the unpredictable",
      title: "Are there steps in your process that are not fixed?",
      description:
        "Is your workflow made up of also unpredictable events or is the data describing your asset ever-changing? Set up the possibility to make updates and add events to always have at hand the tool to unfailingly describe any particularity of your process.",
      image: "how4.jpg",
    },
    {
      intro: "Instill logic",
      title: "Are there other entities connected to your asset?",
      description:
        "Explore the relationships and connections between your asset and other entities within your ecosystem. Is your bag made up of different kinds of leather? This is what we call a relation.",
      image: "how4.jpg",
    },
    {
      intro: "Assign the responsabilities",
      title: "Who can do what?",
      description:
        "Determine who has access to your ecosystem and what actions they can perform. By setting the authorized groups, you create a secure and efficient environment for stakeholders to collaborate effectively.",
      image: "how6.png",
    },
    {
      intro: "Ready, set, go!",
      title: "Start creating your assets",
      description:
        "Once you have everything set, you can start creating assets and having them go through the designed flow. For each asset, you get a customizable public web page that certifies the history of the changes and the rules that were followed.",
      image: "how6.png",
    },
  ];
  return (
    <section className="howWorks">
      <div className="mx-auto max-w-screen-xl px-6 py-10 lg:py-20">
        <div className="flex">
          <div className="lg:pr-8 lg:pt-4">
            <div className="">
              <h2 className="text-sm font-semibold leading-7 text-primary uppercase">
                How magic happens
              </h2>
              <h2 className="my-2 text-2xl tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </h2>
              <p className="mt-2 pb-10 text-gray-600 ">
                Curious about how Datome can transform your business operations?
                Let's dive in and explore the process that turns your vision
                into reality.
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
              <svg
                viewBox="0 0 200 200"
                className="fill-slate-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.3,-69.8C51.5,-60,53.3,-42.6,61.3,-27.4C69.3,-12.1,83.3,0.9,79.9,10.1C76.5,19.3,55.5,24.6,42.8,34.2C30,43.9,25.6,57.8,17.4,61.1C9.2,64.4,-2.7,57,-17.2,54.6C-31.7,52.1,-48.8,54.6,-57.1,47.9C-65.3,41.1,-64.7,25.2,-66.4,9.9C-68,-5.4,-72,-20,-64.8,-27C-57.6,-34.1,-39.4,-33.5,-26.7,-41.8C-14.1,-50.1,-7,-67.3,4.8,-74.7C16.6,-82.1,33.1,-79.7,42.3,-69.8Z"
                  transform="translate(100 100)"
                />
              </svg>
              <img
                alt={item.name}
                src={`./howworks/${item.image}`}
                className="absolute inset-0 h-full w-9/12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
