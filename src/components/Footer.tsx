import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sumesharavind", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sumesh-aravind-k-5b1a71269/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sumesharavind20@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
              >
                Portfolio
              </button>
              <p className="text-muted-foreground mt-2">
                Building digital experiences with passion
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon"
                  asChild
                  className="hover:text-primary hover:shadow-glow transition-all duration-300"
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Sumesh Aravind K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;