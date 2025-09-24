import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Portfolio Title */}
        <div className="mb-6 animate-slide-up">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1 inline-block rounded-full">
            Portfolio
          </h2>
        </div>

        {/* Floating Animation Container */}
        <div className="floating">
          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Shubham</span><br />
            <span className="text-foreground">Tulashidas Kadam</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up [animation-delay:0.2s]">
            <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              Full Stack Java Developer
            </span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up [animation-delay:0.4s]">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91-9923422923</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
  <Mail className="w-4 h-4" />
  <a href="mailto:itsshubhamk01@gmail.com" className="hover:underline">
    itsshubhamk01@gmail.com
  </a>
</div>

          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up [animation-delay:0.6s]">
          Result-driven Software Developer with hands-on experience in <span className="text-primary font-semibold">Java, Spring Boot, React.js, Node.js, and Django</span>. 
          Skilled in designing scalable applications, REST APIs, and database-driven solutions. Experienced in Agile development and cloud platforms. 
          Strong problem-solving background with <span className="text-accent font-semibold">300+ coding problems solved</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up [animation-delay:0.8s]">
  {/* Download Resume Button */}
  <Button className="btn-hero group">
    <a 
      href="https://drive.google.com/file/d/1z9v1tpTRkKOlp49gbSbjBe0wX4HldEnH/view" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center"
    >
      <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
      Download Resume
    </a>
  </Button>

  {/* View Projects Button */}
  <Button variant="outline" className="btn-secondary">
    <a 
      href="https://github.com/itsshubhamk01?tab=repositories" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center"
    >
      <ExternalLink className="w-5 h-5 mr-2" />
      View Projects
    </a>
  </Button>
</div>


        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-up [animation-delay:1s]">
          <a 
            href="https://www.linkedin.com/in/shubham-kadam-336900230" 
            className="w-12 h-12 rounded-full bg-card/50 border border-card-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 glow-primary hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/itsshubhamk01" 
            className="w-12 h-12 rounded-full bg-card/50 border border-card-border flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300 hover:scale-110 glow-secondary hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://leetcode.com/u/itsshubhamk01/" 
            className="w-12 h-12 rounded-full bg-card/50 border border-card-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 glow-accent hover:shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          {/* Credly */}
          <a 
            href="https://www.credly.com/users/shubham-kadam.6c506055" 
            className="w-12 h-12 rounded-full bg-card/50 border border-card-border flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110 glow-warning hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 4.84L18.93 19H5.07L12 6.84z" />
            </svg>
          </a>
          {/* HackerRank */}
          <a 
            href="https://www.hackerrank.com/profile/itsshubhamk01" 
            className="w-12 h-12 rounded-full bg-card/50 border border-card-border flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 hover:scale-110 glow-accent hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l9.5 5.5v9L12 22l-9.5-5.5v-9L12 2zm0 2.2L4.5 8v8L12 19.8l7.5-3.8V8L12 4.2zm0 3.3l3.5 2v4.8L12 16.5l-3.5-2V9.5L12 7.5z"/>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
