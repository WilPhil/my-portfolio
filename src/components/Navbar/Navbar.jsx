import React, { useState } from 'react';

const Navbar = () => {

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 border-1 border-b">
      <div className="container flex justify-between mx-auto px-3 py-5 text-[#141e30] font-medium">
        <p className="text-md">WilPhil</p>
        <div className="text-sm flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="hover:opacity-70 transition duration-300 ease-in-out"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>   
    </header>
  )
}

export default Navbar;
