export default function HowWorks() {
  const howworks = [
    {
      name: "Models",
      description:
        "Datome works by allowing you to define the general abstraction of the asset you want to track, which we call a Model. A Model is a JSON scheme that describes the properties, statuses and relations of an asset.",
      image: "how1.png",
    },
    {
      name: "Relations",
      description:
        "For example, you can define a Model for a drug pill, a drug blister and a drug packaging, and how they are related to each other.",
      image: "how2.png",
    },
    {
      name: "Mutations",
      description:
        "Each Model also defines the rules and conditions for creating and updating an asset, as well as the privileges required for different users.",
      image: "how3.png",
    },
    {
      name: "Groups",
      description:
        "Users are clustered in groups and can be legacy applications, human beings, IoT devices or even external organizations. For example, you can specify that only a certified manufacturer can create a drug pill, and only a licensed pharmacist can update its status to sold.",
      image: "how4.jpg",
    },
    {
      name: "Assets",
      description:
        "Once you have defined your Models, you can start creating assets and having them go through the designed flow.",
      image: "how5.png",
    },
    {
      name: "History",
      description:
        "For each asset, you get a customizable public web page that certifies the history of the changes and the rules that were followed. This way, you can ensure the transparency and accountability of your assets.",
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
              <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </p>
              <p className="mt-2 pb-10 text-gray-600 ">
                With Datome your data management becomes effortless, allowing
                you to stay within your domain comfort zone.
              </p>
            </div>
          </div>
        </div>

        {howworks.map((item, index) => (
          <div key={item.name} className="grid grid-cols-1 lg:grid-cols-2 py-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 lg:text-xl">
                  {item.name}
                </p>
                <p className="mt-3 md:text-lg md:leading-7 text-gray-600">
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
