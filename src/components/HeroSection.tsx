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
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-scale-in">
            <img
              src={profileImage}
              alt="Manoj Manjappa Halammanavar - Profile"
              className="w-64 h-64 rounded-full mx-auto object-cover object-[center_20%] glow-primary animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in text-glow">
            Manoj Manjappa Halammanavar
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            A passionate and driven CSE student eager to contribute innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-light hover:glow-primary transition-smooth"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-smooth"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;