import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import WelcomeBanner from "./WelcomeBanner";
import ButtonGroupSection from "./components/ButtonGroupSection";
import PricingPage from "./PricingPage";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen  bg-[#121117]">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <WelcomeBanner />
          <ButtonGroupSection />
        <PricingPage/>
        </main>
      </div>
    </div>
  );
}
