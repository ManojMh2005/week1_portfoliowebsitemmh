import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Profile
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A passionate and driven individual with a creative mindset. Eager to contribute 
              innovative solutions and grow within dynamic, forward-thinking environments.
            </p>
            <p className="text-muted-foreground">
              Currently pursuing Bachelor of Engineering in Computer Science & Engineering 
              at JNNCE, I am dedicated to learning cutting-edge technologies and applying 
              them to solve real-world problems.
            </p>
          </div>

          <div className="animate-fade-in">
            <Card className="card-shadow hover:card-shadow-hover transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:manoj.halammanavar@example.com" 
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        manoj.halammanavar@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a 
                        href="tel:+919876543210" 
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/manoj-halammanavar" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        linkedin.com/in/manoj-halammanavar
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;