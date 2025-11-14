import About from "./_components/About";
import Chatbot from "./_components/Chatbot";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Hero3D from "./_components/Hero3D";
import Navigation from "./_components/Navigation";
import FlagshipProjects from "./_components/FlagshipProjects";
import Resume from "./_components/Resume";
import SkillsMatrix from "./_components/SkillsMatrix";
import Timeline from "./_components/Timeline";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero3D />
      <About />
      <SkillsMatrix />
      <Timeline />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot/>
    </main>
  );
}
