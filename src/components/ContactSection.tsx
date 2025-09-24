import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mhmanojmanu92@gmail.com",
      href: "mailto:mhmanojmanu92@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 84318 58148",
      href: "tel:+918431858148",
      description: "Available Mon-Fri, 9am-6pm"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manoj-halammanavar",
      href: "https://linkedin.com/in/manoj-halammanavar",
      description: "Let's connect professionally"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      href: "#",
      description: "Open to opportunities"
    }
  ];

  const interests = ["Music Listening", "Cricket", "Movies", "Technology", "Reading"];

  return (
    <section id="contact" className="py-20 section-gradient relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-primary mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and meaningful conversations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="card-shadow hover:card-shadow-hover transition-smooth animate-scale-in bg-card rounded-lg p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full flex-shrink-0 glow-primary">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {contact.description}
                      </p>
                      <a 
                        href={contact.href}
                        target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="text-primary hover:text-primary-light transition-smooth font-medium break-all hover:text-glow"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="mt-8">
              <div className="card-shadow hover:card-shadow-hover transition-smooth bg-card rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Ready to start a conversation?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary-light hover:glow-primary"
                    onClick={() => window.location.href = 'mailto:mhmanojmanu92@gmail.com'}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                    onClick={() => window.open('https://linkedin.com/in/manoj-halammanavar', '_blank')}
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="lg:col-span-1">
            <div className="card-shadow animate-fade-in h-fit bg-card rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Personal Interests
              </h3>
              <p className="text-muted-foreground mb-6">
                When I'm not coding or studying, you can find me:
              </p>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg hover:bg-accent/70 transition-smooth"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full glow-primary"></div>
                    <span className="text-foreground">{interest}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "Passionate about technology and always eager to learn something new every day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;