import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function GiftItems() {
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

  const giftProducts = [
    {
      id: 1,
      title: "Valentine Special Men Quartz Watch Set",
      img: "https://s3-alpha-sig.figma.com/img/590e/3fed/79d36a6c5e7b804edbf641d719c002e6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~oq8M--CBgJ7NmseJA6vUaWkjWZ9YHTm49hwr5GY7RxC6MEtuaAiDP7BKABZ~QRnT2eNIa4jGGY0O2KoLKmkVkOmqriyIA-RgP7iqSD~sGcBVaMtgQHBSjlK3gdfuTOn41acVJBkdiwrhy0FzZpje1pd~0XbEGzejrGC8Jd1zTfgSk-SUM~cg-O6FXCl91wIUj2lky5r5AzwefIG0gxDTLfH67HpTYXMiQClJEoD511lxE3~Pbwlp44e3TC-BbEqBzMAnHrrdNL1qhJHOjiyMkqyznb0y8shXS8-rBGBYzLbWYV4ZsUc~gJJ8Rz1IcbwCLYXfONKcMMrLIN4HpcWA__",
    },
    {
      id: 2,
      title: "Valentine Special Flower Bouquet Scented",
      img: "https://s3-alpha-sig.figma.com/img/2e6c/cdce/b7f7a4620966bc96a2c322912f533e61?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMxRCAk~e3mvlzBJWGD7umPIKo9RJg2DnokUUDg5PPOgimjEZyh6U~KNnGIXJHuBCgZmqvV9DD4z1pNVmYq2F~TJSc9uoAQHV1ZGfqpeYhQ6S9kYxWqVC0IqaULjsMS87KWe9mDHRbLi9TFK91PwqfzMI4qOXL-t5WVbi8mxMArDE0MhUvuGmB2fwewPLEtxmtX~vvYnJPAjtfG1XIQCu~YuhqoVyWqlB0zEoX9hXtW46CgeuEyR5Sr2jJlurSmnQvjmZDTRYZOwmBkLGT693i1q5VCMMArq0faytqpIP02DIzXpfDJV6Bh-RjZ9ZF5tmYFnzCDz84S1XVmO7yi3yQ__",
    },
    {
      id: 3,
      title: "Valentine Special Premium Gift Boxs",
      img: "https://s3-alpha-sig.figma.com/img/c1c9/c2fa/c3e0f38cc258d7b5b26d1b82762d3af4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8lsD-uu8-5kwH9NWZFcTrOu~GgyKJ3HpItlHtoViVixk4U69pfD3oQAx43aX3m1OArZskBXJXcEfx1j9HAhKp0XKS39d-VkDUv74LISBUVUS1Rji2cIwsZ8196B-OjnvJvnZxGnBQGbsJJQ000YSck2EEdTqBGEngWCft0JKGKORd4qlaI9sVznameJiqBRzR-j4rtHQsVR5Ckg6kS0Uv~4AyD9eTgX7ZajObC1DtrmFhiaYAKn~qTXiY7iJ-Ji2b~IsokGyLjfpDlWri6BzE8E4Q1h-OsbkMMa7ZF1bPVI7xm61EOjfwOW79BacaN0sgPAaqIhP7qb0lVPz5pcaw__",
    },
    {
      id: 4,
      title: "Valentine Special High Appearance Premium",
      img: "https://s3-alpha-sig.figma.com/img/b05d/ced3/652e68c21eb7c21ab7a53373df61600b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oukrfz5NAQEm1QXolyPd2YGOxl6o3fFJmUmoS046Rie~UbIX5CrTh3NTmMAGFw0vTFlg4EJphwPZweitgEQSv3y3pYXfR8~nxgzPgr0zwajGCFGuvVw7tqJHAqDBSugpUGJbRWnq5opFvWXvGvE865FRI-7uw9GRrypHSLwFz2MBkPGuk9ANjbHbj855bJaMpdyS6YD9ylMVJT3ux6k0ImEEK6PlLmS5gHT~3S-Isrkb5-46-C5TQTOm7YrYJ2KTk~ttj4tJcX0pO4LiLmyHbl7z3-tV-wXK7RJIAPu866NuGr8gtX5qjzwZRQFAGo56y3ErwVvpzBiyyidLDFhqGw__",
    },
    {
      id: 5,
      title: "Valentine Special Men Quartz Watch Set",
      img: "https://cf.shopee.ph/file/sg-11134301-7rd62-lvebfi1tv9k0c1",
    },
    {
      id: 6,
      title: "Valentine Special Flower Bouquet Scented",
      img: "https://m.media-amazon.com/images/I/719E7jzn8pL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <section className="my-20 py-20">
      <h1 className="text-4xl font-semibold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">
        Gift Items
        </span>
      </h1>
      <p className="text-center text-gray-600  pt-2 pb-10">
      Make every occasion special with discounted gift items
      </p>

      <div className="relative">
        <div className="keen-slider" ref={sliderRef}>
          {giftProducts.map((card, index) => (
            <div
              key={card.id}
              className={`keen-slider__slide border-4 bg-transparent ${
                index === (currentSlide + 1) % giftProducts.length
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

export default GiftItems;
