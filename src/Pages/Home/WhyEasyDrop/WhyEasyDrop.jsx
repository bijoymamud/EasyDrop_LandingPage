import { Button } from "@/components/ui/button";
import { SiTicktick } from "react-icons/si";

function WhyEasyDrop() {
    return (
        <section className="pt-32 px-20 ">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <img  src="https://i.ibb.co/C5XNd6D/b0d63dcb83e88077a765601cca201390.png" alt="" className="w-[600px]" />
                    </div>
                    <div className="pt-20">
                    <h1 className="text-4xl font-semibold ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">Why EasyDrop ?</span>        
                 </h1>
                 <p className="font-semibold w-3/4 pt-5 text-lg">Embark on your business journey with Bangladesh's <br /> premier dropshipping platform, backed by a 100% money-back guarantee.</p>


              <div className="py-14">
              <div className="flex items-center gap-2">
                    <SiTicktick className="text-[#D31A65] text-xl"/>
                    <h1>Huge collection of new products!</h1>
                </div>
                <div className="flex items-center gap-2 py-3">
                    <SiTicktick className="text-[#D31A65] text-xl"/>
                    <h1>Packaging with your own company name and logo</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SiTicktick className="text-[#D31A65] text-xl"/>
                    <h1>90 days money back guarantee!</h1>
                </div>
                <div className="flex items-center gap-2 py-3">
                    <SiTicktick className="text-[#D31A65] text-xl"/>
                    <h1>Free Digital Marketing Training and Dedicated Support!</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SiTicktick className="text-[#D31A65] text-xl"/>
                    <h1>Maximum profit opportunities and fastest payments!</h1>
                </div>

              </div>

            
             
                        <Button className="relative ml-2  py-5 border-indigo-900 font-semibold text-base  isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-gradient-to-r from-[#522F8F] to-[#D31A65]  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white  text-transparent bg-clip-text px-8 text-indigo-900 ">
                            <span className="">Start Now</span>
                        </Button>
                    </div>
                </div>  

               <div className="py-20 ">

               <h1 className="text-4xl font-semibold text-center ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl"> What We Provide?</span>        
    </h1>

               <div className="grid grid-cols-4 gap-5 pt-10 px-24">
                    
                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://i.ibb.co/0rggXwQ/Group-1000008819.png" alt="" />
                        <div>
                            <h4 className="font-extrabold">Free Training</h4>
                            <p>Learn New Skills</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://i.ibb.co/DgvsxWL/Group-1000008820.png" alt="" />
                        <div>
                            <h4  className="font-extrabold">Free Courses</h4>
                            <p>Online Marketing Course</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA]">
                        <img src="https://i.ibb.co/FX86Gsm/Group.png" alt="" />
                        <div>
                            <h4  className="font-extrabold">Referral Bonus</h4>
                            <p>Earn rewards by referring</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 border p-5 rounded-sm bg-[#F4F6FA] ">
                        <img src="https://i.ibb.co/wCDmYcR/Group-1000008761.png" alt="" />
                        <div>
                            <h4  className="font-extrabold">Return & Refund</h4>
                            <p>Money-back guarantee</p>
                        </div>
                    </div>
                    
                    
                </div>  
               </div>
        </section>
    )
}

export default WhyEasyDrop
