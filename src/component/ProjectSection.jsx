// src/components/ProjectSection.jsx
import React from 'react';
import SectionContainer from './Selection/SectionContainer.jsx';

const ProjectSection = () => {
    return (
        <section className="flex flex-col min-h-screen bg-pattern-white-abstract bg-cover bg-center bg-fixed"
        data-aos="fade-up"
        data-aos-duration="1000">
        <SectionContainer>
            {/* Header Section (mengikuti gaya AboutMeSection) */}
            <div className="text-center mb-16">
            <div className="relative inline-flex items-center mb-4 py-9">
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                <span className="bg-soft-gold text-navy-dark text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                My Portfolio
                </span>
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                A Glimpse of My Work
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                "Step into my world of creative web solutions. This section offers a brief overview of my diverse projects and the passion I pour into every line of code. Ready to explore what I've built?"
            </p>
            </div>

            {/* Bagian Konten Utama Project Teaser: Satu Paragraf dan Gambar */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">
            {/* Gambar Ilustrasi/Teaser Project */}
            <div className="w-full lg:w-1/4 flex justify-center">
                <img
                src="/image/8.png" 
                alt="Project Teaser"
                className="w-full max-w-md h-auto rounded-lg shadow-xl border-4 border-white object-cover"
                />
            </div>

            <div className="w-full lg:w-1/2">
                <p className="text-xl md:text-2xl font-semibold text-charcoal mb-6">
                "Discover the highlights of my journey in web development, from innovative concepts to polished applications. Each project reflects my commitment to crafting exceptional digital experiences."
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Here, you'll find a concise overview of my key creations, showcasing my skills in frontend and backend development, UI/UX design, and problem-solving. Ready to dive deeper?
                </p>
                <a
                href="/Project" // <--- Ini yang membuat link mengarah ke /About
                className="inline-block px-8 py-3 bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1"
                >
                Explore My Full Portfolio
            </a>
            </div>
            </div>

        </SectionContainer>
        </section>
    );
    };

export default ProjectSection;