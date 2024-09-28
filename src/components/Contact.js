import React, { useState } from "react";
import Lottie from "lottie-react"; // Import Lottie
import sayHiAnimation from "../assets/say-hi-animation.json"; // Ensure this path is correct

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control animation display

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
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
        setIsSubmitted(true); // Show animation on successful submission
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
    <section id="contact" className="py-10 bg-white relative">
      {/* Lottie Animation Positioned Behind the Form */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Lottie
          animationData={sayHiAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "300px", height: "300px", opacity: 0.1 }} // Adjust size and opacity as needed
        />
      </div>
      <h2 className="text-3xl font-bold text-center z-10">Get in Touch</h2>
      <p className="mt-4 max-w-xl mx-auto text-center z-10">
        I am always looking for new opportunities. Have an exciting project you
        need help with or just want to say hi? I'll try my best to get back to
        you!
      </p>
      <form onSubmit={onSubmit} className="mt-6 max-w-xl mx-auto z-10 relative">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500" // Adjusted styles for transparency
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500" // Adjusted styles for transparency
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500" // Adjusted styles for transparency
        ></textarea>

        {/* Button without hover effect */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 relative ml-5"
        >
          Say Hi!
        </button>
      </form>
      {result && <div className="mt-3 text-center z-10">{result}</div>}{" "}
      {/* Display submission result */}
      {/* Display Lottie animation upon successful submission */}
      {isSubmitted && (
        <div className="flex justify-center mt-6 z-10">
          <Lottie
            animationData={sayHiAnimation}
            loop={false}
            autoplay={true}
            style={{ width: "200px", height: "200px" }} // Adjust size as needed
          />
        </div>
      )}
    </section>
  );
};

export default Contact;
