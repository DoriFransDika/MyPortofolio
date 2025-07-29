import React, { useEffect } from 'react';
import AOS from 'aos';

const BodyAbout = () => {
    useEffect(() => {
        AOS.init({
        duration: 1200,
        offset: 150,
        once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <main className="container mx-auto px-10 py-1 text-off-white font-inter">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Konten Teks About Me */}
            <div className="w-full lg:w-1/2 text-center lg:text-left ">
                <h3
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-xl md:text-2xl font-semibold text-gray-300 mb-2"
                >
                    My Story
                </h3>
                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
                    >
                    A Deep Dive into <span className="text-soft-gold">My Journey</span>
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                    className="text-base md:text-lg leading-relaxed text-gray-400 mb-6"
                    >
                    "My journey into the world of Information Technology began with a curious mind and a passion for problem-solving. From my early days exploring basic coding concepts to mastering complex frameworks, every step has been driven by a desire to create impactful digital solutions."
                </p>
                <p
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    className="text-base md:text-lg leading-relaxed text-gray-400 mb-6"
                    >
                    "I believe in continuous learning and adapting to new technologies. My portfolio reflects this dedication, showcasing not just what I've built, but how I've evolved as a developer and innovator."
                </p>
                <a
                    href="/doc/Cv_Dori_Frans_Dika.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    className="inline-block px-8 py-3 bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1 mt-6"
                    >   
                    Download My Resume
                </a>
            </div>

            {/* Bagian Foto */}
            <div className="w-full lg:w-1/2 flex justify-center p-4">
                <div className="grid grid-cols-2 gap-6 w-full max-w-lg relative">

                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-1 translate-x-1 -translate-y-1 hover:scale-105 transition duration-300 ease-in-out
                                animate__animated animate__zoomIn animate__delay-1s">
                    <img
                        src="/image/5.jpg"
                        alt="About Me Photo 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 -translate-x-1 translate-y-1 hover:scale-105 transition duration-300 ease-in-out 
                        animate__animated 
                        animate__zoomIn 
                        animate__delay-2s">
                        <img
                            src="/image/9.jpg"
                            alt="About Me Photo 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-2 -translate-x-1 translate-y-2 hover:scale-105 transition duration-300 ease-in-out animate__animated animate__zoomIn animate__delay-3s">
                        <img
                            src="/image/8.jpg"
                            alt="About Me Photo 3"
                            className="w-full h-full object-cover"
                        />

                    </div>
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 translate-x-1 -translate-y-2 hover:scale-105 transition duration-300 ease-in-out 
                        animate__animated 
                        animate__zoomIn 
                        animate__delay-4s">
                    <img
                        src="/image/11.jpg"
                        alt="About Me Photo 9"
                        className="w-full h-full object-cover"
                    />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:scale-110 transition duration-300 ease-in-out z-10 
                        animate__animated 
                        animate__zoomIn 
                        animate__delay-5s">
                    <img
                        src="/image/4.jpg"
                        alt="About Me Photo 5"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
};

export default BodyAbout;
