import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Python", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 90 }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Power BI", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 80 },
        { name: "SAP Analyytical Cloud", level: 75 },
        { name: "CI/CD", level: 70 }
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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

export default Skills;