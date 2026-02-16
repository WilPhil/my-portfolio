import Deftection from "../../assets/deftection.png";
import TDCDashboard from "../../assets/tdcdashboard.png";
import SAPCompare from "../../assets/sapcompare.png";
import SinergiLife from "../../assets/sinergilife2.png";
import GithubIcon from "../../assets/GitHub_Invertocat_White.svg";
import LiveIcon from "../../assets/code-white.svg";

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col-reverse gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 content-evenly">
          <div className="w-full flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={Deftection}
                alt="Deftection"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl text-[#e0e0e0] font-semibold ">
                Deftection
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Satria0ibnu/deftection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={GithubIcon}
                    alt="Github"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Repository"
                  />
                </a>
                {/* Demo not available yet */}
                {/* <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={LiveIcon}
                    alt="Live Demo"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Demo"
                  />
                </a> */}
              </div>
            </div>
            <p className="text-md text-[#b0b0b0] leading-relaxed">
              An AI-powered web application that detects defects in images using
              machine learning models, built with Vue.js, Inertia, Laravel, and
              Flask.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <img src={TDCDashboard} alt="TDC Dashboard" />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl text-[#e0e0e0] font-semibold ">
                TDC Dashboard
              </h3>
              <div className="flex gap-3">
                {/* Demo not available yet */}
                {/* <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={LiveIcon}
                    alt="Live Demo"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Demo"
                  />
                </a> */}
              </div>
            </div>
            <p className="text-md text-[#b0b0b0] leading-relaxed">
              An internal application for monitoring through several module of
              TDC, TDC is a part of Brifirst. Built with Tailwind, Alpine.js,
              Laravel, and Livewire.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <img src={SAPCompare} alt="SAP Compare" />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl text-[#e0e0e0] font-semibold ">
                SAP Compare
              </h3>
              <div className="flex gap-3">
                {/* Demo not available yet */}
                {/* <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={LiveIcon}
                    alt="Live Demo"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Demo"
                  />
                </a> */}
              </div>
            </div>
            <p className="text-md text-[#b0b0b0] leading-relaxed">
              An internal application tools for comparing between users SAP
              module for TDC, TDC is a part of Brifirst. Built with Tailwind,
              Alpine.js, Laravel, and Livewire.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg">
              <img src={SinergiLife} alt="Sinergi Life" />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl text-[#e0e0e0] font-semibold ">
                Sinergi Life
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/WilPhil/lp-sinergi-life-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={GithubIcon}
                    alt="Github"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Repository"
                  />
                </a>
                <a
                  href="https://wilphil.github.io/lp-sinergi-life-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300 ease-in-out"
                >
                  <img
                    src={LiveIcon}
                    alt="Live Demo"
                    className="w-6 h-6 hover:opacity-70 ease-in-out transition duration-300"
                    title="Demo"
                  />
                </a>
              </div>
            </div>
            <p className="text-md text-[#b0b0b0] leading-relaxed">
              A landing page for Sinergi Life company profile built with
              Tailwind CSS and Alpine.js.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:mx-auto items-center gap-4">
          <span className="text-4xl text-purple-500">04</span>
          <h2 className="text-4xl uppercase tracking-widest text-white mb-4 pt-4 self-center md:border-t">
            <span className="md:hidden">/</span> Projects
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
