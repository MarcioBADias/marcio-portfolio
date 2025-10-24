import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Márcio Breno Augusto Dias
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-primary font-semibold">
          Desenvolvedor Front-End
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Criando interfaces intuitivas e responsivas com React.js, Supabase, Node.js e MongoDB
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contato")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-black font-semibold px-8"
          >
            Entre em Contato
          </Button>
          <Button
            onClick={() => window.open("https://drive.google.com/file/d/14dRB_cZY6_-5R2AABRHKpFkKrUYotU7R/view?usp=drivesdk", "_blank")}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black"
          >
            <FileText className="mr-2 h-5 w-5" />
            Ver Currículo
          </Button>
        </div>
      </div>
    </section>
  );
};
