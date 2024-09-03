
import { Button } from '@/components/ui/button';
import { ShoppingCart, Users } from 'lucide-react';
import { FaUsers } from 'react-icons/fa';
import { FaCirclePlay, FaRankingStar } from 'react-icons/fa6';

function Banner() {
    return (
        <section 
        className='bg-cover bg-center h-screen px-20'
        style={{
            backgroundImage: "url('https://i.ibb.co/vJxV6DX/aspect-ratio.png')",
            
        }}
        >
            <div className='grid grid-cols-2 gap-10 h-full'>
                <div className='pt-44'>
                    <h1 className='text-5xl font-extrabold text-[#522F8F]'>
                        Building your business
                    </h1>
                    <p className='w-4/6 pt-5 text-[#757095]'>
                        Small business, big opportunity? We help our clients to grow & reshape their business.
                    </p>

                    <div className='flex gap-5 items-center pt-10 pb-28'>
                        <Button className="bg-gradient-to-r from-[#522F8F] from-20% to-[#D31A65] rounded-sm px-6">
                            Sign Up
                        </Button>
                        <p className='flex items-center gap-2'>
                            <FaCirclePlay className='text-4xl bg-[#D31A65] text-white rounded-full p-1'/>
                            Watch Video
                        </p>
                    </div>

                    <div className='flex items-center justify-around w-3/4 mt-5'>
                        <div className='text-center -ml-16'>
                            <Users size={50} strokeWidth={1.5} className='bg-[#522F8F] p-2 rounded-full text-white mx-auto'/>
                            <p className='pt-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]'>500+</p>
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
    );
}

export default Banner;
