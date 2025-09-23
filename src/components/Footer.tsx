import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Manoj Manjappa Halammanavar</h3>
            <p className="text-primary-foreground/80">
              CSE Student | Innovative Problem Solver | Future Technology Leader
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:manoj.halammanavar@example.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/manoj-halammanavar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              LinkedIn
            </a>
            <a 
              href="tel:+919876543210"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
            >
              Phone
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Manoj Manjappa Halammanavar. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-400" /> for innovation.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
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