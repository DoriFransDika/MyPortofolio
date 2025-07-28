import React, { useState, useEffect } from 'react';

    const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false); // State untuk mengontrol visibilitas tombol

    // Fungsi untuk mendeteksi scroll dan mengubah visibilitas
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Tombol akan muncul setelah scroll 300px ke bawah
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Fungsi untuk menggulir halaman ke atas
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // Gulir dengan animasi halus
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility); // Tambahkan event listener saat komponen mount

        return () => {
        window.removeEventListener('scroll', toggleVisibility); // Hapus event listener saat komponen unmount
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50"> {/* Posisi tombol di kanan bawah layar */}
        {isVisible && (
            <button
            onClick={scrollToTop}
            className="bg-soft-gold text-navy-dark p-3 rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-soft-gold"
            title="Scroll to top"
            >
            <i className="fas fa-arrow-up text-xl"></i> {/* Ikon panah atas dari Font Awesome */}
            </button>
        )}
        </div>
    );
    };

export default ScrollUp;
