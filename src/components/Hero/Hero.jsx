import GithubIcon from "../../assets/GitHub_Invertocat_White.svg";
import LinkedinIcon from "../../assets/InBug-White.png";
import ProfileIcon from "../../assets/Profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex">
          <div className="w-[80%] flex flex-col pr-6 gap-4">
            <div className="flex justify-end gap-4 pr-4">
              <a
                href="https://github.com/WilPhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
              >
                <img
                  src={GithubIcon}
                  alt="Github"
                  className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/wilsent-philip-33bbb0225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
              >
                <img
                  src={LinkedinIcon}
                  alt="Linkedin"
                  className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                />
              </a>
            </div>
            <div className="flex flex-col items-end gap-4">
              <span className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Wilsent Philip Lo
              </span>
              <span className="text-sm md:text-base font-medium text-purple-500 uppercase tracking-[0.2em]">
                Web Developer
              </span>
            </div>
          </div>
          <div className="w-[20%] flex items-center">
            <img
              src={ProfileIcon}
              alt="Wilsent Philip Lo"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-8"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
