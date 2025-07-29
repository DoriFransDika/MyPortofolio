import SectionContainer from './SectionContainer.jsx';

const SelectionSkill = () => {
  // Data skill dengan kategori
    const skillData = [
      { id: 1, name: "UI/UX Design", category: "Design" },
      { id: 2, name: "React", category: "Frontend" },
      { id: 3, name: "JavaScript", category: "Frontend" },
      { id: 4, name: "CSS/SCSS", category: "Frontend" },
      { id: 5, name: "Figma", category: "Design" },
      { id: 6, name: "Laravel", category: "Frontend" },
      { id: 7, name: "Python", category: "Backend" },
      { id: 8, name: "C", category: "Backend" },
      { id: 9, name: "C++", category: "Backend" },
      { id: 10, name: "HTML", category: "Frontend" },
      { id: 11, name: "MySQL", category: "Database" },
      { id: 12, name: "PHP", category: "Backend" },
      { id: 13, name: "React Vite", category: "Frontend" },
      { id: 14, name: "React Bootstrap", category: "Frontend" },
      { id: 15, name: "Tailwind CSS", category: "Frontend" },
      { id: 16, name: "Canva", category: "Design" },
      { id: 17, name: "Teamwork", category: "Soft Skills" },
      { id: 18, name: "Leadership", category: "Soft Skills" },
      { id: 19, name: "Creative", category: "Soft Skills" },
      { id: 20, name: "Discipline", category: "Soft Skills" },
      { id: 21, name: "Problem Solving", category: "Soft Skills" },
      { id: 22, name: "Communication", category: "Soft Skills" },
      { id: 23, name: "Adaptability", category: "Soft Skills" },
      { id: 24, name: "Time Management", category: "Soft Skills" },
    ];

  return (
    // Bagian section
    <section className="py-24 sm:py-32 px-20 bg-navy-dark text-white relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000">
        <SectionContainer>
          {/* Bagian Header */}
          <div className="text-center mb-16">
            <div className="relative inline-flex items-center mb-4">
              <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                <span className="text-soft-gold text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                  My Expertise
                </span>
              <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
            </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Skills & Tools
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  "A comprehensive overview of my technical proficiencies and soft skills, showcasing the tools and abilities I bring to every project."
              </p>
          </div>

          {/* Grid Skill */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
            {skillData.map((skill) => (
              <div
                key={skill.id}
                className="bg-charcoal bg-opacity-90 p-6 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center justify-center h-full">
                  
                {/* Menampilkan nama skill dan kategori */}
                <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
      </SectionContainer>
    </section>
  );
};

export default SelectionSkill;
