import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F1F1FF] py-10 pt-16 pb-5">
      <div className="px-20 mx-auto grid grid-cols-1 md:grid-cols-6 gap-5">
        <div className="space-y-4 col-span-2">
          <img src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="companyLogo" className="h-8" />
          <p className=" text-[#4b4c6e]">
            EasyDrop, ranked as the top dropshipping platform in Bangladesh, is
            dedicated to the mission of eradicating unemployment and actively
            participating in the country's economic growth.
          </p>
          <ul className="space-y-2 text-[#4b4c6e] pt-5">
            <li className="flex items-center gap-2">
            <MapPin className=" text-[#522F8F] font-extrabold"/>
              <span className="font-semibold ">Address:</span> House 53, Road 5, Block E,
              Aftabnagar
            </li>
            <li className="flex items-center gap-2">
            <Phone className=" text-[#522F8F] font-extrabold"/>
              <span className="font-semibold">Call Us:</span> 0123-2789654
            </li>
            <li className="flex items-center gap-2">
            <Mail className=" text-[#522F8F] font-extrabold"/>
              <span className="font-semibold">Email:</span> info@easydrop.asia
            </li>
            <li className="flex items-center gap-2">
            <Clock3 className=" text-[#522F8F] font-extrabold"/>
              <span className="font-semibold">Hours:</span> (10AM-5PM)
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#4b4c6e]">Company</h3>
          <ul className="space-y-2 text-[#4b4c6e]">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Learn More</li>
            <li>Terms & Conditions</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#4b4c6e]">Account</h3>
          <ul className="space-y-2 text-[#4b4c6e]">
            <li>Sign Up</li>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Track My Order</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#4b4c6e]">Categories</h3>
          <ul className="space-y-2 text-[#4b4c6e]">
            <li>Women Clothing</li>
            <li>Gadgets & IT Accessories</li>
            <li>Health & Beauty</li>
            <li>Home & Lifestyle</li>
            <li>Jewelries & Accessories</li>
            <li>Kitchen Appliances</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#4b4c6e]">Follow Us</h3>
          <ul className="space-y-2 text-[#4b4c6e]">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-[#4b4c6e] pt-10">
        Copyright © 2024 EasyDrop. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
