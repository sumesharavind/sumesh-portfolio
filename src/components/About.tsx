import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking to tackle complex challenges with innovative solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that make a difference.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With several years of experience in web development, I've had the privilege of working 
                on diverse projects ranging from small business websites to large-scale applications. 
                My journey began with curiosity about how websites work, and it has evolved into a 
                passion for creating seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                When I'm not coding, you can find me exploring new frameworks, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-primary font-semibold">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="text-primary font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Technologies</span>
                  <span className="text-primary font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee Consumed</span>
                  <span className="text-primary font-semibold">∞</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;