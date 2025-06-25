import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import { MdSpaceDashboard, MdEmail } from "react-icons/md";
import { FiShare2, FiKey, FiCamera } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  FaUser,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdBusiness } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("General");

  const [formData, setFormData] = useState({
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    phone: "365-374-4961",
    address: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    country: "India",
    state: "Chalandri",
    city: "Chalandri",
    zip: "22000",
    photo: null,
  });

  const tabs = [
    { label: "General", icon: <MdSpaceDashboard /> },
    { label: "Social links", icon: <FiShare2 /> },
    { label: "Security", icon: <FiKey /> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    alert("Changes saved!");
  };

  const handleDeleteUser = () => {
    alert("User deleted!");
  };

  return (
    <div className="flex min-h-screen bg-[#121117] text-white">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-4">
          <div className="min-h-screen bg-[#121117] p-2 sm:p-6">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-[#29272e] mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`relative flex items-center gap-2 py-2 text-sm transition font-medium tracking-wide ${
                    activeTab === tab.label ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                  {activeTab === tab.label && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-800 via-yellow-300 to-yellow-800 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Profile Photo Card */}
              <div className="w-full lg:max-w-xs text-center bg-black p-6 rounded-xl">
                <label htmlFor="photo-upload" className="block cursor-pointer">
                  <div className="w-32 h-32 mx-auto rounded-full bg-[#26242f] border border-gray-500 flex items-center justify-center relative overflow-hidden">
                    {formData.photo ? (
                      <img
                        src={formData.photo}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/default-avatar.png"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <FiCamera className="text-white text-xl" />
                    </div>
                  </div>
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                <p className="text-xs text-gray-500 mt-3">
                  Allowed *.jpeg, *.jpg, *.png, *.gif <br /> Max size of 3.1 MB
                </p>
                <button
                  onClick={handleDeleteUser}
                  className="bg-[#2a1212] hover:bg-red-700 mt-4 px-4 py-2 rounded text-white text-sm flex items-center justify-center gap-2"
                >
                  <RiDeleteBin6Line /> Delete user
                </button>
              </div>

              {/* Form Inputs */}
              <div className="flex-1 bg-black p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Name", icon: <FaUser /> },
                  { name: "email", placeholder: "Email", icon: <MdEmail /> },
                  { name: "phone", placeholder: "Phone number", icon: <BsTelephoneFill /> },
                  { name: "address", placeholder: "Address", icon: <FaHome /> },
                  { name: "country", placeholder: "Country", icon: <FaGlobe /> },
                  { name: "state", placeholder: "State/region", icon: <FaMapMarkerAlt /> },
                  { name: "city", placeholder: "City", icon: <IoMdBusiness /> },
                  { name: "zip", placeholder: "Zip/code", icon: <BiSolidMap /> },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      className="bg-[#26242f] px-10 py-2 rounded w-full text-white placeholder-gray-400"
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                      {field.icon}
                    </div>
                  </div>
                ))}

                {/* Save Button */}
                <div className="col-span-1 sm:col-span-2 text-right">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-[#281000] via-[#C0971C] to-[#281000] text-black px-6 py-2 text-sm sm:text-base rounded-full shadow-md hover:opacity-90 transition-all duration-300"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
