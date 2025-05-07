// components/AwardsSection.jsx
// import trophyImage from '../assets/trophies.jpg'; // replace with your image
import medalImage from "../../assets/award1.png"; // replace with your image
import IndustryAwardsSection from "./IndustryAwardsSection";
import TopAwardsSection from "./TopAwardsSection";

const AwardsSection = () => {
  return (
    <section className="bg-[#111111] text-white px-4 py-16 flex items-center justify-center gap-5 
     mx-auto">
     
      

      

       
      
      <TopAwardsSection />
      <IndustryAwardsSection/>
    </section>
  );
};

export default AwardsSection;
