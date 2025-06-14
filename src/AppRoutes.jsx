import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/Home"));
const Career = lazy(() => import("./carrier/Career"));
const FaqSection = lazy(() => import("./faq/FaqSection"));
const EducationData = lazy(() => import("./education/EducationData"));
const AwardsSection = lazy(() => import("./forecastAwards/AwardsSection"));
const Support = lazy(() => import("./support/Support"));
const AboutUs = lazy(() => import("./about/AboutUs"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const CompanyNews = lazy(() => import("./company-news/CompanyNews"));
const Forex = lazy(() => import("./forex/Forex"));
const Gold = lazy(() => import("./gold/Gold"));
const CryptoCurrency = lazy(() => import("./crypto-currency/CryptoCurrency"));
const FundedAccounts = lazy(() => import("./funded-accounts/FundedAccounts"));
const TradingBot = lazy(() => import("./tradingBot/TradingBot"));
const Platform = lazy(() => import("./platformMT4/Platform"));
const PlatformMt5 = lazy(() => import("./PlatformMT5/PlatformMt5"));
const CopyTrading = lazy(() => import("./copytrading/CopyTrading"));
const LoginPage = lazy(() => import("./authPages/Login"));
const SignUp = lazy(() => import("./authPages/SignUp"));
const ForgotPassword = lazy(() => import("./authPages/ForgetPassword"));
const OtpVerificationPage = lazy(() => import("./authPages/OtpVerificationPage"));
const ResetPasswordPage = lazy(() => import("./authPages/ResetPasswordPage"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export default function AppRoutes() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <ScrollToTop />

      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/careers" element={<Career />} /> */}
          <Route path="/FAQ" element={<FaqSection />} />
          {/* <Route path="/Education" element={<EducationData />} /> */}
          <Route path="/Forecasts" element={<AwardsSection />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio-management" element={<Portfolio />} />
          <Route path="/company-news" element={<CompanyNews />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/cryptocurrency" element={<CryptoCurrency />} />
          <Route path="/funded-accounts" element={<FundedAccounts />} />
          <Route path="/trading-bot" element={<TradingBot />} />
          <Route path="/mt4-platform" element={<Platform />} />
          <Route path="/mt5-platform" element={<PlatformMt5 />} />
          <Route path="/copy-trading" element={<CopyTrading />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerificationPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}
