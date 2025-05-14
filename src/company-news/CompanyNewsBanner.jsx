import React from "react";
import BannerBg from "../assets/company-news/image1.png"; // Adjust path as needed

const CompanyNewsBanner = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center px-4 py-10">
      <div
        className="w-full max-w-[1150px] h-[300px] rounded-[20px] bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: `url(${BannerBg})`,
        }}
      >
        {/* Heading */}
        <h2
          className="font-poppins font-semibold text-[52px] leading-[100%] tracking-[0%] mb-4"
          style={{
            background:
              "linear-gradient(180deg, #281000 -59.46%, #C0971C 7.05%, #FFE976 69.64%, #C0971C 134.84%, #281000 201.35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Company News
        </h2>

        {/* Paragraph */}
        <p className="text-white text-[18px] font-poppins font-normal leading-[100%] max-w-[900px]">
          Stay informed with the latest news, important developments, and articles featuring Expert Emirates and its subsidiaries. Here, we share our journey, milestones, and insights to keep you up-to-date with the dynamic world of forex trading.
        </p>
      </div>
    </div>
  );
};

export default CompanyNewsBanner;
