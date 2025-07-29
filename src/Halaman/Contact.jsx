import React from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import SectionContainer from '../component/Selection/SectionContainer.jsx'; 

const Contact = () => {
  // Konfigurasi Formspree
    const [state, handleSubmit] = useForm("xkgzjlbw"); 

    // Tampilan jika form berhasil dikirim
    if (state.succeeded) {
        return (
        <section className="py-24 sm:py-32 bg-navy-dark text-white relative overflow-hidden min-h-screen flex items-center justify-center">
            <SectionContainer className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Thank You!
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Your message has been sent successfully. I will get back to you as soon as possible.
                </p>
                <a href="/" className="inline-block px-8 py-3 bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1 mt-8">
                    Go to Home
                </a>
            </SectionContainer>
        </section>
        );
    }

    return (
        // Bagian section utama untuk halaman kontak
        <section className="py-24 sm:py-9 px-20 bg-navy-dark text-white relative overflow-hidden">
        <SectionContainer>

            {/* Bagian Header */}
            <div className="text-center mb-16">
            <div className="relative inline-flex items-center mb-4
                            animate__animated
                            animate__rubberBand">
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full mr-2" />
                <span className="text-soft-gold text-sm font-semibold py-1 px-3 rounded-full uppercase tracking-wider">
                    My Contact
                </span>
                <hr className="w-16 h-0.5 bg-soft-gold rounded-full ml-2" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight
                            animate__animated
                            animate__bounceInRight
                            animate__delay-1s">
                Let's Connect
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed
                            animate__animated
                            animate__bounceInRight
                            animate__delay-2s">
                "Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
            </p>
            </div>

            {/* Konten Utama Kontak: Form dan Informasi */}
            <div className="flex flex-col lg:flex-row gap-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="3000">
            {/* Kolom Kiri: Form Kontak */}
            <div className="w-full lg:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Input Nama */}
                <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                    Your Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full p-3 rounded-md bg-charcoal text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-gold"
                    placeholder="Dori Frans Dika"
                    required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Input Email */}
                <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                    Your Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-md bg-charcoal text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-gold"
                    placeholder="dorifransdikaa@gmail.com"
                    required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Input Subjek */}
                <div>
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject
                    </label>
                    <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="w-full p-3 rounded-md bg-charcoal text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-gold"
                    placeholder="Project Inquiry"
                    required
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Textarea Pesan */}
                <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        className="w-full p-3 rounded-md bg-charcoal text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-soft-gold resize-y"
                        placeholder="Hello! I'd like to talk about..."
                        required>
                    </textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Tombol Kirim */}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center px-8 py-3 bg-soft-gold text-navy-dark font-semibold rounded-full shadow-lg hover:bg-pale-gold transition duration-300 transform hover:-translate-y-1">
                    Send Message <i className="fas fa-arrow-right ml-2"></i>
                </button>
                </form>
            </div>

            {/* Kolom Kanan: Info Kontak, Sosial Media, Ketersediaan */}
            <div className="w-full lg:w-1/2 space-y-8">
                {/* Info Kontak */}
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                        Contact Info
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center text-gray-300">
                            <i className="fas fa-envelope mr-3 text-soft-gold text-xl"></i>
                            <span>
                                dorifransdikaa@gmail.com
                            </span>
                        </div>
                    <div className="flex items-center text-gray-300">
                    <i className="fas fa-map-marker-alt mr-3 text-soft-gold text-xl"></i>
                        <span>Kota Sungai Penuh, Jambi, Indonesia</span> {/* GANTI dengan lokasi Anda */}
                </div>
            </div>
                </div>

                {/* Hubungkan di Sosial Media */}
                <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Connect on Social Media</h3>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-3xl">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/yourprofile/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-3xl">
                    <i className="fab fa-instagram"></i>
                    </a>
                    {/* Tambahkan lebih banyak tautan sosial jika diperlukan, contoh: GitHub */}
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300 text-3xl">
                    <i className="fab fa-github"></i>
                    </a>
                </div>
                </div>

                {/* Ketersediaan Saat Ini */}
                <div className="bg-charcoal p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-soft-gold mb-2">Current Availability</h3>
                    <p className="text-gray-300 text-base">
                        I'm currently available for freelance work and new exciting projects. My typical response time is within 24 hours.
                    </p>
                </div>
            </div>
            </div>
        </SectionContainer>
        </section>
    );
};

export default Contact;
