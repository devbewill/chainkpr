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
        "Users lives in a groups and can be legacy applications, human beings, IoT devices or even external organizations. For example, you can specify that only a certified manufacturer can create a drug pill, and only a licensed pharmacist can update its status to sold.",
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
      <div className="mx-auto max-w-screen-xl px-6 py-20">
        <div className="flex">
          <div className="lg:pr-8 lg:pt-4">
            <div className="">
              <h2 className="text-base font-semibold leading-7 text-primary uppercase">
                How magic happens
              </h2>
              <p className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </p>
              <p className="my-5 text-lg text-gray-600 ">
                With Datome your data management becomes effortless, allowing
                you to stay within your domain comfort zone.
              </p>
            </div>
          </div>
        </div>

        {howworks.map((item, index) => (
          <div
            key={item.name}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 py-10"
          >
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {item.name}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
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
              <img
                alt={item.name}
                src={`./howworks/${item.image}`}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
