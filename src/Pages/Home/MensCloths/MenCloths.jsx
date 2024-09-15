import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function MensCloths() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef,instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const menCloths = [
    {
      id: 1,
      title: "Long Sleeve Solid Shirt - 03",
      img: "https://m.media-amazon.com/images/I/61r4jHlRC1L._AC_SX466_.jpg",
    },
    {
      id: 2,
      title: "Long Sleeve Solid Shirt - 04",
      img: "https://i5.walmartimages.com/seo/Gubotare-Men-S-T-Shirts-Men-s-Sport-Western-Two-Pocket-Long-Sleeve-Snap-Shirt-Light-Blue-L-40_e7c5bf7b-6464-4f15-a6b4-56bb6e4993f4.bc64aa8cfd6b5920d0dba679be10ee70.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    {
      id: 3,
      title: "Long Sleeve Solid Shirt - 05",
      img: "https://skfashion.shop/wp-content/uploads/2024/06/image-1711181091595-157838666-768x959.jpg",
    },
    {
      id: 4,
      title: "Long Sleeve Solid Shirt - 06 ",
      img: "https://www.selfshop.com.bd/public/images/product/slider/1723613293_IMG-20240813-WA0077.jpg",
    },
    {
      id: 5,
      title: "Long Sleeve Solid Shirt - 07",
      img: "https://www.selfshop.com.bd/public/images/product/slider/1723556159_WhatsApp%20Image%202024-08-13%20at%2006.00.14.jpeg",
    },
    {
      id: 6,
      title: "Long Sleeve Solid Shirt - 08",
      img: "https://www.selfshop.com.bd/public/images/product/slider/1723614094_WhatsApp%20Image%202024-08-13%20at%2006.16.46.jpeg",
    },
  ];

  return (
  

    <section className="mb-20 pb-20">
         <h1 className="text-4xl  font-semibold text-center ">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] md:5xl font-extrabold ">Men's Cloths Collection</span>        
        </h1>
           <p className="text-center text-gray-600 pt-2 pb-10">Step up your style with exclusive deals on our latest shoes</p>

      <div className="relative">
  <div className="keen-slider" ref={sliderRef}>
    {menCloths.map((card, index) => (
      <div
        key={card.id}
        className={`keen-slider__slide border-4 bg-transparent ${
          index === (currentSlide + 1) % menCloths.length
        }`}
      >
        <div className="overflow-hidden relative">
          <div className="flex items-center justify-center">
            <div className="avatar">
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[350px] object-cover"
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

export default MensCloths;
