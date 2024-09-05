import { Button } from "@/components/ui/button";
import { SiTicktick } from "react-icons/si";

function WhyEasyDrop() {
    return (
        <section className="pt-20 px-6 md:pt-32 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co/C5XNd6D/b0d63dcb83e88077a765601cca201390.png"
                        alt=""
                        className="w-full max-w-[300px] md:max-w-[600px]"
                    />
                </div>
                <div className="pt-10 md:pt-20">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-4xl md:text-5xl">
                            Why EasyDrop ?
                        </span>
                    </h1>
                    <p className="font-semibold w-full md:w-3/4 pt-5 text-base md:text-lg">
                        Embark on your business journey with Bangladesh's <br /> premier dropshipping platform, backed by a 100% money-back guarantee.
                    </p>

                    <div className="py-10 md:py-14">
                        <div className="flex items-center gap-2">
                            <SiTicktick className="text-[#D31A65] text-xl" />
                            <h1 className="text-sm md:text-base">Huge collection of new products!</h1>
                        </div>
                        <div className="flex items-center gap-2 py-3">
                            <SiTicktick className="text-[#D31A65] text-xl" />
                            <h1 className="text-sm md:text-base">Packaging with your own company name and logo</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiTicktick className="text-[#D31A65] text-xl" />
                            <h1 className="text-sm md:text-base">90 days money back guarantee!</h1>
                        </div>
                        <div className="flex items-center gap-2 py-3">
                            <SiTicktick className="text-[#D31A65] text-xl" />
                            <h1 className="text-sm md:text-base">Free Digital Marketing Training and Dedicated Support!</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiTicktick className="text-[#D31A65] text-xl" />
                            <h1 className="text-sm md:text-base">Maximum profit opportunities and fastest payments!</h1>
                        </div>
                    </div>

                  <div className="text-center md:text-start">
                  <Button className="relative ml-2 py-4 md:py-5 border-indigo-900 font-semibold text-sm md:text-base isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-gradient-to-r from-[#522F8F] to-[#D31A65] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white text-transparent bg-clip-text px-6 md:px-8 text-indigo-900">
                        <span className="">Start Now</span>
                    </Button>
                  </div>
                </div>
            </div>

            <div className="py-20">
                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-4xl md:text-5xl"> What We Provide?</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-10 md:px-16">
                    <div className="flex items-center gap-6 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://cdn-icons-png.flaticon.com/512/4402/4402613.png" alt="" className="w-1/3 md:w-1/3"/>
                        <div>
                            <h4 className="font-bold text-lg">Free Training</h4>
                            <p className="text-sm text-gray-500">Learn New Skills</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://cdn-icons-png.flaticon.com/512/5965/5965835.png" alt=""  className="w-1/3 md:w-1/3" />
                        <div>
                            <h4 className="font-bold text-lg">Free Courses</h4>
                            <p className="text-sm text-gray-500">Online Marketing Course</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://cdn-icons-png.flaticon.com/512/3591/3591611.png" alt=""  className="w-1/3 md:w-1/3"/>
                        <div>
                            <h4 className="font-bold text-lg">Referral Bonus</h4>
                            <p className="text-sm text-gray-500">Earn rewards by referring</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA] ">
                        <img src="https://cdn-icons-png.flaticon.com/512/5464/5464047.png" alt=""  className="w-1/3 md:w-1/3"/>
                        <div>
                            <h4 className="font-bold text-lg">Return & Refund</h4>
                            <p className="text-sm text-gray-500">Money-back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyEasyDrop;
