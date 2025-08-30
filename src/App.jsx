import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { AboutMe, TechnicalStack } from './components/AboutMe';
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <TechnicalStack />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
