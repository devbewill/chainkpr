import { useState, useEffect } from "react";

export default function ContactFormFeedback(props) {
  const { visibility, status } = props;
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  useEffect(() => {
    if (visibility) {
      setIsFeedbackVisible(true);
      setTimeout(() => {
        setIsFeedbackVisible(false);
      }, 3000);
    }
  }, [visibility]);

  if (status === "success") {
    return (
      <p
        className={`transition duration-300 bg-green-100 p-5 mt-10 rounded ${
          isFeedbackVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        😎 Email sent! Check your inbox and start now with Datome.
      </p>
    );
  } else if (status === "error") {
    return (
      <p
        className={`transition duration-300 bg-gray-100 p-5 mt-10 rounded ${
          isFeedbackVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        🫣 Ops.. error, retry later please
      </p>
    );
  } else {
    return null;
  }
}
