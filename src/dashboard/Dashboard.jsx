import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import DashHome from './components/DashHome';
import WelcomeBanner from './WelcomeBanner';

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
          <WelcomeBanner/>
        </main>
      </div>
    </div>
  );
}
