import SectionContainer from './Selection/SectionContainer.jsx';

const AboutMeSection = () => {
    return (
        <section className="py-24 sm:py-8 px-20 bg-gray-100 relative overflow-hidden "
            data-aos="fade-up">
        <SectionContainer>

            {/* Bagian Header */}
            <div className="text-center mb-16">
            <div className="relative inline-flex items-center mb-6 py-9">
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                <span className="bg-soft-gold text-navy-dark text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                About Me
                </span>
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
            </div>

            {/* Judul dan Deskripsi */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                My Journey in Tech
            </h2>
            </div>

            {/* Bagian Konten Utama Project Teaser */}
            <div className="flex flex-col mx-0 lg:flex-row items-center justify-center gap-16 text-center lg:text-left">
            <div className="w-full lg:w-1/4 justify-center">
                <img
                src="/image/6.jpg"
                alt="Project Teaser"
                className="rounded-lg shadow-xl object-cover w-6 h-64 md:w-80 md:h-80 border-4 border-white transform hover:scale-105 transition duration-300 ease-in-out"
                />
            </div>

            <div className="w-full lg:w-1/2 ">
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    I am passionate about crafting beautiful and interactive web experiences that captivate users. With a strong foundation in front-end development and a keen eye for animation, I infuse creativity and technical skill into every project.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                        My approach harmonizes aesthetic design principles with cutting-edge technologies to build responsive, accessible, and high-performing applications that leave a lasting impression.
                </p>
                
            {/* Tombol Explore My Full Portfolio */}
                <a href="/Project"
                    className="inline-block px-7 py-3  bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300
                    transform hover:-translate-y-1">
                        Learn More
                </a>
            </div>
            </div>
        </SectionContainer>
        </section>
    );
};

export default AboutMeSection;

