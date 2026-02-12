const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex gap-12">
        <div className="w-[40%] m-auto">
          <h2 className="text-4xl uppercase tracking-widest text-white mb-4 self-center ">
            <span className="text-purple-500">03</span> / Experience
          </h2>
        </div>
        <div className="w-[60%] flex flex-col gap-16 ">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-[#e0e0e0] font-semibold ">
              Full Stack Developer Intern
            </h3>
            <span className="text-sm text-[#888888] italic ">
              PT Bank Rakyat Indonesia (Persero) Tbk. | Sep 2024 - Dec 2024
            </span>
            <ul className="list-disc pl-5 text-sm text-[#888888]">
              <li>
                Continued development and maintenance of internal web, focusing
                on refactoring the admin side.
              </li>
              <li>
                Optimized data import processes and increasing the import
                capacity to handle over 50k data entries.
              </li>
              <li>
                Developed website tool to filter SAP user data based on specific
                criteria.
              </li>
            </ul>
            <span className="text-md text-[#e0e0e0] leading-relaxed">
              Tools: Tailwind CSS, Alpine.js, Laravel, Livewire
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-[#e0e0e0] font-semibold">
              Staff Programmer Intern
            </h3>
            <span className="text-sm text-[#888888] italic">
              PT Sinergi Insan Andalan (SIA) | Mar 2025 - Jun 2025
            </span>
            <ul className="list-disc pl-5 text-sm text-[#888888]">
              <li>
                Developed company's landing page (Sinergi Life) using HTML,
                Tailwind CSS, and Alpine.js.
              </li>
              <li>
                Engineered the complete CRUD functionality for the 'Classes'
                module as part of an internal system migration.
              </li>
              <li>
                Built multiple responsive landing page from design mockups,
                consistenly following design needs specifications.
              </li>
            </ul>
            <span className="text-md text-[#e0e0e0] leading-relaxed">
              Tools: Tailwind CSS, Alpine.js, Laravel, jQuery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
