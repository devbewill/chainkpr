import { InlineWidget } from "react-calendly";

export default function Contacts() {
  return (
    <section className="contacts bg-secondary">
      <div className="lg:flex mx-auto max-w-screen-xl py-20 md:px-6 gap-10 ">
        {/* left */}

        <div className=" lg:w-1/2  px-6 pb-10 border-r-2 border-gray-300">
          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Are you ready to try now?
          </h1>

          <p className="my-5 text-lg max-w-lg text-gray-600 ">
            Enjoy a fully functional 30 days sandbox so you can test in self
            provisioning the features of Datome.
          </p>

          <form action="" class="mt-10">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div class="flex flex-col gap-8 max-w-md">
              <div class="relative z-0 ">
                <input
                  type="text"
                  name="name"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your name
                </label>
              </div>
              <div class="relative z-0">
                <input
                  type="text"
                  name="email"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Your email
                </label>
              </div>
              <div class="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                  Say something about you
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="mt-10 rounded-md bg-black px-5 py-2 text-white font-bold"
            >
              Start a trial
            </button>
          </form>
        </div>

        {/* right */}

        <div className=" lg:w-1/2 ">
          <div className="mx-auto p-6 pb-0 bg-white lg:rounded-xl lg:shadow-xl ">
            <h1 className="text-xl font-bold text-black">
              Or maybe you prefer{" "}
              <span className="text-primary">book a meeting</span> with us?
            </h1>

            <p className="my-5 text-lg max-w-lg text-gray-600 ">
              In a 30-minute call, Datome’s team will help you to: ‍ <br></br>
              <br></br>
              💰 Understand the Cost Savings <br></br>✅ Learn How Setup Datome{" "}
              <br></br>
              🔗 Implement Blockchain with Datome
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
