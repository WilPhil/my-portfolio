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
    // Set up the observer to detect when sections are visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section crosses the middle of the viewport, mark it active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // rootMargin "-50% 0px -50% 0px" means the section must cross the absolute center of the screen to trigger
      { rootMargin: "-50% 0px -50% 0px" },
    );

    const sectionIds = [
      "home",
      ...navLinks.map((link) => link.href.substring(1)),
    ];

    // Tell the observer to watch all our section IDs
    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg bg-[#121212]">
      <div className="max-w-6xl flex justify-between mx-auto px-6 py-5 text-[#d1d1d1] text-sm font-normal tracking-wide">
        <span className="cursor-pointer">椿</span>
        <div className="flex gap-8">
          {navLinks.map((link) => {
            // Check if the current link matches the active section in state
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.label}
                href={link.href}
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
