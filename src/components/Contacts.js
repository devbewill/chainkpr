import { InlineWidget } from "react-calendly";

export default function Contacts() {
  return (
    <section className="contacts pt-16 ">
      <h1 className="text-2xl text-center font-black lg:text-5xl">
        Are you ready to try now ?
      </h1>
      <div className="lg:flex mx-auto max-w-screen-xl pt-20 lg:py-20 md:px-6 gap-10 ">
        {/* left */}

        <div
          id="start-trial"
          className="lg:w-1/2  px-6 pb-10 border-r-2 border-gray-300"
        >
          <h2 class="text-sm font-semibold text-primary uppercase">Option 1</h2>
          <h1 className="my-5 text-xl text-black max-w-lg ">
            Enjoy a fully functional{" "}
            <span className="text-primary">30 days sandbox </span>so you can
            test in self provisioning the features of Datome.
          </h1>

          <form action="" class="mt-10">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div class="flex flex-col gap-8 max-w-md">
              <div class="relative z-0">
                <input
                  type="text"
                  name="name"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-300 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your name
                </label>
              </div>
              <div class="relative z-0">
                <input
                  type="text"
                  name="email"
                  class="peer block w-full appearance-none border-0 border-b text-gray-300 border-gray-500 bg-transparent py-2.5 px-0 text-md focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your email
                </label>
              </div>
              <div class="pb-10 relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-300 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Say something about you
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="btn bg-black text-white  hover:bg-primary"
            >
              Start a trial
            </button>
          </form>
        </div>

        {/* right */}

        <div id="book-a-demo" className=" lg:w-1/2 ">
          <div className="px-6">
            <h2 class="text-sm font-semibold text-primary uppercase">
              Option 2
            </h2>

            <h1 class="my-5 text-xl text-black max-w-lg ">
              Or maybe you prefer to
              <span className="text-primary"> book a meeting</span> with us?
            </h1>
          </div>
          <div className="mx-auto p-6 pb-0 bg-white lg:rounded-xl lg:shadow-xl ">
            <p className="my-5 text-lg max-w-lg text-gray-600 ">
              In a 30-minute call, Datome’s team will help you to: ‍ <br></br>
              <br></br>
              💰 Understand the cost savings <br></br>✅ Learn how to set up
              Datome <br></br>
              💡 Identify a first use case in your organization
            </p>

            <InlineWidget
              url="https://calendly.com/gianluca-petrelli/datome-intro?hide_event_type_details=1&hide_gdpr_banner=1"
              styles={{
                height: "600px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
