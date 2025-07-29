import SectionContainer from './SectionContainer.jsx'; // Pastikan SectionContainer sudah ada

const SelectionPendidikan = () => {
  // Data pendidikan
    const educationData = [
      {
        id: 1,
        years: "2022 - Present",
        institution: "Padang Institute of Technology (ITP)",
        degree: "Major: Information Technology",
        description: "At the Padang Institute of Technology, I delve into the world of Information Technology, deepening my knowledge of IT and its applications in the current digital era. I strive to combine theory and practice to prepare myself as a competent and innovative professional.",
        logo: "/image/logo_itp.png",
        mapsLink: "https://www.google.com/maps?ll=-0.899861,100.363257&z=16&t=m&hl=id&gl=ID&mapclient=embed&cid=8396328501859517192", 
        websiteLink: "https://www.itp.ac.id/", 
        instagramLink: "https://www.instagram.com/itp_official/", 
      },
      {
        id: 2,
        years: "2018 - 2021",
        institution: "SMA Negeri 2 Kota Sungai Penuh",
        degree: "High School Diploma (Mathematics and Natural Sciences)",
        description: "During three years at SMA Negeri 2 Kota Sungai Penuh, I focused on reasoning in Mathematics and Natural Sciences. This education provided me with opportunities to develop analytical skills, logical reasoning, and mastery of basic scientific concepts.",
        logo: "/image/12.jpeg", 
        mapsLink: "https://www.google.co.id/maps/place/Senior+High+School+State+2+of+Sungai+Penuh/@-2.0758313,101.4017339,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2da1a865f4a511:0xc82b5aaad755934c!8m2!3d-2.0758367!4d101.4043088!16s%2Fg%2F11bymyv7cd?entry=ttu", // GANTI DENGAN LINK GOOGLE MAPS SMA 2 ANDA
        websiteLink: "https://sman2sungaipenuh.sch.id/", 
        instagramLink: "https://www.instagram.com/sman2sp_official/", 
      },
      {
        id: 3,
        years: "2015 - 2018",
        institution: "SMP Negeri 2 Kota Sungai Penuh",
        degree: "Junior High School Certificate",
        description: "During my junior high school education at SMP Negeri 2 Kota Sungai Penuh, I gained a strong educational foundation. Besides academic knowledge, I was also trained to work in teams, communicate effectively, and develop important interpersonal skills crucial in the professional world.",
        logo: "/image/smp2.jpg", 
        mapsLink: "https://www.google.co.id/maps/place/Junior+High+School+State+2+of+Sungai+Penuh/@-2.0656838,101.3900369,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2da1a67642f333:0x5839e8e794e60395!8m2!3d-2.0656892!4d101.3926118!16s%2Fg%2F1hm1r7kql?entry=ttu", // GANTI DENGAN LINK GOOGLE MAPS SMP 2 ANDA
        instagramLink: "https://www.instagram.com/smpn2sungaipenuh/", 
      },
      {
        id: 4,
        years: "2009 - 2015",
        institution: "SDN 004XI Pelayang Raya",
        degree: "Primary School Certificate",
        description: "My primary education at SDN 004XI Pelayang Raya laid the foundation for my academic and personal development. Here, I was introduced to basic educational values and given the opportunity to develop my interests and talents in a conducive learning environment.",
        logo: "/image/logo_sd.png", 
        mapsLink: "https://www.google.co.id/maps/place/SDN+004%2FXI+Sungai+Penuh/@-2.0657024,101.3881798,17z/data=!3m1!4b1!4m6!3m5!1s0x2e2da1aaf245397b:0x4319e71555d9fad!8m2!3d-2.0657078!4d101.3907547!16s%2Fg%2F11cjnnzhn2?entry=ttu", // GANTI DENGAN LINK GOOGLE MAPS SDN 004XI ANDA
        instagramLink: "",
      },
    ];

  return (
    <section className="py-24 sm:py-32 px-20 bg-pattern-white-abstract bg-cover bg-center bg-fixed text-white relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000">
      <SectionContainer>

        {/* Bagian Header */}
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center mb-4">
            <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
              <span className="bg-soft-gold text-navy-dark text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                Education Journey
              </span>
            <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
          </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 leading-tight">
                My Learning Path
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                "Explore my academic journey and the foundational knowledge that shaped my path in technology."
              </p>
        </div>

        {/* Grid Kartu Pendidikan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-x-12">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-navy-dark bg-opacity-90 p-8 rounded-lg shadow-xl w-full text-left transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-start">
              <div className="flex items-center mb-4 w-full">
                <img
                  src={item.logo}
                  alt={`${item.institution} Logo`}
                  className="w-16 h-16 mr-4 rounded-full border-2 border-soft-gold p-1 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-white">{item.institution}</h3>
                  <p className="text-soft-gold text-lg">{item.degree}</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">{item.years}</p>
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

export default SelectionPendidikan;
