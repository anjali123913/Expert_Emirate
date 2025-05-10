import React from 'react';
import whatsappIcon from '../assets/support/whatsapp.png';
import phoneIcon from '../assets/support/call.png';
import headsetIcon from '../assets/support/headphone.png';
import videoIcon from '../assets/support/video.png';
import calendarIcon from '../assets/support/calendar.png';

const supportData = [
  {
    icon: whatsappIcon,
    title: 'WhatsApp Support – Quick & Easy!',
    desc: 'Get real-time support directly on WhatsApp. No wait times, just instant solutions!',
  },
  {
    icon: phoneIcon,
    title: 'One-Tap Call Back – No Waiting!',
    desc: 'Fill out a short form, and we’ll call you at your preferred time. You choose when!',
  },
  {
    icon: headsetIcon,
    title: '24/7 Instant Call Support – No Holds, No Hassle!',
    desc: 'Talk to our experts directly, day or night. We ensure ZERO hold time!',
  },
  {
    icon: videoIcon,
    title: 'Video Call Consultation – Face-to-Face Support!',
    desc: 'Schedule a video call with our experts for a live walkthrough of our services and solutions.',
  },
  {
    icon: calendarIcon,
    title: 'Book an Expert Session – Get a 1-on-1 Consultation!',
    desc: 'Need tailored advice? Book a session with one of our professionals at your convenience.',
  },
];

const SupportOptions = () => {
  return (
    <section className="bg-black text-white py-20 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
        {/* First Row - 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
          {supportData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative bg-[#1B1B2F] text-center rounded-xl p-6 border border-yellow-500 shadow-md w-full md:w-1/2"
            >
              <img
                src={item.icon}
                alt="support-icon"
                className="w-12 h-12 mx-auto -mt-10 mb-4"
                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))' }}
              />
              <h3 className="text-[14px] font-normal leading-tight tracking-[0.12em] text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-[14px] font-normal leading-tight tracking-[0.12em] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 w-full">
          {supportData.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="relative bg-[#1B1B2F] text-center rounded-xl p-6 border border-yellow-500 shadow-md w-full md:w-[calc(33.333%-1rem)]"
            >
              <img
                src={item.icon}
                alt="support-icon"
                className="w-12 h-12 mx-auto -mt-10 mb-4"
                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.4))' }}
              />
              <h3 className="text-[14px] font-normal leading-tight tracking-[0.12em] text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-[14px] font-normal leading-tight tracking-[0.12em] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
