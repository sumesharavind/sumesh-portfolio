import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [  
    {
      title: "Restaurant Food Order Website",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://admirable-semolina-dbce3b.netlify.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, forecasts, and interactive maps with geolocation support.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduled posting, and engagement metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Chart.js", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Recipe Finder App",
      description: "A mobile-first recipe application with search functionality, meal planning, and shopping list generation features.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=400&fit=crop",
      technologies: ["React Native", "Expo", "Spoonacular API", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`glass-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button 
      size="sm" 
      className="bg-gradient-hero border-0 text-primary-foreground hover:shadow-glow transition-all duration-300 w-full"
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      Live Demo
    </Button>
  </a>
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button 
      variant="outline" 
      size="sm"
      className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
    >
      <Github className="w-4 h-4" />
    </Button>
  </a>
</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;