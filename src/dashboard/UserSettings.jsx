import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

export default function UserSettings() {
  const [formData, setFormData] = useState({
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    phone: "365-374-4961",
    address: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    country: "",
    state: "Chalandri",
    city: "Chalandri",
    zip: "22000",
    photo: null,
  });

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
    <div className="flex min-h-screen  bg-[#121117]">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <div className="min-h-screen bg-[#121117] text-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Setting</h2>
            <div className="flex gap-6">
              <div className="w-full max-w-xs text-center bg-[#1e1d24] p-4 rounded">
                <label htmlFor="photo-upload" className="block cursor-pointer">
                  <div className="w-32 h-32 mx-auto rounded-full bg-[#26242f] flex items-center justify-center relative overflow-hidden">
                    {formData.photo ? (
                      <img
                        src={formData.photo}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">
                        Update photo
                      </span>
                    )}
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/jpg,image/gif"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </div>
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Allowed *.jpeg, *.jpg, *.png, *.gif <br /> Max size of 3.1 MB
                </p>
                <button
                  onClick={handleDeleteUser}
                  className="bg-red-600 mt-4 px-4 py-2 rounded text-white text-sm"
                >
                  Delete user
                </button>
              </div>

              <div className="flex-1 bg-[#1e1d24] p-6 rounded grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <select
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="state"
                  placeholder="State/region"
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  className="bg-[#26242f] px-4 py-2 rounded text-white"
                  name="zip"
                  placeholder="Zip/code"
                  value={formData.zip}
                  onChange={handleChange}
                />

                <div className="col-span-1 sm:col-span-2 text-right">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300"
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
