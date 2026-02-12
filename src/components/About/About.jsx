const About = () => {
  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6 pb-6 grid md:grid-cols-3 gap-12">
        <h2 className="text-4xl uppercase tracking-widest text-white mb-4 self-center">
          <span className="text-purple-500">01</span> / About Me
        </h2>
        <div className="md:col-span-2 max-w-2xl flex flex-col gap-4">
          <div className="w-full space-y-4 text-justify-left">
            <p className="text-[#B0B0B0] leading-relaxed">
              Heyya! I’m a Web Developer Enthusiast and just recently an IT
              graduate from President University. I specialize in building
              dynamic, scaleable, AI-integrated web applications that don't just
              work—they perform.
            </p>
            <p className="text-[#888888] text-sm italic">
              When I'm not coding, I usually take a coding course to further
              develop my skills or exploring the latest tech trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
