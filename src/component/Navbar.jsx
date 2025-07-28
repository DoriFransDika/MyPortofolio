import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';

  const Navbar = () => {
    // State untuk mengelola tampilan pesan kustom
    const [showMessage, setShowMessage] = useState(false);
    const [messageContent, setMessageContent] = useState('');

    // Fungsi untuk menampilkan pesan kustom
    const showCustomMessage = (message) => {
      setMessageContent(message);
      setShowMessage(true);
      setTimeout(() => {
          setShowMessage(false);
          setMessageContent('');
      }, 3000);
    };

    // Fungsi untuk menentukan kelas NavLink berdasarkan status aktif
    const getNavLinkClass = ({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out
        ${isActive
          ? 'text-soft-gold'
          : 'text-gray-300 hover:text-white'
        }`;

    // Handler untuk tombol Translate
    const handleTranslateClick = () => {
      if (window.google && window.google.translate && document.querySelector('.goog-te-combo')) {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
          selectElement.value = 'id'; 
          selectElement.dispatchEvent(new Event('change'));
        }
      } 
      else {
        showCustomMessage("Widget Google Translate belum sepenuhnya dimuat. Silakan coba lagi.");
      }
    };

  return (
    <nav className="bg-navy-dark p-4 shadow-md w-full">
      {/* Bagian utama navigasi */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center space-x-3">
          <img
              src="/image/3.jpg"
              alt="Dori Frans Dika"
              className="w-10 h-10 rounded-full object-cover border-2 border-soft-gold shadow-md"
          />
          <a href="/" className="font-bold tracking-wider flex items-baseline">
            <span className="font-pacifico text-white text-4xl">My</span>
            <span className="text-soft-gold text-2xl">Portofolio.</span>
          </a>
        </div>

        {/* Item Navigasi Desktop */}
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

            {/* Tombol Translate */}
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

      {/* Kotak Pesan Kustom */}
      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
          {messageContent}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
