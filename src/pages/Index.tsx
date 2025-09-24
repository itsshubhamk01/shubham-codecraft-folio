import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
