import SectionContainer from '../component/Selection/SectionContainer.jsx';// Pastikan SectionContainer sudah ada

const Project = () => {
  // Data proyek
  const projectData = [
      {
        id: 1,
        title: "Business Card Printing Application",
        description: "A desktop application designed for efficient and customizable business card printing, streamlining the design and output process.",
        image: "/image/nma.png", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["C#", "Windows Forms", "Database"], // Contoh teknologi
        demoLink: "https://8kgkw7.csb.app/", // Link ke demo langsung (jika ada)
      },
      {
        id: 2,
        title: "HTML, CSS, JS Learning Website",
        description: "An interactive web platform dedicated to teaching fundamental concepts of HTML, CSS, and JavaScript through engaging lessons and examples.",
        image: "/image/cobar.png", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        demoLink: "https://lw8722.csb.app/",
      },
      {
        id: 3,
        title: "Flood-Prone Area Map Application (Padang City)",
        description: "A mapping application visualizing flood-prone areas in Padang City, providing critical information for disaster preparedness and urban planning.",
        image: "/image/rawn.png", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["GIS", "Mapping API", "Data Visualization"],
        demoLink: "https://dorifransdika.github.io/Sig_Aplikasi_Peta_Rawan_Banjir_kota_padang/",
      },
      {
        id: 4,
        title: "Laptop Recommendation Application",
        description: "An intelligent application that recommends laptops based on user preferences, budget, and specific usage requirements.",
        image: "/image/spk.png", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["Python", "Machine Learning", "Web App"],
        demoLink: "https://spk-app-omega.vercel.app/",
      },
      {
        id: 5,
        title: "Earthquake-Prone Map Application (Padang Panjang & Tanah Datar)",
        description: "A geographical information system (GIS) application identifying earthquake-prone zones in Padang Panjang and Tanah Datar regions for risk assessment.",
        image: "/image/sig.png", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["GIS", "Mapping API", "Geospatial Data"],
        demoLink: "https://sig-rawan-gempa.vercel.app/",
      },
      {
        id: 6,
        title: "Article Data Management Application",
        description: "A comprehensive system for managing, organizing, and retrieving article data, designed for efficient content administration and access.",
        image: "/image/project-thumbnails/article-manager.jpg", // GANTI dengan gambar/thumbnail proyek Anda
        technologies: ["PHP", "MySQL", "CRUD Operations"],
        demoLink: "#",
      },
  ];

  return (
    // Bagian section dengan background dan warna teks sesuai tema
    <section className="py-24 sm:py-8 px-20 bg-navy-dark text-white relative overflow-hidden">
      <SectionContainer>
        {/* Bagian Header */}
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center mb-4
                          animate__animated
                          animate__rubberBand">
            <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
              <span className="text-soft-gold text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                My Projects
              </span>
            <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight
                          animate__animated
                          animate__bounceInRight
                          animate__delay-1s">
            Showcase of Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed
                        animate__animated
                        animate__bounceInRight
                        animate__delay-2s">
            "Explore a collection of my diverse projects, demonstrating my skills in various domains of IT and web development. Each project is a testament to my dedication and problem-solving abilities."
          </p>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="3000">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-charcoal bg-opacity-90 p-6 rounded-lg shadow-xl w-full text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-start"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">{project.description}</p>

              {/* Teknologi yang Digunakan (Badges) */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Link Proyek */}
              <div className="flex justify-start space-x-4 mt-auto w-full
                              animate__animated
                              animate__bounceInRight
                              animate__delay-2s">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-soft-gold hover:text-pale-gold transition-colors duration-300 text-lg font-medium">
                    <i className="fas fa-external-link-alt mr-2"></i> 
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
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

export default Project;
