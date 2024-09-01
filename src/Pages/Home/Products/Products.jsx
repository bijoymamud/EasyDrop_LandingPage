import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function Products() {

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

  const products = [
    {
      id: 1,
      title: "Women Clothings",
      img: "https://businessnewsthisweek.com/wp-content/uploads/2021/03/Advantages-of-buying-wholesale-clothing-for-women.jpg",
    },
    {
      id: 2,
      title: "Gadgets & IT Accessories",
      img: "https://www.peroz.com.au/cdn/shop/collections/Tech-Gadgets-and-Accessories-PEROZ-Australia.jpg?v=1668927883",
    },
    {
      id: 3,
      title: "Health & Beauty",
      img: "https://www.nassaucandy.com/blog/wp-content/uploads/2020/10/Pampering_Shot2_3V9A8190-933x1024.jpg",
    },
    {
      id: 4,
      title: "Home & Lifestyle",
      img: "https://www.hindustantimes.com/ht-img/img/2023/03/24/550x309/spacejoy-85pCvDWDMmI-unsplash_1679639141112_1679639147417_1679639147417.jpg",
    },
    {
      id: 5,
      title: "Jewelries & Accessories",
      img: "https://shopdorabi.com/cdn/shop/articles/c01.png?v=1701768665",
    },
    {
      id: 6,
      title: "Kitchen Appaliances",
      img: "https://www.cnet.com/a/img/resize/b4cb9355b39b43a2b8d77d80dd416c83466a5515/hub/2019/02/26/9eb3531d-f6fe-475f-8a2a-abfce6bfce9e/ka-queenofhearts-collection-lifestyle-1.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
  ];

  return (
  

    <section>
         <h1 className="text-4xl font-semibold text-center ">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">New Products</span>        
        </h1>
           <p className="text-center text-gray-600 text-lg pt-2 pb-10">Grab this opportunity with a special discount available only this month</p>

           

      <div className="relative">
  <div className="keen-slider" ref={sliderRef}>
    {products.map((card, index) => (
      <div
        key={card.id}
        className={`keen-slider__slide border-4 bg-transparent ${
          index === (currentSlide + 1) % products.length
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
          <div className="w-full bg-[#e8eaef] text-black  text-center py-3 ">
                           <h2 className="text-xl font-extrabold">{card.title}</h2>
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

export default Products;
