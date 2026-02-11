import React, { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg bg-[#121212]">
      <div className="max-w-6xl flex justify-between mx-auto px-6 py-5 text-[#d1d1d1] text-xs font-normal tracking-wide">
        <span className="cursor-pointer">椿</span>
        <div className="flex gap-8">
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
  );
};

export default Navbar;
