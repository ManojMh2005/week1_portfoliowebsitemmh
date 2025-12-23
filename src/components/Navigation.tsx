import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-primary text-glow">
            Manoj Manjappa
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <button className="text-primary hover:text-primary-light transition-smooth">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;