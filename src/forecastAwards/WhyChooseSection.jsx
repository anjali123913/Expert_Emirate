import React from "react";
import mobileImage from "../assets/awards/mobile-ui.png";

const WhyChooseSection = () => {
  return (
    <section className="bg-black text-white px-4 py-12 md:py-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[40px] sm:text-[52px] font-bold text-center mb-12 bg-gradient-to-br from-[#281000] via-[#FFE976] to-[#281000] text-transparent bg-clip-text leading-none">
          Why Choose Expert Emirates?
        </h2>

        {/* Proven Track Record */}
        <div
          className="flex flex-col lg:flex-row bg-[#1A1A1A] rounded-xl p-6 lg:p-10 items-center justify-between gap-8"
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(281.33deg, #000000 0%, #3C3A44 100%)",
            borderImageSlice: 1,
          }}
        >
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-left mb-4 bg-gradient-to-r from-[#281000] via-[#FFE976] to-[#281000] text-transparent bg-clip-text">
              Proven Track Record:
            </h3>
            <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line">
              With over 7 years of experience,\n
              our consistent recognition by leading industry awards\n
              is a testament to our commitment to excellence.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-sm mx-auto">
            <img src={mobileImage} alt="Mobile UI" className="w-full" />
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Feature 1 */}
          <div className="bg-[#121117] rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-lg bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text mb-2">
              Innovative Technology
            </h4>
            <p className="text-gray-400 text-sm">
              We continuously invest in cutting-edge technology to provide you
              with the best trading tools and platforms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#121117] rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-lg bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text mb-2">
              Customer-Centric Approach
            </h4>
            <p className="text-gray-400 text-sm">
              Our focus on customer satisfaction is reflected in the numerous
              awards we have received for our exceptional service.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#121117] rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-lg bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text mb-2">
              Regulatory Compliance
            </h4>
            <p className="text-gray-400 text-sm">
              We adhere to the highest standards of regulatory compliance to
              ensure the security and integrity of your investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
