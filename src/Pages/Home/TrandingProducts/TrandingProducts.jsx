import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function TrandingProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
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

  const trandingProducts = [
    {
      id: 1,
      title: "Men Clothings",
      img: "https://n.nordstrommedia.com/id/b5b8255b-f7db-4d93-be13-1dbbd81675ba.jpeg?h=600&w=750",
    },
    {
      id: 2,
      title: "Folding Sunglass",
      img: "https://www.werd.com/wp-content/uploads/2022/05/persol-PO3274S.jpg",
    },
    {
      id: 3,
      title: "Desk Fan",
      img: "https://cdn.manomano.com/images/images_products/26909055/P/93554487_1.jpg",
    },
    {
      id: 4,
      title: "Kitchen tools",
      img: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1345589509.jpg?w=2560&h=1440&crop=1",
    },
    {
      id: 5,
      title: "Gadgets & IT Accessories",
      img: "https://media.licdn.com/dms/image/D5612AQFMBhvSLL5z7g/article-cover_image-shrink_720_1280/0/1708313858034?e=2147483647&v=beta&t=dVwnjNxcv5QUisaPavrrExfakdaSL9qpIn_zhqNgF7w",
    },
    {
      id: 6,
      title: "Kitchen Appliances",
      img: "https://www.cnet.com/a/img/resize/b4cb9355b39b43a2b8d77d80dd416c83466a5515/hub/2019/02/26/9eb3531d-f6fe-475f-8a2a-abfce6bfce9e/ka-queenofhearts-collection-lifestyle-1.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
  ];

  return (
    <section className="my-20 py-20">
      <h1 className="text-4xl font-semibold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">
          Trending Products
        </span>
      </h1>
      <p className="text-center text-gray-600  pt-2 pb-10">
        Don’t miss out—get special discounts on our hottest items now!
      </p>

      <div className="relative">
        <div className="keen-slider" ref={sliderRef}>
          {trandingProducts.map((card, index) => (
            <div
              key={card.id}
              className={`keen-slider__slide border-4 bg-transparent ${
                index === (currentSlide + 1) % trandingProducts.length
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
                      {/* Title over the image at the bottom */}
                      
                      <div className="w-full bg-[#e8eaef] text-black  text-center py-3 ">
                           <h2 className="font-semibold">{card.title}</h2>
                   </div>

                    </div>
                  </div>
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

export default TrandingProducts;
