const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex">
          <p>
            Hello, I'm a passionate Full-Stack Developer. Learning to thrive
            into the web development world
          </p>
          <img
            // 4. Then change the src below from the placeholder to {myImage}
            src="https://placehold.co/192x192/47d1d1/ffffff?text=You"
            alt="Your Name"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-8 border-4 border-cyan-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
