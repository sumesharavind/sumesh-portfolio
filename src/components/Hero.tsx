import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-glow">
            Hi, I'm{" "}
            <span className="gradient-text">Sumesh Aravind</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Button 
    size="lg" 
    className="bg-gradient-hero border-0 text-primary-foreground hover:shadow-glow transition-all duration-300"
    onClick={scrollToAbout}
  >
    View My Work
  </Button>
  <a
    href="/resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center rounded-lg px-6 py-3 text-lg font-medium border"
    style={{ minWidth: "10rem" }}
  >
    Download Resume
  </a>
</div>
          
          {/* <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
              <Mail className="w-6 h-6" />
            </Button>
          </div> */}
          <div className="flex justify-center space-x-6">
  <a
    href="https://github.com/sumesharavind"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
      <Github className="w-6 h-6" />
    </Button>
  </a>
  <a
    href="https://www.linkedin.com/in/sumesh-aravind-k-5b1a71269/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
      <Linkedin className="w-6 h-6" />
    </Button>
  </a>
  <a
    href="mailto:sumesharavind20@gmail.com"
    aria-label="Email"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary hover:shadow-glow transition-all duration-300">
      <Mail className="w-6 h-6" />
    </Button>
  </a>
</div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;