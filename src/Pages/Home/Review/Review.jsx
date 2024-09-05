import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const Review = () => {
  const cardDetails = [
    {
      id: 1,
      reviewerName: "John Doe",
      message:
        "This course changed my life! The content is top-notch and the instructors are incredibly knowledgeable.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      reviewerName: "Jane Smith",
      message:
        "I highly recommend these courses to anyone looking to advance their career. The practical were especially helpful.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      reviewerName: "Samuel Jackson",
      message:
        "A fantastic learning experience. The interactive elements and community support made a big difference.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 4,
      reviewerName: "Emily Clark",
      message:
        "These courses are well-organized and easy to follow. I learned so much in a short amount of time.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 5,
      reviewerName: "Michael Brown",
      message:
        "The instructors are true experts in their fields. I felt confident applying what I learned immediately.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 6,
      reviewerName: "Jessica Lee",
      message:
        "I appreciate the real-world examples and hands-on projects. They helped me grasp complex concepts with ease.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 7,
      reviewerName: "Daniel Martin",
      message:
        "An excellent resource for professionals looking to upgrade their skills. Highly engaging and informative.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section id="testimonial" className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-4xl sm:text-5xl">
            What Our Customers Are Saying
          </span>
        </h1>
        <p className="w-full sm:w-3/4 lg:w-2/4 mx-auto  pt-4  text-gray-500 text-sm ">
          Here's what some of our valued clients have to say about their experiences with us. We pride ourselves on delivering exceptional service and quality, and it's our pleasure to share their feedback with you.
        </p>
      </div>

      {/* Cards Slider */}
      <div className="relative w-full container mx-auto px-2  mt-5">
        <div className="keen-slider" ref={sliderRef}>
          {cardDetails.map((card, index) => (
            <div
              key={card.id}
              className={`keen-slider__slide bg-transparent p-4 sm:p-10 rounded ${
                index === (currentSlide + 1) % cardDetails.length
                  ? "bg-stone-100 border-b-4 sm:border-b-8 border-[#522F8F]"
                  : ""
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex items-center justify-center">
                  <div className="avatar">
                    <div>
                      <img
                        src={card.image}
                        alt=""
                        className="w-12 sm:w-16 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-2 justify-center items-center text-yellow-700 pt-3 sm:pt-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <div className="text-center">
                  <div className="px-2 sm:px-3 py-3 sm:py-5">
                    <a className="text-sm sm:text-xl text-black font-semibold">
                      {card.reviewerName}
                    </a>
                    <p className="text-xs sm:text-sm">{card.message}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="absolute -bottom-10 sm:-bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-2 sm:p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-2 sm:p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
