import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-scale-in">
            <img
              src={profileImage}
              alt="Manoj Manjappa Halammanavar - Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover ring-4 ring-primary-foreground/20 animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Manoj Manjappa Halammanavar
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            A passionate and driven CSE student eager to contribute innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;