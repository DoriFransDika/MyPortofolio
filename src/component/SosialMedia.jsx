// src/component/SosialMedia.jsx

import React from 'react';
// Pastikan path ini benar berdasarkan struktur folder Anda:
// Dari src/component/ ke src/data/
import socialIconsData from '../data/socialIconsData'; // Menggunakan nama file Anda

const SosialMedia = ({ containerClassName = "flex items-center justify-center space-x-4", iconBaseClassName = "inline-flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", iconColorClassName = "text-gray-700 hover:text-indigo-600" }) => {
  return (
    <div className={containerClassName}>
      {socialIconsData.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          aria-label={`Link to ${icon.name} profile`}
          target="_blank"
          rel="noopener noreferrer"
          // Gabungkan kelas dasar dengan kelas khusus ikon jika ada
          className={`${iconBaseClassName} ${iconColorClassName} ${icon.additionalClassName || ''}`}
        >
          <svg
            className={`w-6 h-6`} // Ukuran ikon
            viewBox="0 0 24 24"
            // fill="currentColor" dihapus dari sini agar fill bisa diatur via Tailwind classes pada path/circle
            aria-hidden="true"
          >
            {/* Render circle jika ada bgColorClass */}
            {icon.bgColorClass && (
              <circle cx="12" cy="12" r="12" className={icon.bgColorClass}></circle>
            )}
            {/* Render path ikon utama. Gunakan iconFillClass jika ada, atau default ke fill-current */}
            <path d={icon.path} className={icon.iconFillClass || "fill-current"}></path>
          </svg>
          <span className="sr-only">{icon.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SosialMedia;