// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out
    ${isActive
      ? 'text-soft-gold' // Dulu 'bg-gray-700 text-white'. Sekarang hanya warna teks.
      : 'text-gray-300 hover:text-white'
    }`;

const handleTranslateClick = () => {
if (window.google && window.google.translate && document.querySelector('.goog-te-combo')) {
      // Jika widget sudah ada, kita bisa memicu klik pada dropdown bahasa
      // Ini adalah hack, mungkin tidak selalu stabil
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = 'id'; // Ganti 'id' dengan kode bahasa yang Anda inginkan
        selectElement.dispatchEvent(new Event('change'));
      }
    } else {
      // Fallback jika widget belum dimuat atau tidak ditemukan
      alert("Google Translate widget not fully loaded. Please try again.");
    }
  };

  return (
    <nav className="bg-navy-dark p-4 shadow-md w-full"> {/* Gunakan warna baru untuk navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center space-x-3">
          <img
            src="/image/3.jpg"
            alt="Dori Frans Dika"
            className="w-10 h-10 rounded-full object-cover border-2 border-soft-gold shadow-md" // Border pakai soft-gold
          />
          <a href="/" className="font-bold tracking-wider flex items-baseline">
            <span className="font-pacifico text-white text-4xl">My</span>
            <span className="text-soft-gold text-2xl">Portofolio.</span> {/* Teks pakai soft-gold */}
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="ml-10 flex items-baseline space-x-4">
            <li>
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={getNavLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project" className={getNavLinkClass}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </li>
            <button
                onClick={handleTranslateClick}
                className="px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out text-gray-300 hover:bg-gray-700 hover:text-white"
                title="Translate Page"
              >
                <i className="fas fa-language text-xl"></i> {/* Ikon bahasa dari Font Awesome */}
              </button>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;