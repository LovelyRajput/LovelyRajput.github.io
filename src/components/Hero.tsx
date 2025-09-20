import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="animate-slide-up">
            <p className="text-primary text-lg font-medium mb-4">Hello, I'm</p>
          </div>
          
          {/* Name */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">Lovely Rajput</span>
            </h1>
          </div>
          
          {/* Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
              AI/ML Engineer & Data Scientist
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Passionate AI/ML Engineer with expertise in building intelligent systems and predictive models. 
              Specialized in machine learning, generative AI, and NLP solutions with proven experience 
              in developing scalable applications that drive business value and operational efficiency.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-wrap gap-4 mb-16" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="glow-primary hover:glow-accent transition-smooth">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth">
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="animate-slide-up flex gap-6" style={{ animationDelay: '0.5s' }}>
            <a 
              href="https://github.com/lovelyrajput" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:glow-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/lovely-rajput2509" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:glow-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:lovelyrajput2509@gmail.com" 
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:glow-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <div className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </button>
    </section>
  );
};

export default Hero;