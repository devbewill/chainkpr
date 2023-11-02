import { InlineWidget } from "react-calendly";
import ContactForm from "./ContactForm";

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
          <h2 className="text-sm font-semibold text-primary uppercase">
            Option 1
          </h2>
          <h1 className="my-5 text-xl text-black max-w-lg ">
            Enjoy a fully functional{" "}
            <span className="text-primary">30 days sandbox </span>so you can
            test in self provisioning the features of Datome.
          </h1>

          <ContactForm></ContactForm>
        </div>

        {/* right */}

        <div id="book-a-demo" className=" lg:w-1/2 ">
          <div className="px-6">
            <h2 className="text-sm font-semibold text-primary uppercase">
              Option 2
            </h2>

            <h1 className="my-5 text-xl text-black max-w-lg ">
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
