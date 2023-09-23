export default function HowWorks() {
  return (
    <section className="howWorks">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                How magic happens
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Models
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Datome works by allowing you to define the general abstraction
                of the asset you want to track, which we call a Model. A Model
                is a JSON scheme that describes the properties, statuses and
                relations of an asset.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first ">
            <img
              alt="models"
              src="./howworks/how1.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Relations{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For example, you can define a Model for a drug pill, a drug
                blister and a drug packaging, and how they are related to each
                other.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80">
            <img
              alt="relations"
              src="./howworks/how2.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mutations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Each Model also defines the rules and conditions for creating
                and updating an asset, as well as the privileges required for
                different users.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first">
            <img
              alt="mutations"
              src="./howworks/how3.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Groups
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Users lives in a groups and can be legacy applications, human
                beings, IoT devices or even external organizations. For example,
                you can specify that only a certified manufacturer can create a
                drug pill, and only a licensed pharmacist can update its status
                to sold.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80">
            <img
              alt="groups"
              src="./howworks/how4.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Assets
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Once you have defined your Models, you can start creating assets
                and having them go through the designed flow.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first">
            <img
              alt="assets"
              src="./howworks/how5.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="my-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Timeline
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For each asset, you get a customizable public web page that
                certifies the history of the changes and the rules that were
                followed. This way, you can ensure the transparency and
                accountability of your assets.
              </p>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 ">
            <img
              alt="timeline"
              src="./howworks/how6.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
