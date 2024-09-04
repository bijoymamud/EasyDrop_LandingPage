import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    // <footer className="bg-[#F1F1FF] px-5 md:px-20 md:pt-20 md:pb-10 pt-10 pb-5">
    //   <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
    //     <div className="col-span-1 md:col-span-2 main_part mx-auto text-center md:text-left">
    //       <img
    //         src="https://i.ibb.co/JRHSrS3/new-sitelogo.png"
    //         alt=""
    //         className="h-10 mb-3 mx-auto md:mx-0"
    //       />
    //       <p>
    //         EasyDrop, ranked as the top dropshipping platform in Bangladesh, is
    //         dedicated to the mission of eradicating unemployment and actively
    //         participating in the country's economic growth.
    //       </p>
    //       <ul className="space-y-2 text-[#4b4c6e] pt-5 text-sm md:text-base">
    //         <li className="flex items-center justify-center md:justify-start gap-2">
    //           <MapPin className="text-[#522F8F] font-extrabold" />
    //           <span className="font-semibold">Address:</span> House 53, Road 5,
    //           Block E, Aftabnagar
    //         </li>
    //         <li className="flex items-center justify-center md:justify-start gap-2">
    //           <Phone className="text-[#522F8F] font-extrabold" />
    //           <span className="font-semibold">Call Us:</span> 0123-2789654
    //         </li>
    //         <li className="flex items-center justify-center md:justify-start gap-2">
    //           <Mail className="text-[#522F8F] font-extrabold" />
    //           <span className="font-semibold">Email:</span> info@easydrop.asia
    //         </li>
    //         <li className="flex items-center justify-center md:justify-start gap-2">
    //           <Clock3 className="text-[#522F8F] font-extrabold" />
    //           <span className="font-semibold">Hours:</span> (10AM-5PM)
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="grid grid-cols-2 gap-5 text-center md:text-left  ">
    //       <div>
    //         <h1 className="text-xl font-semibold pb-5">Company</h1>
    //         <ul>
    //           <li className="text-gray-600">About Us</li>
    //           <li className="text-gray-600">Contact Us</li>
    //           <li className="text-gray-600">FAQ</li>
    //           <li className="text-gray-600">Learn More</li>
    //           <li className="text-gray-600">Terms & Conditions</li>
    //           <li className="text-gray-600">Support Center</li>
    //           <li className="text-gray-600">Careers</li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h1 className="text-xl font-semibold pb-5">Categories</h1>
    //         <ul>
    //           <li className="text-gray-600">Women Clothing</li>
    //           <li className="text-gray-600">Gadgets & IT Accessories</li>
    //           <li className="text-gray-600">Health & Beauty</li>
    //           <li className="text-gray-600">Home & Lifestyle</li>
    //           <li className="text-gray-600">Jewelries & Accessories</li>
    //           <li className="text-gray-600">Kitchen Appliances</li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h1 className="text-xl font-semibold pb-5">Account</h1>
    //         <ul>
    //           <li className="text-gray-600">Sign Up</li>
    //           <li className="text-gray-600">Sign In</li>
    //           <li className="text-gray-600">View Cart</li>
    //           <li className="text-gray-600">Track My Order</li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h1 className="text-xl font-semibold pb-5">Follow Us</h1>
    //         <ul>
    //           <li className="text-gray-600">Facebook</li>
    //           <li className="text-gray-600">Instagram</li>
    //           <li className="text-gray-600">LinkedIn</li>
    //           <li className="text-gray-600">YouTube</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="text-center pt-12">
    //     Copyright© 2024 EasyDrop. All rights reserved
    //   </p>
    // </footer>

    <footer className="p-6 dark:bg-gray-100 dark:text-gray-800 bg-[#F1F1FF] md:px-20">
	<div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
		
          <div className="col-span-2">
              <img src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="" className="h-10 mx-auto md:mx-0"/>
              <p className="pt-5 text-center">EasyDrop, ranked as the top dropshipping platform in Bangladesh, is dedicated to the mission of eradicating unemployment and actively participating in the country's economic growth.</p>
              <ul className="space-y-2 text-[#4b4c6e] pt-5 text-sm md:text-base">
            <li className="flex items-center justify-start md:justify-start gap-2">
              <MapPin className="text-[#522F8F] font-extrabold" />
              <span className="font-semibold">Address:</span> House 53, Road 5,
              Block E, Aftabnagar
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <Phone className="text-[#522F8F] font-extrabold" />
               <span className="font-semibold">Call Us:</span> 0123-2789654
             </li>
             <li className="flex items-center justify-start md:justify-start gap-2">
               <Mail className="text-[#522F8F] font-extrabold" />
               <span className="font-semibold">Email:</span> info@easydrop.asia
             </li>
             <li className="flex items-center justify-start md:justify-start gap-2">
               <Clock3 className="text-[#522F8F] font-extrabold" />
               <span className="font-semibold">Hours:</span> (10AM-5PM)
             </li>
          </ul>
            </div>

		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting started</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Release Notes</a>
				<a rel="noopener noreferrer" href="#">Upgrade Guide</a>
				<a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
				<a rel="noopener noreferrer" href="#">Optimizing for Production</a>
				<a rel="noopener noreferrer" href="#">Browser Support</a>
				<a rel="noopener noreferrer" href="#">IntelliSense</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Core Concepts</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Utility-First</a>
				<a rel="noopener noreferrer" href="#">Responsive Design</a>
				<a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
				<a rel="noopener noreferrer" href="#">Dark Mode</a>
				<a rel="noopener noreferrer" href="#">Adding Base Styles</a>
				<a rel="noopener noreferrer" href="#">Extracting Components</a>
				<a rel="noopener noreferrer" href="#">Adding New Utilities</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Customization</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Configuration</a>
				<a rel="noopener noreferrer" href="#">Theme Configuration</a>
				<a rel="noopener noreferrer" href="#">Breakpoints</a>
				<a rel="noopener noreferrer" href="#">Customizing Colors</a>
				<a rel="noopener noreferrer" href="#">Customizing Spacing</a>
				<a rel="noopener noreferrer" href="#">Configuring Variants</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Follow Us</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">GitHub</a>
				<a rel="noopener noreferrer" href="#">Discord</a>
				<a rel="noopener noreferrer" href="#">Twitter</a>
				<a rel="noopener noreferrer" href="#">YouTube</a>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-2 pt-12 text-sm">
		<span className="dark:text-gray-600">Copyright© 2024 EasyDrop. All rights reserved</span>
	</div>
</footer>
  );
};

export default Footer;
