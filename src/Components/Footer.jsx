import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaPinterest, FaQuora, FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareThreads } from "react-icons/fa6";
import takmonLogo from "../images/takmonLogo.png";

const Footer = () => {
  return (
    <section id="bottom" className="bg-gradient-to-r from-purple-900 via-gray-800 to-blue-800 text-white py-12">
      {/* Main Footer Grid Container */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Disclaimer Section */}
        <div className="flex flex-col items-center text-center bg-indigo-700 rounded-lg p-6 shadow-lg">
          <h3 className="text-yellow-300 font-bold text-lg mb-2">Disclaimer<sup>*</sup></h3>
          <p className="text-gray-200 text-sm">
            No guarantee is given for best results. Results may vary from person to person due to uncontrollable reasons.
          </p>
        </div>

        {/* Title Section */}
        <div className="flex flex-col items-center text-center bg-teal-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-cyan-300 text-2xl font-extrabold">I Shared My Knowledge To Help People</h3>
          <p className="text-gray-300 mt-2">
            Connecting people with ancient wisdom for modern challenges.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-green-800 rounded-lg p-6 shadow-lg text-center md:text-left">
          <h3 className="text-yellow-300 font-bold text-lg mb-2">Contact Astrologer Nikhil Sharma</h3>
          <p>
            <i>Dubai:</i> Al Furjan East, <a href="tel:+97152791261" className="text-yellow-400">+97152791261</a>
          </p>
          <p>
            <i>India (Himachal Pradesh):</i> Maha Laxmi Astro Dham, Kangra, <a href="tel:+919509168369" className="text-yellow-400">+919509168369</a>
          </p>
          <p className="mt-4">
            <b>Payment Modes:</b> <br /> Bank Transfer (India), PayPal, MoneyGram (International)
          </p>
          <p className="mt-4">
            <i>Email:</i> <a href="mailto:info@astrologerNikhilsharma.com" className="text-yellow-400 hover:underline">info@AstrologerNikhilSharma.com</a><br />
            <i>Skype:</i> Nikhil.sharma0007
          </p>
        </div>
      </div>

      {/* Social Media Grid */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <h4 className="text-lg font-bold text-gray-200 mb-4">Follow Guruji on Social Media</h4>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <a href="https://www.instagram.com/Astrologer.Nikhil.Sharma/" target="_blank" rel="noopener noreferrer" className="p-4 bg-pink-600 rounded-full hover:bg-pink-500">
            <FaInstagram className="text-white text-3xl" />
          </a>
          <a href="https://www.youtube.com/c/AstrologerNikhilSharma" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-600 rounded-full hover:bg-red-500">
            <FaYoutube className="text-white text-3xl" />
          </a>
          <a href="https://www.facebook.com/Astrologer.Nikhil.Sharma/" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-700 rounded-full hover:bg-blue-600">
            <CiFacebook className="text-white text-3xl" />
          </a>
          <a href="https://www.threads.net/@astrologer.Nikhil.sharma" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-600 rounded-full hover:bg-gray-500">
            <FaSquareThreads className="text-white text-3xl" />
          </a>
          <a href="https://www.linkedin.com/company/astrologer-Nikhil-sharma-ji/" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-500 rounded-full hover:bg-blue-400">
            <FaLinkedin className="text-white text-3xl" />
          </a>
          <a href="https://twitter.com/astrologerNikhil" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-400 rounded-full hover:bg-blue-300">
            <FaTwitter className="text-white text-3xl" />
          </a>
          <a href="https://www.pinterest.com/astrologerNikhil/" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-600 rounded-full hover:bg-red-500">
            <FaPinterest className="text-white text-3xl" />
          </a>
          <a href="https://www.quora.com/profile/Astrologer-Nikhil-Sharma" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-500 rounded-full hover:bg-red-400">
            <FaQuora className="text-white text-3xl" />
          </a>
        </div>
      </div>

      {/* DMCA Section */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <div className="text-green-300 font-bold flex flex-col items-center">
          <p>Copyright © 2024 All Rights Reserved By TAKMON BOOST</p>
          <a href="https://takmonboost.com/" className="mt-2">
            <img src={takmonLogo} alt="Takmon Logo" className="w-24 md:w-32" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
