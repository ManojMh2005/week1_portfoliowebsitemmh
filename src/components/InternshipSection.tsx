import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Code } from "lucide-react";

const InternshipSection = () => {
  const internships = [
    {
      title: "Java Full Stack Development Intern",
      company: "The Developers Arena",
      duration: "12/2025 – 01/2026",
      technologies: ["HTML/CSS", "SQL", "JavaScript", "Java", "Node.js", "REST API"],
      highlights: [
        "Developed backend modules using Java",
        "Designed REST APIs and integrated with frontend components",
        "Implemented database connectivity using SQL",
        "Participated in debugging and performance optimization tasks"
      ]
    },
    {
      title: "Android App Development Intern (Gen AI)",
      company: "MindMatrix",
      duration: "02/2026 – Present",
      technologies: ["Android Studio", "Google AI Studio", "Salesforce"],
      highlights: [
        "Assisting in developing Android-based applications integrating Generative AI features",
        "Working on API integration and data handling modules",
        "Participating in testing and debugging of application components"
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Internships
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-shadow-hover transition-smooth animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {internship.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{internship.company}</p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {internship.duration}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {internship.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start space-x-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
