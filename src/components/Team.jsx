import React from 'react';
import ayobami from '../assets/ayobami.png';
import bamidele from '../assets/bamidele.png';
import chima from '../assets/chima.png';
import fawaz from '../assets/fawaz.png';
import iyanu from '../assets/iyanu.png';
import deke from '../assets/deke.png';
import obinna from '../assets/obinna.png';
import fego from '../assets/fego.png';
import toch from '../assets/toch.png';
import shittu from '../assets/shittu.png';

// --- Team Data (Replace imageSrc paths with your actual image URLs) ---
const executiveTeamData = [
  { 
    name: "Moradeke Akintola", 
    title: "Business Director, Platforms", 
    imageSrc: deke 
  },
  { 
    name: "Bamidele Ojekunle", 
    title: "Head, Software Development", 
    imageSrc: bamidele
  },
];

const productTeamData = [
  { name: "Tochukwu Mgbemena", title: "Product and Operation Lead", imageSrc: toch },
  { name: "OgheneFego Ogbegiwa", title: "Product Manager", imageSrc: fego },
  { name: "Ayobami Awoyelu", title: "Product Designer", imageSrc: ayobami },
  { name: "Fawwaz Alli-Balogun", title: "Product Designer", imageSrc: fawaz },
  { name: "Iyanuoluwa Opadotun", title: "Developer", imageSrc: iyanu },
  { name: "Obinna Opara", title: "Developer", imageSrc: obinna },
  { name: "Chima Durumetu", title: "Software Tester", imageSrc: chima },
  { name: "Olanrewaju Shittu", title: "Developer", imageSrc: shittu},
];

// --- Helper Component for Executive Card (2 columns) ---
const ExecutiveCard = ({ name, title, imageSrc }) => (
    <div className="w-full sm:w-1/2 flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200">
        {/* Image Container with Blue Background */}
        <div className="">
            <img 
                src={imageSrc} 
                alt={name} 
                className="w-full h-auto object-cover"
            />
        </div>
        {/* Text Details */}
        <div className="p-4 text-center border-[#3F76FF80]">
            <p className="text-[18px] font-semibold text-[#5C5C5C]">{name}</p>
            <p className="text-[14px] text-[#596780]">{title}</p>
        </div>
    </div>
);

// --- Helper Component for Product Team Card (4 columns) ---
const TeamMemberCard = ({ name, title, imageSrc }) => (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden text-center">
        {/* Image Container with Blue Background */}
        <div className="">
            <img 
                src={imageSrc} 
                alt={name} 
                className="w-full h-auto object-cover"
            />
        </div>
        {/* Text Details */}
        <div className="p-4">
            <p className="text-[18px] font-semibold text-[#5C5C5C]">{name}</p>
            <p className="text-[14px] text-[#596780]">{title}</p>
        </div>
    </div>
);


// --- Main Team Section Component ---
const AmazingTeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-[121px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Text Block */}
        <div className="flex flex-col lg:flex-row justify-between gap-[274.21px] mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-[54px] font-medium text-[#03045E] leading-tight tracking-tighter mb-4">
              Amazing Team <br />
              Behind Fifthlab
            </h2>
          </div>
          <div className="lg:w-2/3 flex items-start">
            <p className="text-[18px] text-[#596780] max-w-xl">
              Our team consists of a group of talented and creative people who 
              work hard to solve real problems and change how people live and 
              work. We’re big enough to handle most challenges and small 
              enough to care.
            </p>
          </div>
        </div>

        {/* --- Our Executive Section --- */}
        <h3 className="text-[36px] font-medium text-[#03045E] mb-5">
            Our Executive
        </h3>
        
        {/* Executive Cards Layout: 2 columns on small screens, side-by-side flex */}
        <div className="flex flex-col sm:flex-row gap-12 mb-12 max-w-lg">
            {executiveTeamData.map((member, index) => (
                <ExecutiveCard 
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageSrc={member.imageSrc}
                />
            ))}
        </div>
        
        {/* --- Our Product Team Section --- */}
        <h3 className="text-[36px] font-medium text-[#03045E] mb-5">
            Our Product Team
        </h3>
        
        {/* Product Team Grid: 2 columns, then 3, then 4 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productTeamData.map((member, index) => (
                <TeamMemberCard 
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageSrc={member.imageSrc}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default AmazingTeamSection;