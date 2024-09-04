import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function ShopCategory() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef,instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 200px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const Category = [
    {
      id: 1,
      title: "Women Clothings",
      img: "https://cdn-icons-png.flaticon.com/512/1461/1461362.png",
    },
    {
      id: 2,
      title: "Gadgets",
      img: "https://cdn-icons-png.flaticon.com/512/3731/3731134.png",
    },
    {
      id: 3,
      title: "Health & Beauty",
      img: "https://cdn-icons-png.flaticon.com/512/1005/1005769.png",
    },
    {
      id: 4,
      title: "Home & Lifestyle",
      img: "https://cdn-icons-png.flaticon.com/512/8863/8863863.png",
    },
    {
      id: 5,
      title: "Jewelries",
      img: "https://cdn-icons-png.flaticon.com/512/8497/8497175.png",
    },
    {
      id: 6,
      title: "Kitchen Appaliances",
      img: "https://cdn-icons-png.flaticon.com/512/7540/7540904.png",
    },
  ];

  return (
  

    <section className="mb-20 pb-20 ">
         <h1 className=" font-semibold text-center ">
                 <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold md:text-5xl">Shop Our Categories</span>        
        </h1>
           <p className=" text-gray-600  pb-10 md:w-2/4 w-full px-1 md:px-0 text-center pt-5 mx-auto">Uncover a wide variety of products tailored to meet your needs. Whether you looking for the latest trends, everyday essentials or something special, explore our carefully curated categories to find exactly what you looking for.

</p>

           

      <div className="relative">
  <div className="keen-slider" ref={sliderRef}>
    {Category.map((card, index) => (
      <div
        key={card.id}
        className={`keen-slider__slide border-4 pt-5 bg-transparent ${
          index === (currentSlide + 1) % Category.length
        }`}
      >
        <div className="overflow-hidden relative">
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className=" h-[150px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Title under the image */}
          <div className="w-full bg-[#e8eaef] text-black text-center py-3 ">
                           <h2 className="font-semibold">{card.title}</h2>
                   </div>
        </div>
      </div>
    ))}
  </div>
  {/* Buttons */}
  <div className="absolute -bottom-20 right-0 flex gap-4">
  <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
          >
            <FaChevronRight />
          </button>
  </div>
</div>


    </section>
  );
}

export default ShopCategory;
