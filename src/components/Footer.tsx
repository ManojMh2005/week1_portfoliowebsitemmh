import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-primary text-glow">Manoj Manjappa Halammanavar</h3>
            <p className="text-muted-foreground">
              CSE Student | Backend Developer | ML Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:mhmanojmanu92@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:text-glow"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/manoj-m-h-4600aa310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:text-glow"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/ManojMh2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:text-glow"
            >
              GitHub
            </a>
            <a 
              href="tel:+918431858148"
              className="text-muted-foreground hover:text-primary transition-smooth hover:text-glow"
            >
              Phone
            </a>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Manoj Manjappa Halammanavar. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-400" /> for innovation.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth hover:text-glow"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
