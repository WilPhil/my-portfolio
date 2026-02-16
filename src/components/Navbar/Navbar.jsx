import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    const sectionIds = [
      "home",
      ...navLinks.map((link) => link.href.substring(1)),
    ];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg bg-[#121212]">
      <div className="max-w-6xl flex justify-between mx-auto px-6 py-5 text-[#d1d1d1] text-sm font-normal tracking-wide">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="cursor-pointer hover:text-white transition-colors duration-300"
        >
          椿
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative transition duration-300 ease-in-out hover:opacity-100
                           after:content-[''] after:absolute after:left-0 after:-bottom-1
                           after:w-full after:h-[2px] after:bg-purple-500
                           after:origin-center after:transition-transform after:duration-300
                           ${
                             isActive
                               ? "after:scale-x-100 opacity-100"
                               : "after:scale-x-0 hover:after:scale-x-100 opacity-70"
                           }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
