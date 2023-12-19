import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <section className="contacts pt-16 ">
      <h1 className="text-2xl text-center font-black lg:text-5xl">
        Are you ready to try now ?
      </h1>
      <div className="lg:flex flex-col mx-auto max-w-screen-xl pt-20 lg:py-20 md:px-6 gap-10 items-center ">
        <h1 className="my-5 text-xl text-black max-w-xl ">
          Enjoy a fully functional{" "}
          <span className="text-primary">30 days sandbox </span>so you can test
          in self provisioning the features of Datome.
        </h1>

        <ContactForm></ContactForm>
      </div>
    </section>
  );
}
