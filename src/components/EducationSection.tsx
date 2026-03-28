import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      level: "Bachelor of Engineering in CSE",
      institution: "Jawaharlal Nehru New College of Engineering",
      location: "Shivamogga, Karnataka",
      grade: "8.2 CGPA",
      year: "2022 – Present",
      description: "Pursuing Computer Science & Engineering degree with focus on backend development, data structures, database management, and ML-based systems."
    },
    {
      level: "Pre-University Education",
      institution: "Morarji Desai Residential PU Science College",
      location: "Savanur, Karnataka",
      grade: "91.6%",
      year: "2022",
      description: "Completed pre-university education in Science stream with excellent academic performance."
    },
    {
      level: "Secondary School Education",
      institution: "Morarji Desai Model Residential School",
      location: "Chikkerur, Karnataka",
      grade: "92.8%",
      year: "2020",
      description: "Completed secondary education with outstanding academic achievement and strong foundation in mathematics and sciences."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:card-shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-primary font-semibold text-lg">
                        {edu.grade}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.level}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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

export default EducationSection;
