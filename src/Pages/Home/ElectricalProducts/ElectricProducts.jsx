import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function ElectricProduct() {

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

  const electricProducts = [
    {
      id: 1,
      title: "JBL 881A Wireless Headphone",
      img: "https://static-01.daraz.com.bd/p/c720f959bf5f2008d295df3154062d40.jpg",
    },
    {
      id: 2,
      title: "Awei T1 Pro True Wireless Earbuds",
      img: "https://sc04.alicdn.com/kf/H0a861849c1db43089024106b47b9ec5bL.jpg",
    },
    {
      id: 3,
      title: "boAt Airdopes 161 ",
      img: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1664374760/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262700_yqidek.png",
    },
    {
      id: 4,
      title: "1MORE NEO True Wireless Earbuds ",
      img: "https://global.1more.com/cdn/shop/files/Q30_19_1_650x650.webp?v=1702537984",
    },
    {
      id: 5,
      title: "Rare Trainer Shoe",
      img: "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/07/25053122/Best-Trail-Running-Shoes-Hoka-Speedgoat-6.jpg",
    },
    {
      id: 6,
      title: "Adidas Shoe",
      img: "https://www.shutterstock.com/image-photo/kent-uk-01012023-adidas-originals-600nw-2278627365.jpg",
    },
  ];

  return (
  

    <section className=" my-20">
         <h1 className="text-4xl font-semibold text-center ">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">Electronic Products</span>        
        </h1>
           <p className="text-center text-gray-600 pt-2 pb-10">Upgrade your gear with exclusive discounts on top electronics</p>

           

      <div className="relative">
  <div className="keen-slider" ref={sliderRef}>
    {electricProducts.map((card, index) => (
      <div
        key={card.id}
        className={`keen-slider__slide border-4 bg-transparent ${
          index === (currentSlide + 1) % electricProducts.length
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
    <Button
      onClick={() => instanceRef.current?.prev()}
      className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
    >
      <FaChevronLeft />
    </Button>
    <Button
      onClick={() => instanceRef.current?.next()}
      className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
    >
      <FaChevronRight />
    </Button>
  </div>
</div>


    </section>
  );
}

export default ElectricProduct;
