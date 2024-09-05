import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

function GotNotified() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const number = form.number.value;
    console.log(email, number);
    form.reset();
  };

  return (
    <section className='py-10 md:py-20'>
      <div className="bg-[#522F8F] text-white py-10 md:py-16 px-5 md:px-20">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Side Content */}
          <div className='md:col-span-2'>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Turn your free time into a new <br className='hidden md:block' /> online business with EasyDrop,<br className='hidden md:block' /> right from home.
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg w-full md:w-5/6 text-gray-100">
              We’re offering free digital marketing training and a 90-day money-back guarantee! That means if you don’t earn, you’ll receive a full refund of your registration fee. This is an opportunity that cannot be missed.
            </p>
            <div className="pt-6 md:pt-10">
              <p className="font-semibold">
                Join with more 500+ happy subscribers
              </p>
              <div className='flex items-center pt-2'>
                <Avatar className="border-2">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-4 border-2">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-4 border-2">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-bold ml-2 md:ml-4 underline text-white">and others</span>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-white text-black rounded-none py-4 md:py-6 mb-4"
            />
            <Input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="bg-white text-black rounded-none py-4 md:py-6 mb-4"
            />
            


<Button className="bg-white hover:bg-white text-black md:py-6 md:text-lg shadow-xl rounded-none "><span className="text-transparent bg-clip-text  px-3 md:px-6 font-extrabold  bg-gradient-to-r from-[#522F8F] to-[#D31A65] ">JOIN NOW</span></Button>
                


            

          </form>
        </div>
      </div>
    </section>
  );
}

export default GotNotified;
