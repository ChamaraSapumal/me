import React, { useState } from "react";
import Lottie from "lottie-react"; // Import Lottie
import starAnimation from "../assets/star-animation.json"; // Ensure this path is correct
import { FaStar } from "react-icons/fa";

const RateMyWork = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0); // State for hovered star
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control animation display

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1); // Set hovered star rating
  };

  const handleMouseLeave = () => {
    setHoveredRating(0); // Reset hovered rating on mouse leave
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData();

    formData.append("name", name);
    formData.append("rating", rating.toString());
    formData.append("message", message);
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
        setRating(0); // Reset rating
        setName(""); // Reset name
        setMessage(""); // Reset message
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
    <section className="py-10 bg-gray-100 relative">
      {/* Lottie Animation Positioned Behind the Form */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Lottie
          animationData={starAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "300px", height: "300px", opacity: 0.1 }} // Adjust size and opacity as needed
        />
      </div>
      <h2 className="text-4xl font-bold text-center z-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Rate My Work
      </h2>
      <div className="flex justify-center mb-4 z-10">
        {/* Rating Stars */}
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`cursor-pointer transition-colors duration-300 ${
              index < (hoveredRating || rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
            style={{ zIndex: 10 }} // Ensure stars are above the Lottie animation
          />
        ))}
      </div>
      <form onSubmit={onSubmit} className="mt-6 max-w-xl mx-auto z-10 relative">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-300 bg-transparent text-gray-800 placeholder-gray-500 p-2 w-full mb-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 relative"
        >
          Submit Feedback
        </button>
      </form>
      {result && <div className="mt-3 text-center z-10">{result}</div>}{" "}
      {/* Display submission result */}
      {isSubmitted && (
        <div className="flex justify-center mt-6 z-10">
          <Lottie
            animationData={starAnimation}
            loop={false}
            autoplay={true}
            style={{ width: "200px", height: "200px" }} // Adjust size as needed
          />
        </div>
      )}
    </section>
  );
};

export default RateMyWork;
