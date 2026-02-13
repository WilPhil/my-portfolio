import GithubIcon from "../../assets/GitHub_Invertocat_White.svg";
import LinkedinIcon from "../../assets/InBug-White.png";
import Envelope from "../../assets/envelope-solid.svg";

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 px-6 text-center">
        <div className="flex gap-2 mx-auto">
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
          <a
            href="mailto:wphilip465@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
          >
            <img
              src={Envelope}
              alt="Email"
              className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
            />
          </a>
        </div>
        <p className="text-sm text-[#888888]">
          A portfolio designed and built by WilPhil with 💜
        </p>
      </div>
    </footer>
  );
};

export default Footer;
