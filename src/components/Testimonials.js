import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This was the best experience I've ever had. The team is outstanding!",
    designation: "CEO, Example Inc.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    feedback: "Incredible service and support. Highly recommend to anyone!",
    designation: "CTO, Tech World",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mike Johnson",
    feedback:
      "A game-changer for our business. Can't imagine working without it.",
    designation: "Product Manager, Innovate",
    image: "https://via.placeholder.com/150",
  },
];

function Testimonial() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen py-11 animate-gradient-move">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-xl text-gray-300 sm:mt-4">
          We value our clients and their feedback.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <FaQuoteLeft className="text-5xl text-yellow-400 absolute top-[-30px] left-[-30px]" />
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                      <p className="text-lg font-semibold text-gray-800 italic">
                        {testimonial.feedback}
                      </p>
                    </div>
                    <FaQuoteRight className="text-5xl text-yellow-400 absolute bottom-[-30px] right-[-30px]" />
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      className="w-24 h-24 rounded-full border-4 border-yellow-400"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-yellow-400">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
