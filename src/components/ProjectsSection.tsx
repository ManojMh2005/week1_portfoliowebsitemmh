import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Blood Banking System",
      year: "2024",
      description: "A comprehensive digital platform for managing and tracking blood availability and donor information. Features include donor registration, blood inventory management, and emergency request handling.",
      technologies: ["Java", "Database Management", "Web Development", "System Design"],
      status: "Completed",
      type: "Web Application"
    },
    {
      title: "Automated OMR Analyzer Using ML & Image Processing",
      year: "2025 – Present",
      description: "An advanced OMR sheet analyzer utilizing OpenCV and Machine Learning algorithms to achieve high accuracy even under imperfect input conditions. The system handles various lighting conditions and paper orientations.",
      technologies: ["Machine Learning", "OpenCV", "Image Processing", "Python"],
      status: "In Progress",
      type: "Research Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-shadow-hover transition-smooth animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-primary font-medium">{project.type}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={project.status === 'In Progress'}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {project.status === 'In Progress' ? 'Coming Soon' : 'View Details'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;