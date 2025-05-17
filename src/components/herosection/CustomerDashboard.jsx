import arrowImg from "../../assets/arrow.png";

export default function CustomerDashboard() {
  return (
    <div className="group w-2/3 flex items-center justify-center gap-5 px-5 py-6 border border-gray-900 border-l-gray-800 border-t-gray-800 border-b-gray-800  rounded-3xl transition-all duration-500 relative  hover:border-t hover:border-l hover:border-b hover:border-r hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-b-yellow-600 hover:border-r-yellow-700 "
 
  style={{
    background: "linear-gradient(283.02deg, rgba(243, 205, 1, 0.07) 0.62%, rgba(13, 12, 19, 0.2) 99.27%)",
     border: 'linear-gradient(104.56deg, #1D1B25 1.25%, #000000 100%)',
    borderRadius: '20px',
  }}>
      {/* LEFT CONTENT */}
      <div className="w-2/3">
        {/* HEADING - 3 part */}
        <h1 className="text-3xl font-bold text-start group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-yellow-400 group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent">
          CUSTOMER DASHBOARD
        </h1>

        {/* Description */}
        <p className="text-lg text-start my-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, enim
          debitis adipisci repellat vitae voluptatem, atque est magni rerum
          earum repudiandae pariatur dolor consectetur veniam eum amet incidunt
          omnis laboriosam.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-start gap-10 mt-10 my-3 font-semibold text-lg">
          {/* Left Button - Contact Us */}
          <button className="group/contact   w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500  text-white transition-all duration-500  hover:text-black hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06]  hover:bg-black  px-7   ">
            Contact Us
          </button>

          {/* Right Button - Pricings */}
          <button className="group/pricing w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500 bg-black text-white transition-all duration-500  hover:text-black hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06]   px-7   ">
            Pricing
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="w-[370px] h-full">
        <img
          src={arrowImg}
          alt="Arrow image"
          className="w-full h-full transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
