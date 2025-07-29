import SectionContainer from './SectionContainer.jsx';

    const SelectionPengalaman = () => {
    // Data pengalaman
        const experienceData = [
            {
                id: 1,
                type: "Workshop",
                title: "Workshop Programming 'Learn Flutter From Scratch'",
                organization: "Inatechno",
                description: "Participated in an intensive workshop held at Padang State Polytechnic, covering Flutter fundamentals, UI development, and state management, providing hands-on experience in mobile application creation.",
                icon: "fas fa-laptop-code",
                websiteLink: "https://inatechno.id/",
            },
            {
                id: 2,
                type: "Workshop",
                title: "Workshop Digital Entrepreneurship 'Roadshow 1000 Digital Startups x Padang Institute of Technology'",
                organization: "Kominfo",
                description: "Engaged in a comprehensive workshop held at Padang Institute of Technology (ITP), focusing on digital business models, startup ecosystem development, and innovation strategies for aspiring entrepreneurs.",
                icon: "fas fa-lightbulb",
                websiteLink: "https://www.komdigi.go.id/", 
            },
            {
                id: 3,
                type: "Course",
                title: "English Language Course 'OYISI Fighter - 3 Months Speaking Program'",
                organization: "Kampung Inggris",
                description: "Completed an intensive 3-month speaking program held at Oyisi (Jambi province branch), designed to enhance conversational fluency, pronunciation, and confidence in English communication.",
                icon: "fas fa-language",
                websiteLink: "https://www.kampunginggris.id/",
            },
            {
                id: 4,
                type: "Internship",
                title: "Internship at Mediatama Web",
                organization: "Mediatama Web",
                description: "Gained practical experience in web development, contributing to real-world projects and learning industry best practices in a professional environment, held at Mediatama Web Office.",
                icon: "fas fa-briefcase",
                websiteLink: "https://mediatamaweb.co.id",
                },
            {
                id: 5,
                type: "Campus Activity",
                title: "Active Member of HMTI Organization",
                organization: "HMTI (Informatics Engineering Student Association)",
                description: "Actively involved in HMTI, contributing to various student initiatives, academic events, and fostering a collaborative learning environment within the department.",
                icon: "fas fa-users",
            },
            {
                id: 6,
                type: "Campus Activity",
                title: "Committee Member in Several Events",
                organization: "Padang Institute of Technology",
                description: "Participated as a committee member in organizing and executing various campus events, developing strong organizational, teamwork, and problem-solving skills.",
                icon: "fas fa-calendar-check",
            },
            {
                id: 7,
                type: "Campus Activity",
                title: "Teaching Assistant for 'Operating Systems' Course",
                organization: "Padang Institute of Technology",
                description: "Served as a teaching assistant for the 'Operating Systems' course, providing support to students, assisting with practical sessions, and reinforcing theoretical concepts.",
                icon: "fas fa-chalkboard-teacher",
            },
        ];

    return (
        <section className="py-24 sm:py-32 px-20 bg-pattern-white-abstract bg-cover bg-center bg-fixed text-white relative overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
        >
        <SectionContainer>
            {/* Bagian Header */}
            <div className="text-center mb-16">
            <div className="relative inline-flex items-center mb-4">
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                    <span className="bg-soft-gold text-navy-dark text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                    My Experience
                    </span>
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
            </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                    Professional & Campus Journey
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    "A detailed look into my practical experiences, workshops, and campus engagements that have shaped my skills and professional growth."
                </p>
            </div>

            {/* Grid Kartu Pengalaman */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-x-12">
            {experienceData.map((item) => (
                <div
                key={item.id}
                className="bg-charcoal bg-opacity-90 p-8 rounded-lg shadow-xl w-full text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-start">
                <div className="flex items-center mb-4 w-full">
                    {/* Icon untuk jenis pengalaman */}
                    <div className="w-16 h-16 mr-4 rounded-full border-2 border-soft-gold p-1 flex-shrink-0 flex items-center justify-center text-soft-gold text-3xl">
                        <i className={item.icon}></i> 
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="text-soft-gold text-lg">{item.organization}</p>
                    </div>
                </div>

                <p className="text-gray-200 text-base leading-relaxed mb-4">{item.description}</p>

                {/* Link Maps, Website, dan Instagram */}
                <div className="flex justify-start space-x-4 mt-auto">
                    {item.mapsLink && (
                    <a
                        href={item.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-2xl"
                        title="View on Google Maps"
                    >
                        <i className="fas fa-map-marker-alt"></i>
                    </a>
                    )}
                    {item.websiteLink && (
                    <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-2xl"
                        title="Visit Website"
                    >
                        <i className="fas fa-globe"></i>
                    </a>
                    )}
                    {item.instagramLink && (
                    <a
                        href={item.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-2xl"
                        title="Visit Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    )}
                </div>
                </div>
            ))}
            </div>
        </SectionContainer>
        </section>
    );
    };

export default SelectionPengalaman;
