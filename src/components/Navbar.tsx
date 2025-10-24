import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">MB</h1>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
