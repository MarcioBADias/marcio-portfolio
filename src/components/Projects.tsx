import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import heroclixImg from "@/assets/projects/heroclix-marketplace.png";
import heroLeagueImg from "@/assets/projects/hero-league-hub.png";
import tiAutomacaoImg from "@/assets/projects/ti-automacao.png";
import checkspeechImg from "@/assets/projects/checkspeech.png";
import racquelImg from "@/assets/projects/racquel-leads.png";
import sdGuiaImg from "@/assets/projects/sd-guia.png";

export const Projects = () => {
  const projects = [
    {
      title: "Heroclix Marketplace",
      description: "Marketplace para colecionadores de Heroclix com sistema de compra e venda",
      github: "https://github.com/MarcioBADias/heroclix-marketplace",
      demo: "https://heroclix-marketplace.netlify.app/",
      tags: ["React", "E-commerce", "API"],
      image: heroclixImg,
    },
    {
      title: "Hero League Hub",
      description: "Hub de calendário e eventos para comunidade Heroclix",
      github: "https://github.com/MarcioBADias/hero-league-hub",
      demo: "https://calendariohc.netlify.app/",
      tags: ["React", "Calendar", "Events"],
      image: heroLeagueImg,
    },
    {
      title: "TI Automação Comercial",
      description: "Landing page para empresa de automação comercial",
      github: "https://github.com/MarcioBADias/ti-automacao-comercial",
      demo: "https://ti-leadpage.netlify.app/",
      tags: ["Landing Page", "Business"],
      image: tiAutomacaoImg,
    },
    {
      title: "CheckSpeech AI",
      description: "Aplicação de análise de fala com inteligência artificial",
      github: "https://github.com/MarcioBADias/checkspeech",
      demo: "https://checkspeechai.netlify.app/",
      tags: ["AI", "Speech Recognition"],
      image: checkspeechImg,
    },
    {
      title: "Racquel Leads Mentor",
      description: "Plataforma de mentoria para geração de leads",
      github: "https://github.com/MarcioBADias/racquel-leads-mentor",
      demo: "https://lead-mentor.netlify.app/",
      tags: ["Mentoring", "Leads"],
      image: racquelImg,
    },
    {
      title: "SD Guia Fácil",
      description: "Guia de suporte técnico para SD Informática",
      github: "https://github.com/MarcioBADias/sd-guia-facil",
      demo: "https://guia-sd.netlify.app/",
      tags: ["Documentation", "Support"],
      image: sdGuiaImg,
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card hover:border-primary transition-all hover:shadow-lg overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-black"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
