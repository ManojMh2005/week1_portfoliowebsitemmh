import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

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
              Computer Science Engineering student with hands-on experience in designing secure and scalable backend systems using Java and Python along with web development. Experienced in database design, authentication mechanisms, and ML-based computer vision systems.
            </p>
            <p className="text-muted-foreground">
              Strong foundation in Data Structures, Operating Systems, and DBMS with practical implementation experience. Currently pursuing Bachelor of Engineering in CSE at Jawaharlal Nehru New College of Engineering, Shivamogga.
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
                        href="mailto:mhmanojmanu92@gmail.com" 
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        mhmanojmanu92@gmail.com
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
                        href="tel:+918431858148" 
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        +91 84318 58148
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
                        href="https://linkedin.com/in/manoj-m-h-4600aa310" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        linkedin.com/in/manoj-m-h-4600aa310
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a 
                        href="https://github.com/ManojMh2005" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-smooth"
                      >
                        github.com/ManojMh2005
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <span className="text-primary">
                        Ranebennur, Karnataka, India
                      </span>
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
