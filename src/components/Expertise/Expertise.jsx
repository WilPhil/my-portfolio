const Expertise = () => {
  return (
    <section id="expertise" className="w-full py-20">
      <div className="max-w-6xl mx-auto py-6 px-6 grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="border border-[#444444] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-[#e0e0e0] font-semibold mb-4">
              Front-End
            </h3>
            <p className="text-[#b0b0b0] leading-relaxed">
              Tailwind CSS, Bootstrap, Alpine.js, jQuery, Vue.js, React.js
            </p>
          </div>
          <div className="border border-[#444444] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-[#e0e0e0] font-semibold mb-4">
              Back-End
            </h3>
            <p className="text-[#b0b0b0] leading-relaxed">
              PHP, Laravel, Livewire, Inertia, MySQL
            </p>
          </div>
          <div className="border border-[#444444] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-[#e0e0e0] font-semibold mb-4">
              Others
            </h3>
            <p className="text-[#b0b0b0] leading-relaxed">
              Git, Vim, Postman, Figma
            </p>
          </div>
        </div>
        <h2 className="text-4xl uppercase tracking-widest text-white mb-4 self-center ml-auto">
          Expertise / <span className="text-purple-500">02</span>
        </h2>
      </div>
    </section>
  );
};

export default Expertise;
