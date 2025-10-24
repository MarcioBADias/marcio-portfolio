import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Smartphone } from "lucide-react";
import profileImg from "@/assets/profile.png";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Front-End",
      items: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
    },
    {
      icon: Server,
      title: "Back-End",
      items: ["Node JS", "API Restful", "MongoDB"],
    },
    {
      icon: Smartphone,
      title: "Soft Skills",
      items: ["Organização", "Trabalho em Equipe", "Priorização", "Criatividade", "Comunicação"],
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

          <div className="flex justify-center mb-8">
            <img 
              src={profileImg} 
              alt="Márcio Breno Augusto Dias"
              className="w-48 h-48 rounded-full object-cover border-4 border-primary"
            />
          </div>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Front-End Jr com experiência em React.js, Node.js e MongoDB, focado em criar 
            interfaces intuitivas e responsivas. Atuo no desenvolvimento de aplicações web, integração com 
            APIs e implementação de funcionalidades interativas. Tenho experiência com CRUD, consumo de 
            APIs externas e estilização com styled-components. Busco aprimorar minhas habilidades e 
            contribuir com soluções eficientes para projetos inovadores.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <skill.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-4 text-center">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground text-center">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Formação Acadêmica</h3>
              <div className="space-y-2">
                <p className="font-semibold">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-muted-foreground">Tecnólogo - UNOPAR</p>
                <p className="text-sm text-muted-foreground">2024 - 2026 (em andamento)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
