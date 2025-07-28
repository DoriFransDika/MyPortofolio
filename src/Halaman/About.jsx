import BodyAbout from "../component/BodyAbout.jsx";
import SelectionPendidikan from "../component/Selection/SelectionPendidikan.jsx";
import SelectionSkill from "../component/Selection/SelectionSkill.jsx";
import SelectionPengalaman from "../component/Selection/SelectionPengalaman.jsx";

const About = () => {
  return (
    <div
      className="flex flex-col" 
      style={{
      }}
    >
      <section className="flex flex-col min-h-screen items-center justify-center bg-navy-dark text-white">
        <div className="w-full h-full flex items-center justify-center py-36 px-14">
          <BodyAbout />
        </div>
      </section>
      
            <SelectionPendidikan />
            <SelectionSkill />
            <SelectionPengalaman />
            
    </div>
  );
};
export default About;