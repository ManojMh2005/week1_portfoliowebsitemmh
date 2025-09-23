import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Project Management Certificate",
      issuer: "Professional Certification Authority",
      description: "Comprehensive training in project planning, execution, and team management methodologies.",
      skills: ["Project Planning", "Team Management", "Risk Assessment", "Quality Control"]
    },
    {
      title: "Java Programming",
      issuer: "ICT & Infosys Academy",
      description: "Advanced Java programming course covering object-oriented programming, data structures, and application development.",
      skills: ["Object-Oriented Programming", "Java Collections", "Exception Handling", "Multithreading"]
    },
    {
      title: "IJRASET Certificate for Automated OMR Analyzer",
      issuer: "International Journal of Research and Analytical Reviews",
      description: "Recognition for research work in automated OMR analysis using machine learning and image processing techniques.",
      skills: ["Research Publication", "Machine Learning", "Image Processing", "Academic Writing"]
    }
  ];

  return (
    <section id="certificates" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="card-shadow hover:card-shadow-hover transition-smooth animate-scale-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center text-primary hover:text-primary-dark transition-smooth text-sm font-medium">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;