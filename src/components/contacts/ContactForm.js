import { useState, useEffect } from "react";
import ContactFormFeedback from "./ContactFormFeedback";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    info: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const datomeUrl = "https://trial.datome.io/api/signup";

    try {
      const response = await fetch(datomeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormFeedback("success");
      setIsFeedbackVisible(true);

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error) {
      setFormFeedback("error");
      setIsFeedbackVisible(true);
      console.error(error);
    } finally {
      setFormData({
        name: "",
        email: "",
        info: "",
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={onSubmit} className="mt-10">
        <div className="flex flex-col gap-8 ">
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-700 focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
              Your name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b text-gray-700 border-gray-500 bg-transparent py-2.5 px-0 text-md focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:text-primary peer-focus:dark:text-primary">
              Your email
            </label>
          </div>
          <div className="pb-10 relative z-0 col-span-2">
            <textarea
              type="text"
              name="info"
              value={formData.info}
              onChange={handleChange}
              rows="5"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-md text-gray-700 focus:border-primary focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
              Say something about you
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="btn bg-black text-white  hover:bg-primary"
        >
          {isLoading ? "sending..." : "Start a Trial"}
        </button>
      </form>

      <ContactFormFeedback
        isFeedbackVisible={isFeedbackVisible}
        setIsFeedbackVisible={setIsFeedbackVisible}
        status={formFeedback}
      />
    </div>
  );
}
