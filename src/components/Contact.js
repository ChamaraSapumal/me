import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key from Web3Forms
    formData.append("access_key", "6fd71e52-5c8f-4f7d-ade1-84c2cbbda75a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
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
    <section id="contact" className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <p className="mt-4 max-w-xl mx-auto text-center">
        I am always looking for new opportunities. Have an exciting project you
        need help with or just want to say hi? I'll try my best to get back to
        you!
      </p>
      <form onSubmit={onSubmit} className="mt-6 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-2 w-full mb-4 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 w-full mb-4 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Say Hi!
        </button>
      </form>
      {result && <div className="mt-3 text-center">{result}</div>}{" "}
      {/* Display submission result */}
    </section>
  );
};

export default Contact;
