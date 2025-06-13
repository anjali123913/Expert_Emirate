import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ForexGoldInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3 sm:gap-4 md:gap-6">
          {[{ label: "FOREX", path: "/forex" }, { label: "GOLD", path: "/gold" }].map(
            (tab) => {
              const isActive = currentPath === tab.path;
              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`min-w-[140px] sm:min-w-[160px] md:min-w-[180px] h-[50px] px-5 py-[10px] rounded-[90px]
                    text-sm sm:text-base font-semibold font-poppins transition duration-300 text-center
                    ${
                      isActive
                        ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_4px_15px_rgba(255,215,0,0.3)]"
                        : "text-white bg-[#1a1a1a]"
                    }
                    hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] hover:text-black
                  `}
                >
                  {tab.label}
                </button>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ForexGoldInfo;
