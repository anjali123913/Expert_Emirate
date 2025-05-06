import arrowImg from "../../assets/arrow.png";

export default function CustomerDashboard() {
  return (
    <div className=" w-5/6 flex items-center justify-center gap-5 p-5 border-2 border-black rounded-2xl bg-black transition-all duration-300 group hover:border-yellow-500">
      <div className="w-1/2">
        <h1 className="text-start text-3xl my-2 font-extrabold text-white transition-all duration-300 group-hover:text-yellow-500">
          CUSTOMER DASHBOARD
        </h1>
        <p className="text-lg text-start my-3 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, enim
          debitis adipisci repellat vitae voluptatem, atque est magni rerum
          earum repudiandae pariatur dolor consectetur veniam eum amet incidunt
          omnis laboriosam.
        </p>

        <div className="flex items-center justify-start gap-20 mt-10 my-3 font-semibold text-lg">
          <button className="w-40 py-3 rounded-full border border-yellow-500 bg-yellow-500 text-black hover:text-white hover:bg-gray-950 transition-all duration-300">
            Contact Us
          </button>
          <button className="w-40 py-3 rounded-full border border-yellow-500 hover:bg-yellow-500 transition-all duration-300 text-white">
            Pricings
          </button>
        </div>
      </div>

      <div className="w-[370px] h-full">
        <img
          src={arrowImg}
          alt="Arrow image"
          className="w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}
