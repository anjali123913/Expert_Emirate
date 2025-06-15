// pages/PricingPage.jsx
import React, { useState } from "react";
import PricingSection from "./components/PricingSection";

export default function PricingPage() {
  const [clicked, setClicked] = useState("forex");
  const [eText, setEText] = useState("FOREX");

  return (
    <div className="min-h-screen bg-black text-white">
      <PricingSection
        clicked={clicked}
        setClicked={setClicked}
        text={eText}
        setEText={setEText}
      />
    </div>
  );
}
