import { useState } from 'react';
import { FaPhoneAlt, FaBars } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCountry from '@/hook/useCountry';

const Header = () => {
    const [countries] = useCountry();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className=' '>
            <div className='bg-[#F1F1FF]'>
            {/* main section start */}
            <div className='px-2 pt-2 md:pt-0 md:px-20'>
                <div className='hidden md:grid grid-cols-2 md:grid-cols-2 text-end py-3'>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1 md:gap-2'>
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
                            <DropdownMenuTrigger className="flex items-center justify-between px-4">
                                <span className="flex items-center rounded-none">
                                    {selectedCountry ? (
                                        <>
                                            <img
                                                src={selectedCountry.flag}
                                                // alt={selectedCountry.name}
                                                className="w-8 h-8 "
                                            />
                                            {/* {selectedCountry.name} */}
                                        </>
                                    ) : (
                                        <Globe size={24} className="text-gray-600" />
                                    )}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full bg-white">
                                {countries.map((country) => (
                                    <DropdownMenuItem
                                        key={country.code}
                                        onClick={() => setSelectedCountry(country)}
                                        className="flex items-center space-x-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img src={country.flag} className="w-5" />
                                        <span className='text-xs'>{country.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button className="relative ml-2 px-3 text-indigo-900 border-indigo-900 font-semibold text-xs md:text-base bg-white isolation-auto z-10 border-2 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 rounded-none before:bg-[#FF643A] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:border-[#fff] hover:text-white text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65]">
                            <span className="">GET STARTED</span>
                        </Button>
                    </div>
                </div>

                <div className='block md:hidden '>

                    <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-2'>
                                <FaPhoneAlt className='text-[#522F8F]'/><p className=''>01322878354</p>
                                </div>

                                <div className='flex items-center gap-2' >
                                <IoMail className='text-[#522F8F]'/>  <p className=''>info@easydrop.asia</p>
                                </div>

                        <div className=''>
                                <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center justify-between px-1">
                                 <span className="flex items-center rounded-none">
                                    {selectedCountry ? (
                                        <>
                                            <img
                                                src={selectedCountry.flag}
                                                // alt={selectedCountry.name}
                                                className="w-10 h-6"
                                            />
                                            {/* {selectedCountry.name} */}
                                        </>
                                    ) : (
                                        <Globe size={20} className="text-gray-600" />
                                    )}
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full bg-white">
                                {countries.map((country) => (
                                    <DropdownMenuItem
                                        key={country.code}
                                        onClick={() => setSelectedCountry(country)}
                                        className="flex items-center space-x-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <img src={country.flag} className="w-5" />
                                        <span className='text-xs'>{country.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </div>
                 </div>




                </div>

                {/* navbar section start */}
                <div className="flex items-center justify-between gap-3 pt-3">
                  <div className='flex items-center gap-2'>
                  <FaBars
                        className="text-2xl cursor-pointer md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="" className='h-8' />
                    </div>
                   
                  </div>

                        <div>
                        <Button className="block md:hidden bg-[#522F8F] rounded-sm px-5">Sign In</Button>
                        </div>
                  
                    <div className="hidden md:flex space-x-8 text-end">
                        <a href="#all-products" className="font-semibold text-lg">All Products</a>
                        <a href="#tracking" className="font-semibold text-lg">Tracking</a>
                        <a href="#learn-more" className="font-semibold text-lg">Learn More</a>
                        <a href="#faq" className="font-semibold text-lg">FAQ</a>
                    </div>
                </div>

                {/* Slide-in Menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transition-transform duration-300 transform ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="p-5">
                        <button
                            className="text-2xl text-gray-700 mb-5"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="flex flex-col space-y-4">
                            <a href="#all-products" className="font-semibold text-lg">All Products</a>
                            <a href="#tracking" className="font-semibold text-lg">Tracking</a>
                            <a href="#learn-more" className="font-semibold text-lg">Learn More</a>
                            <a href="#faq" className="font-semibold text-lg">FAQ</a>
                        </div>
                    </div>
                </div>
                {/* navbar section end */}
            </div>
            {/* main section end */}
        </div>

       
        </section>
    );
};

export default Header;
