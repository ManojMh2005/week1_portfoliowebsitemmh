import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Cpu, Wrench, BookOpen } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: Cpu,
      title: "Backend Development",
      skills: ["Node.js", "RESTful API Design"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["SQL", "MySQL"]
    },
    {
      icon: BookOpen,
      title: "Core CS Concepts",
      skills: ["Data Structures & Algorithms", "Operating Systems", "Core Java", "Computer Networks", "DBMS"]
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "MS Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-shadow-hover transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-accent px-3 py-1 rounded-full text-sm text-accent-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Individual Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Technical Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Java", "Python", "C", "HTML/CSS", "JavaScript", "Node.js", "REST APIs", "SQL", "MySQL", "Git", "GitHub", "Data Structures", "Operating Systems", "Computer Networks", "DBMS"].map((skill, index) => (
              <div 
                key={index}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-smooth cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
