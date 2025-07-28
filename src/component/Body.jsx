import SosialMedia from './SosialMedia';
import { BorderBeam } from "@stianlarsen/border-beam";

const Body = () => {
  return (
    <main className="container mx-auto px-10 py-1 text-off-white font-inter">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          {/* Bagian Selamat Datang */}
          <div className='animate__animated
                          animate__swing
                          animation-duration: 1s'>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2 ">Welcome to My Website</h3>
          </div>

          {/* Bagian Nama */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            <div className='animate__animated animate__backInLeft animate__delay-1s animation-duration: 0.3s'>
              <span className="text-soft-gold text-8xl ">I'm</span>
              <span className="block text-white md:text- mt-2">Dori Frans Dika</span>
            </div>
          </h1>

          {/* Bagian Deskripsi */}
          <p className="text-base md:text-lg leading-relaxed text-gray-400 mb-6
                        animate__animated
                        animate__bounceInRight
                        animate__delay-2s">
            "I am a passionate and creative Information Technology student. I am ready to explore the world of technology and create inspiring innovations. Welcome to my domain of creative codes and revolutionary ideas, where the future is being built, one line at a time."
          </p>
          {/* Bagian Sosial Media */}
            <SosialMedia
              containerClassName="flex justify-center lg:justify-start space-x-6 mt-6
                                  animate__animated
                                  animate__fadeInLeft
                                  animate__delay-3s "
              iconColorClassName="text-white hover:text-soft-gold text-3xl"
          />
        </div>

          {/* Bagian Gambar Profil */}
        <div style={{ position: "relative", width: "300px", height: "300px" }}>
          <BorderBeam size={600} duration={10} />
            <img
              src="/image/1.jpg"
              alt="Profile 1"
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </main>
  );
};

export default Body;
