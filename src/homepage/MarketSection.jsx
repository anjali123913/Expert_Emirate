export default function MarketSection() {
  return (
    <section className="bg-black text-white w-full px-4 sm:px-6 lg:px-8 py-16 text-center font-[Poppins]">
      {/* Button */}
      <div className="mb-6">
        <button className="px-6 py-2 rounded-full border border-[#403411] text-sm tracking-wide text-white bg-transparent hover:bg-[#1b1b1b] transition duration-300 shadow-md">
          Our Products
        </button>
      </div>

      {/* Main Heading */}
      <h1 className="text-[32px] leading-[42px] font-medium text-white mb-6 tracking-[0.05em]">
        Your Gateway to{" "}
        <span className="text-[32px] leading-[42px] font-bold tracking-[0.05em] bg-gradient-to-r from-[#e3c66d] to-[#c59e28] bg-clip-text text-transparent font-[Poppins]">
          Global Financial Markets
        </span>
      </h1>

      {/* Paragraph */}
      <p className="text-[18px] leading-[32px] max-w-4xl mx-auto text-gray-300 tracking-[0.03em]">
        Step into the world of professional trading with our comprehensive suite of financial services. 
        We combine cutting-edge technology with expert market knowledge to give you an edge in today’s dynamic markets.
      </p>
    </section>
  );
}
