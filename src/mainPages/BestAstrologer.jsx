import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import YtQuery from "../Components/YtQuery";
import PlacesNames from "../Data/bestAstrologer/PlacesNames.js";
import Footer from "../Components/Footer.jsx";
import gettingAward from "../images/gettingAward.jpg";
import { Link } from "react-router-dom";

const BestAstrologer = () => {
  // State to track the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the click on a FAQ item
  const handleItemClick = (index) => {
    // Toggle the visibility of the selected FAQ answer
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="contentSection p-4">
        {/* Desktop View */}
        <div className="hidden custom-md:grid grid-cols-2 gap-8">
  <div>
    <h1 className="text-3xl font-bold mb-4 underline pb-1">
      Best Astrologer Worldwide: Astrologer Nikhil Sharma
    </h1>
    <div className="grid gap-4">
      <div className="p-4 border border-gray-300 bg-neutral-300 rounded-md shadow-sm">
        <h2 className="font-semibold">Global Recognition and Acclaim</h2>
        <p>
          Astrologer Nikhil Sharma is globally recognized for his mastery in
          Vedic astrology. With over two decades of experience, he provides
          insightful solutions to life challenges. His clientele includes people
          from Asia, North America, and Europe.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-orange-300 rounded-md shadow-sm">
        <h2 className="font-semibold">Top Astrologer in Multiple Countries</h2>
        <p>
          Known as a top astrologer in India, the USA, the UK, Canada, Australia,
          and other countries across Asia and Europe, his skills have earned him
          widespread respect.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-yellow-300 rounded-md shadow-sm">
        <h2 className="font-semibold">Based in Chandigarh, India</h2>
        <p>
          Astrologer Nikhil Sharma, based in Chandigarh, extends his services
          throughout India, bringing guidance and prosperity to countless
          individuals. His expertise in addressing life challenges has been
          recognized with multiple awards.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-emerald-300 rounded-md shadow-sm">
        <h2 className="font-semibold">Renowned Services</h2>
        <p>
          This webpage highlights his globally acclaimed astrology services,
          designed to support those seeking guidance and comfort worldwide.
        </p>
      </div>
    </div>
  </div>
  <div className="animate-slideInRight">
    <YtQuery />
  </div>
</div>

{/* Mobile View */}
<div className="block custom-md:hidden">
  <div>
    <h1 className="text-3xl font-bold mb-4 underline pb-1">
      Best Astrologer Worldwide: Astrologer Nikhil Sharma
    </h1>
    <div className="grid gap-4">
      <div className="p-4 border border-gray-300 bg-neutral-300 rounded-md shadow-md">
        <h2 className="font-semibold">Global Recognition and Acclaim</h2>
        <p>
          Astrologer Nikhil Sharma is globally recognized for his mastery in
          Vedic astrology. With over two decades of experience, he provides
          insightful solutions to life challenges. His clientele includes people
          from Asia, North America, and Europe.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-orange-200 rounded-md shadow-md">
        <h2 className="font-semibold">Top Astrologer in Multiple Countries</h2>
        <p>
          Known as a top astrologer in India, the USA, the UK, Canada, Australia,
          and other countries across Asia and Europe, his skills have earned him
          widespread respect.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-yellow-200 rounded-md shadow-md">
        <h2 className="font-semibold">Based in Chandigarh, India</h2>
        <p>
          Astrologer Nikhil Sharma, based in Chandigarh, extends his services
          throughout India, bringing guidance and prosperity to countless
          individuals. His expertise in addressing life challenges has been
          recognized with multiple awards.
        </p>
      </div>
      <div className="p-4 border border-gray-300 bg-green-200 rounded-md shadow-md">
        <h2 className="font-semibold">Renowned Services</h2>
        <p>
          This webpage highlights his globally acclaimed astrology services,
          designed to support those seeking guidance and comfort worldwide.
        </p>
      </div>
    </div>
    <div className="animate-slideIn mt-4">
      <YtQuery />
    </div>
  </div>
</div>




        {/* Contact Information */}
        <div className="midContentBox bg-gradient-to-r from-green-700 to-teal-600 p-4 my-4 text-white text-center flex items-center justify-center">
  <p>
    Swift and Effective Solutions Through <strong>Healing & Meditation</strong> by 
    <i> Astrologer Nikhil Sharma</i>. Reach out via 
    <span>
      <a href="tel:+91-95091-68369" className="text-yellow-300 hover:underline"> +91-95091-68369</a>
    </span> or email us at 
    <a href="mailto:info@astrologerNikhilsharma.com" className="text-yellow-300 hover:underline">
      info@AstrologerNikhilSharma.com
    </a>.
  </p>
</div>

{/* Desktop Services Section */}
<div className="hidden custom-md:flex gap-8">
  <div className="w-[70vw]">
    <h2 className="text-3xl font-bold mb-4 text-teal-900">
      Astrology and Healing Services Worldwide by Astrologer Nikhil Sharma
    </h2>
    <p className="mb-4 text-gray-800">
      If you're facing challenges in life, Astrologer Nikhil Sharma is here to help. Known as the 
      <strong> premier provider of astrology services in India, USA, UK, Canada, and Australia</strong>, he offers effective, affordable solutions rooted in a meticulous analysis of each individual's birth chart.
    </p>
    <p className="mb-6 text-gray-800">
      Our <strong>astrology and healing services</strong> cover essential life areas:
    </p>
    
    {/* Service Grid */}
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 border rounded-md shadow-sm bg-yellow-100">
        <h3 className="font-semibold text-lg text-teal-900">Education & Studies Abroad</h3>
        <p>Guidance for academic and overseas education opportunities.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-orange-100">
        <h3 className="font-semibold text-lg text-teal-900">Career & Business</h3>
        <p>Insights on career growth, business opportunities, and more.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-pink-100">
        <h3 className="font-semibold text-lg text-teal-900">Love & Relationships</h3>
        <p>Solutions for love affairs, relationship dynamics, and harmony.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-blue-100">
        <h3 className="font-semibold text-lg text-teal-900">Marriage Compatibility</h3>
        <p>Assistance with love, arranged, and inter-caste marriages.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-green-100">
        <h3 className="font-semibold text-lg text-teal-900">Financial Stability</h3>
        <p>Strategies for wealth management and financial security.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-purple-100">
        <h3 className="font-semibold text-lg text-teal-900">Health & Wellness</h3>
        <p>Guidance for mental and physical well-being.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-red-100">
        <h3 className="font-semibold text-lg text-teal-900">Political Influences</h3>
        <p>Insights into political guidance and public influence.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-indigo-100">
        <h3 className="font-semibold text-lg text-teal-900">Foreign Travels</h3>
        <p>Assistance with travel, tours, and overseas aspirations.</p>
      </div>
    </div>
  </div>

  <div className="contentImage ml-4 w-[40vw]">
    <img src={gettingAward} alt="Astrologer receiving an award" className="rounded-md shadow-md" />
  </div>
</div>

{/* Mobile Services Section */}
<div className="block custom-md:hidden">
  <div className="contentImage mb-4">
    <img src={gettingAward} alt="Astrologer receiving an award" className="rounded-md shadow-md" />
  </div>
  <div>
    <h2 className="text-3xl font-bold mb-4 text-teal-900">
      Astrology and Healing Services Worldwide by Astrologer Nikhil Sharma
    </h2>
    <p className="mb-4 text-gray-800">
      If you're facing challenges in life, Astrologer Nikhil Sharma is here to help. Known as the 
      <strong> premier provider of astrology services in India, USA, UK, Canada, and Australia</strong>, he offers effective, affordable solutions rooted in a meticulous analysis of each individual's birth chart.
    </p>
    <p className="mb-4 text-gray-800">
      Our <strong>astrology and healing services</strong> cover essential life areas:
    </p>

    {/* Mobile Service Grid */}
    <div className="grid grid-cols-1 gap-4">
      <div className="p-4 border rounded-md shadow-sm bg-yellow-100">
        <h3 className="font-semibold text-lg text-teal-900">Education & Studies Abroad</h3>
        <p>Guidance for academic and overseas education opportunities.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-orange-100">
        <h3 className="font-semibold text-lg text-teal-900">Career & Business</h3>
        <p>Insights on career growth, business opportunities, and more.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-pink-100">
        <h3 className="font-semibold text-lg text-teal-900">Love & Relationships</h3>
        <p>Solutions for love affairs, relationship dynamics, and harmony.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-blue-100">
        <h3 className="font-semibold text-lg text-teal-900">Marriage Compatibility</h3>
        <p>Assistance with love, arranged, and inter-caste marriages.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-green-100">
        <h3 className="font-semibold text-lg text-teal-900">Financial Stability</h3>
        <p>Strategies for wealth management and financial security.</p>
      </div>
      <div className="p-4 border rounded-md shadow-sm bg-purple-100">
        <h3 className="font-semibold text-lg text-teal-900">Health & Wellness</h3>
        <p>Guidance for mental and physical well-being.</p>
      </div>
    </div>
  </div>
</div>


        {/* FAQ Section */}
        {/* Call to Action Section */}
        <div className="bg-yellow-200 p-4 rounded-md mt-2">
          <p className="text-gray-700">
            To benefit from his globally acclaimed and effective astrology
            solutions for various life challenges, troubled or distressed
            individuals are encouraged to:
            <strong>
              <a
                href="tel:+91-95091-68369"
                className="text-blue-600 underline ml-1">
                +91-95091-68369
              </a>
            </strong>
            ; or share their concerns confidentially via email at:
            <strong>
              <a
                href="mailto:info@astrologerNikhilsharma.com"
                className="text-blue-600 underline ml-1">
                info@AstrologerNikhilSharma.com
              </a>
            </strong>
            .
          </p>
        </div>

        {/* Places Section */}
        <div className="bg-red-400 p-4 border-2 border-black m-2 rounded-lg">
          <ul className="grid custom-md:grid-cols-3 gap-4 text-center">
            {PlacesNames.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-white shadow-lg rounded-lg hover:bg-red-300">
                <Link to={item.pathName} className="text-black hover:underline">
                  {item.placeTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BestAstrologer;
