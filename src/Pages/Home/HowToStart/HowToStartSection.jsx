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
    <div className="pt-14 mt-14 bg-white">
      <h1 className="text-4xl font-semibold text-center pb-20">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">How to Start ?  </span>        
        </h1>
      

        <div className='grid grid-cols-4 gap-10 py-20'>

        {steps.map((step, index) => (
          <div key={index} className="text-center border-2 border-[#D31A65]">
            <div className='bg-white rounded-full -mt-16 w-[150px] mx-auto'>
            <img src={step.icon} alt="" className='bg-rose-50 p-1 rounded-full h-[100px] w-[100px] mx-auto' />

            </div>
            <p className="text-sm text-gray-600 my-4 font-semibold">{step.title}</p>

     <div className='flex justify-end -mb-6 me-4'>
                <p className="text-xl font-semibold text-[#D31A65] p-4 bg-white ">{step.step}</p>
        </div>    


    </div>
        ))}  

        </div>

       <div className='text-center'>
       <Button className="relative ml-2  py-5 border-indigo-900 font-semibold text-base  isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-gradient-to-r from-[#522F8F] to-[#D31A65]  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white  text-transparent bg-clip-text px-8">
                            <span className="font-bold ">Start Now</span>
                        </Button>
       </div>
     
    </div>
  );
};

export default HowToStartSection;
