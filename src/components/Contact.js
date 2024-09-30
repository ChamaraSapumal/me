import React, { useState } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control submission status

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6fd71e52-5c8f-4f7d-ade1-84c2cbbda75a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true); // Show success message
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-center text-gray-300">
          I am always looking for new opportunities. Have an exciting project
          you need help with or just want to say hi? I'll try my best to get
          back to you!
        </p>
        <form onSubmit={onSubmit} className="mt-6 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>

          <Button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Say Hi!
          </Button>
        </form>
        {result && <div className="mt-3 text-center text-white">{result}</div>}{" "}
        {/* Display submission result */}
        {/* Additional Information */}
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 mt-10">
          {/* Weekly Articles */}
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <CalendarDaysIcon
                aria-hidden="true"
                className="h-6 w-6 text-white"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </dd>
          </div>

          {/* No Spam */}
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <HandRaisedIcon
                aria-hidden="true"
                className="h-6 w-6 text-white"
              />
            </div>
            <dt className="mt-4 font-semibold text-white">No spam</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Contact;
