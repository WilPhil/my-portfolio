const Projects = () => {
  return (
    <section id="projects" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col-reverse gap-12">
        <div className="max-w-2xl flex flex-col gap-4 mx-auto">
          <div className="w-full space-y-4 text-justify-left">
            <p className="text-[#B0B0B0] leading-relaxed">
              This section will showcase my projects.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto items-center gap-4">
          <span className="text-4xl text-purple-500">04</span>
          <h2 className="text-4xl uppercase tracking-widest text-white mb-4 pt-4 self-center border-t">
            Projects
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
