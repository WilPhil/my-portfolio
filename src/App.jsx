import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Expertise from "./components/Expertise/Expertise.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="w-full ">
          <p className="italic text-lg text-center text-[#e0e0e0] leading-relaxed">
            "Building the bridge between intelligent systems & seamless users
            experience."
          </p>
        </div>
        <Expertise />
        <div className="w-full ">
          <p className="italic text-lg text-center text-[#e0e0e0] leading-relaxed">
            "Knowledge is the foundation; experience is the architecture built
            upon it."
          </p>
        </div>
        <Experience />
        <div className="w-full ">
          <p className="italic text-lg text-center text-[#e0e0e0] leading-relaxed">
            "Where professional foundations meet personal exploration, turning
            lines of code into living systems."
          </p>
        </div>
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
