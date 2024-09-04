import { Button } from "@/components/ui/button";

function Statistics() {
    return (
        <section>
            <div className="bg-[#F4F6FA] p-10 md:p-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-14 text-center md:text-left">
                    <div className="col-span-2">
                        <h1 className="text-[#522F8F] font-extrabold text-3xl md:text-5xl">
                            Our powerful
                        </h1>
                        <h1 className="text-[#522F8F] font-extrabold text-3xl md:text-5xl pt-3">
                            statistics say it all.
                        </h1>
                    </div>

                    <div>
                        <h1 className="font-semibold text-4xl md:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold">500+</span>
                        </h1>
                        <p className="text-base md:text-lg">Subscribers</p>
                    </div>

                    <div>
                        <h1 className="font-semibold text-4xl md:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold">2000+</span>
                        </h1>
                        <p className="text-base md:text-lg">Orders completed</p>
                    </div>

                    <div>
                        <h1 className="font-semibold text-4xl md:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold">1K+</span>
                        </h1>
                        <p className="text-base md:text-lg">5-stars reviews</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#522F8F] my-10 md:my-20 p-5 md:p-20 text-center">
                <p className="text-white text-lg md:text-2xl font-extrabold w-full md:w-3/4 mx-auto">
                    Forget about capital—start dropshipping easily with <span className="text-2xl md:text-5xl">Easydrop</span>, without the hassle of stocking any products. The best part? The business will be in your name and delivery is nationwide!
                </p>

                <div className="pt-6 md:pt-10">
                    <Button className="relative px-3 py-4 md:px-8 md:py-6 text-indigo-900 border-indigo-900 font-extrabold text-lg bg-white isolation-auto z-10 border-2 
                        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-[#FF643A]
                        before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white">
                        JOIN NOW
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Statistics;
