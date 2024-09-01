
import { Button } from '@/components/ui/button';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import Banner from '../Banner/Banner';
import useCountry from '@/hook/useCountry';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const Header = () => {
    const [countries] = useCountry();
    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <section
            className='bg-cover bg-center min-h-screen'
            style={{
                backgroundImage: "url('https://i.ibb.co/4mM3jHN/hero-banner-without-text.png')",
            }}
        >
            {/* main section start */}
            <div className='px-20'>
                <div className='grid grid-cols-2 text-end py-3'>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-indigo-900 '/>
                            <p className='text-xs'>0123456789 (10AM-5PM)</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <IoMail className='text-xl text-indigo-900' />
                            <p className='text-xs'>info@easydrop.com</p>
                        </div>
                    </div>

                    <div className='flex justify-end gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between px-4 py-2">
                                <span className="flex items-center rounded-none ">
                                    {selectedCountry ? (
                                        <>
                                            <img
                                                src={selectedCountry.flag}
                                                alt={selectedCountry.name}
                                                className="w-5 h-5 mr-2"
                                            />
                                            {selectedCountry.name}
                                        </>
                                    ) : (
                                        <Globe size={28} className="text-gray-600 " />
                                    )}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full bg-white">
                                {countries.map((country) => (
                                    <DropdownMenuItem
                                        key={country.code}
                                        onClick={() => setSelectedCountry(country)}
                                        className="flex items-center space-x-2 py-2 px-4  hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img src={country.flag} className="w-5 h-5" />
                                        <span>{country.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button className="relative ml-2  px-3 text-indigo-900 border-indigo-900 font-semibold text-base bg-white isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-[#FF643A] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] ">
                            <span className="">GET STARTED</span>
                        </Button>
                    </div>
                </div>

                {/* navbar section start */}
                <div className="grid grid-cols-4 items-center pt-3 pb-14">
                    <div className="col-span-2">
                        <img src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="" className='h-8' />
                    </div>
                    <div className="space-x-8 text-end col-span-2">
                        <a href="#all-products" className="font-semibold text-lg">All Products</a>
                        <a href="#tracking" className="font-semibold text-lg">Tracking</a>
                        <a href="#learn-more" className="font-semibold text-lg">Learn More</a>
                        <a href="#faq" className="font-semibold text-lg">FAQ</a>
                    </div>
                </div>
                {/* navbar section end */}

                <Banner />
            </div>
            {/* main section end */}
        </section>
    );
};

export default Header;
