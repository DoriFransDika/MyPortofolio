import React from 'react';
import Body from "../component/Body.jsx"; 
import ProjectSection from "../component/ProjectSection.jsx"; 
import AboutMeSection from "../component/AboutMeSection.jsx"; 

const Home = () => {
  return (
    <div
      className="flex flex-col" 
      
      style={{
      }}
    >
      <section className="flex flex-col min-h-screen items-center justify-center bg-navy-dark text-white">
        <div className="w-full h-full flex items-center justify-center py-36 px-14"> {/* Pastikan padding ini cukup untuk menjauh dari Navbar */}
          <Body />
        </div>
      </section>
      <ProjectSection />
      <AboutMeSection />

    </div>
  );
};

export default Home;