import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function MenShoe() {

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

  const menShoe = [
    {
      id: 1,
      title: "High Quality Casual Shoes for Men ",
      img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-77978,resizemode-75,msid-95892008/top-trending-products/lifestyle/check-out-casual-shoes-for-men-in-india.jpg",
    },
    {
      id: 2,
      title: "Luxury Air Force Black & White shoes",
      img: "https://johnpyelots.co.uk/266033556/45_1_fullsize.jpg",
    },
    {
      id: 3,
      title: "Next Generation Rare Trainer Shoe",
      img: "https://img.adsport.cz/data/zbozi/nike/650x550/467466.jpeg",
    },
    {
      id: 4,
      title: "High Quality Casual Shoes for Men ",
      img: "https://phenomenon.dk/cdn/shop/files/ml610tag_2.png?v=1706785963",
    },
    {
      id: 5,
      title: "Next Generation Rare Trainer Shoe",
      img: "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/07/25053122/Best-Trail-Running-Shoes-Hoka-Speedgoat-6.jpg",
    },
    {
      id: 6,
      title: "Adidas Shoe",
      img: "https://www.shutterstock.com/image-photo/kent-uk-01012023-adidas-originals-600nw-2278627365.jpg",
    },
  ];

  return (
  

    <section className="mb-10 pb-10 md:pb-20">
         <h1 className="text-4xl md:text-5xl font-semibold text-center ">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold ">Men's Shoe Collection</span>        
        </h1>
           <p className="text-center text-gray-600  pt-2 pb-10">Step up your style with exclusive deals on our latest shoes</p>

           

      <div className="relative">
  <div className="keen-slider" ref={sliderRef}>
    {menShoe.map((card, index) => (
      <div
        key={card.id}
        className={`keen-slider__slide border-4 bg-transparent ${
          index === (currentSlide + 1) % menShoe.length
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
                           <h2 className=" font-semibold">{card.title}</h2>
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

export default MenShoe;
