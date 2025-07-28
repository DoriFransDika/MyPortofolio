import React from 'react';
import SectionContainer from './Selection/SectionContainer.jsx';

const AboutMeSection = () => {
    return (
        <section className="py-24 sm:py-32 px-16 bg-gray-50 relative overflow-hidden "
                data-aos="fade-up"
                data-aos-duration="1000">
            <SectionContainer>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Bagian Gambar Profil */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start mb-10 lg:mb-0">
                <img
                    src="/image/6.jpg"
                    alt="Dori Frans Dika - Profile"
                    className="rounded-lg shadow-xl object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-white transform hover:scale-105 transition duration-300 ease-in-out"
                />
            </div>

            {/* Bagian Konten Teks */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
                <div className="relative inline-flex items-center mb-4">
                        <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                    <span className="bg-soft-gold text-navy-dark text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                        About Me
                    </span>
                        <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
                </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                        My Journey in Tech
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                        I am passionate about crafting beautiful and interactive web experiences that captivate users. With a strong foundation in front-end development and a keen eye for animation, I infuse creativity and technical skill into every project.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                        My approach harmonizes aesthetic design principles with cutting-edge technologies to build responsive, accessible, and high-performing applications that leave a lasting impression.
                    </p>

                {/* Tombol Learn More */}
                <a
                    href="/About"
                    className="inline-block px-8 py-3 bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1"
                    >
                Learn More
                </a>
            </div>
            </div>
        </SectionContainer>
        </section>
        );
    };

export default AboutMeSection;
