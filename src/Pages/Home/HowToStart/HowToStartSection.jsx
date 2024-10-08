import { Button } from '@/components/ui/button';
import React from 'react';

const HowToStartSection = () => {
  const steps = [
    {
      title: 'Register an account on EasyDrop and download the product image',
      step: 'Step 1',
      icon: 'https://i.ibb.co/LR9kWbt/Group-1.png', 
    },
    {
      title: 'Add your profit and post it on Facebook or website',
      step: 'Step 2',
      icon: 'https://i.ibb.co/3BVsYZK/Group-2.png',
    },
    {
      title: 'Once the order is confirmed, place it in your EasyDrop account',
      step: 'Step 3',
      icon: 'https://i.ibb.co/vhgjV3Y/Group-3.png',
    },
    {
      title: 'After the customer gets product delivery, withdraw your profit',
      step: 'Step 4',
      icon: 'https://i.ibb.co/LR9kWbt/Group-1.png',
    },
  ];

  return (
    <div className=" mt-10 md:pt-10 md:mt-10 px-6 pb-8 md:px-20 bg-white">
      <h1 className="text-3xl md:text-4xl font-semibold text-center pb-12 md:pb-20">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-4xl md:text-5xl">
          How to Start ?
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 py-5 md:py-20">
        {steps.map((step, index) => (
          <div key={index} className="text-center border-2 border-[#D31A65] p-4 md:p-0 mb-10 md:mb-0">
            <div className="bg-white rounded-full -mt-14 md:-mt-16 w-[120px] md:w-[150px] mx-auto">
              <img src={step.icon} alt="" className="bg-rose-50 p-1 rounded-full h-[80px] md:h-[100px] w-[80px] md:w-[100px] mx-auto" />
            </div>
            <p className="text-sm md:text-base text-gray-600 my-4 font-semibold">
              {step.title}
            </p>
            <div className="flex justify-end -mb-10 md:-mb-7 me-2 md:me-4 md:mt-10 ">
              <p className="text-lg md:text-xl font-semibold text-[#D31A65] p-3 md:p-4 bg-white">
                {step.step}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      {/* <div className='flex items-center mx-auto text-center'>
      <Button className="bg-gradient-to-r rounded-none px-5 from-[#522F8F] to-[#D31A65] text-center md:text-center">Start Now</Button>
                        </div> */}
                 
    </div>
  );
};

export default HowToStartSection;
