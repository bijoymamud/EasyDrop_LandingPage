
import { Button } from '@/components/ui/button';
import { ShoppingCart, Users } from 'lucide-react';
import { FaUsers } from 'react-icons/fa';
import { FaCirclePlay, FaRankingStar } from 'react-icons/fa6';

function Banner() {
    return (
       <div>
            <section 
        className='bg-cover bg-center h-screen hidden md:block'
        style={{
            backgroundImage: "url('https://i.ibb.co/vJxV6DX/aspect-ratio.png')",
            
        }}
        >
            <div className=' h-full'>
                <div className='md:pt-44 pt-20 px-2 md:mx-20'>
                    <h1 className='md:text-5xl text-2xl font-extrabold text-[#522F8F]'>
                        Building your Business
                    </h1>
                    <p className='md:w-4/6 w-full pt-5 text-[#757095] '>
                        Small business, big opportunity? We help our clients to grow & reshape their business.
                    </p>

                    <div className='flex gap-5 items-center pt-10 pb-28'>
                        <Button className="bg-gradient-to-r from-[#522F8F] py-5 from-30% to-[#D31A65] rounded-sm px-8">
                            Sign Up
                        </Button>
                        <p className='flex items-center gap-2'>
                            <FaCirclePlay className='text-4xl bg-[#D31A65] text-white rounded-full p-1'/>
                            Watch Video
                        </p>
                    </div>

                    <div className='flex items-center justify-around md:w-2/4 mt-5'>
                        <div className='text-center md:-ml-16'>
                            <Users size={50} strokeWidth={1.5} className='bg-[#522F8F] p-2 rounded-full text-white mx-auto'/>
                            <p className='pt-3 text-base md:text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]'>500+</p>
                            <p>Subscribers</p>
                        </div>

                        <div className='text-center -ml-16'>
                            <ShoppingCart size={50} strokeWidth={1.5} className='bg-[#522F8F] p-2 rounded-full text-white mx-auto'/>
                            <p className='pt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]'>500+</p>
                            <p>Completed Orders</p>
                        </div>

                        <div className='text-center -ml-16'>
                            <FaRankingStar size={50} strokeWidth={1.5} className='bg-[#522F8F] p-2 rounded-full text-white mx-auto'/>
                            <p className='pt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]'>500+</p>
                            <p>Reviews</p>
                        </div>

                        <div className='text-center -ml-16'>
                            <FaUsers size={50} strokeWidth={1.5} className='bg-[#522F8F] p-2 rounded-full text-white mx-auto'/>
                            <p className='pt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]'>500+</p>
                            <p>Team Members</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='block md:hidden pt-14 bg-[#F1F1FF] bg-cover bg-center h-screen'
        
        style={{
            backgroundImage: "url('https://i.ibb.co/qNzv3Hs/Whats-App-Image-2024-09-05-at-12-00-54-AM.jpg')",
            
        }}>
                <div className='text-center'>
                      <h2 className='text-4xl font-extrabold text-[#522F8F]'>Building Your <br /> Business</h2>
                     <p className=' px-5 mx-auto text-gray-600 py-5'>Small business, big opportunity? We help our clients to grow & reshape their business.</p>
                </div> 
                <div className='flex justify-center gap-5 items-center pt-5 pb-10 mx-auto '>
                        <Button className="bg-gradient-to-r  from-[#522F8F] py-5 from-30% to-[#D31A65] rounded-sm px-8">
                            Sign Up
                        </Button>
                        <p className='flex items-center gap-2'>
                            <FaCirclePlay className='text-4xl bg-[#D31A65] text-white rounded-full p-1'/>
                            Watch Video
                        </p>
                    </div>
        </section>
       </div>

        
    );
}

export default Banner;
