import { useState, useEffect } from "react";

export default function ContactFormFeedback({
  isFeedbackVisible,
  setIsFeedbackVisible,
  status,
}) {
  useEffect(() => {
    if (isFeedbackVisible) {
      setTimeout(() => {
        setIsFeedbackVisible(false);
      }, 3000);
    }
  }, [isFeedbackVisible]);

  if (status === "success") {
    return (
      <p
        className={`fixed bottom-10 left-10 transition duration-300 bg-green-100 p-5 rounded ${
          isFeedbackVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        😎 Email sent! Check your email and start now with Datome.
      </p>
    );
  } else if (status === "error") {
    return (
      <p
        className={`fixed bottom-10 left-10 transition duration-300 bg-gray-100 p-5 rounded ${
          isFeedbackVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        🫣 Ops.. error,try again later or email us at{" "}
        <a href="mailto:info@datome.io">info@datome.io</a>
      </p>
    );
  } else {
    return null;
  }
}
