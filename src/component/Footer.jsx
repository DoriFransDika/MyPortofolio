import React from 'react';
import SosialMedia from './SosialMedia';

const Footer = () => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Project', href: '/Project' },
    { name: 'Contact', href: 'Contact' },
  ];
  
  return (
    <footer className=" bg-navy-dark border-t-4 border-yellow-500 p-5xl"
        data-aos="fade-up"
        data-aos-duration="1000">
      <div className="max-w-screen-xl mx-auto py-6 px-8 sm:px-42 lg:flex lg:justify-between text-gray-50">
        <nav className="p-5 lg:w-2/12 lg:border-r lg:border-zinc-50">
          <div className="font-bold text-2xl text-yellow-500 mb-1">Menu</div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="my-2">
                <a className="hover:text-yellow-500 transition-colors duration-200" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="py-16 lg:w-7/12 lg:border-r lg:border-gray-50 text-center">
          <h3 className="font-bold text-3xl text-yellow-500 mb-4 ">Dori Frans Dika</h3>
          <p className="px-7 text-gray-50 text-sm mb-10">
            Experienced web developer focused on innovative and efficient digital solutions. I specialize in crafting responsive and user-friendly web applications, leveraging modern technologies to bring complex ideas to life. Let's collaborate to turn your visionary ideas into impactful digital products.

          </p>
        </div>
        <div className="p-5 lg:w-3/12">
          <div className="font-bold text-2xl text-yellow-500 mb-4">Contact Us</div>
          <ul className="mb-4">
            <li className="my-2 text-gray-50">
              Sungai Penuh City, Jambi, Indonesia
            </li>
          </ul>
          <SosialMedia
            containerClassName="flex justify-start space-x-4"
            iconColorClassName="text-gray-50 hover:text-indigo-600"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-gray-50 py-5 mx-auto text-gray-50 text-sm max-w-screen-xl px-4 sm:px-6">
        <div className="text-center">
          © {new Date().getFullYear()} Dori Frans Dika. All rights reserved.
        </div>
        <div className="text-center mt-1">
          Designed and built with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
