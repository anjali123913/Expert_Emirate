import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function ButtonGroupSection({clicked,setClicked}) {
  // const [eText, setEText] = useState("Forex + Gold");

  return (
    <div className="flex gap-10 flex-wrap items-center justify-center">
      <ToggleButton
        text="Forex + Gold"
        clicked={clicked}
        setClicked={setClicked}
        eText="forex"
        // setEText={setEText}
      />
      <ToggleButton
        text="Crypto"
        clicked={clicked}
        setClicked={setClicked}
        eText="crypto"
        // setEText={setEText}
      />
      <ToggleButton
        text="Portfolio Management"
        clicked={clicked}
        setClicked={setClicked}
        eText="portfolio"
        // setEText={setEText}
      />
      
    </div>
  );
}
