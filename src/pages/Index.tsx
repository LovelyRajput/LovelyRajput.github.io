import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import PersonalInfo from "@/components/PersonalInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Projects />
        <PersonalInfo />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Lovely Rajput. All rights reserved.
            </div>
            <div className="text-muted-foreground text-sm">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
