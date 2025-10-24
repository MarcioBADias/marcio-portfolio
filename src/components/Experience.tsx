import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Técnico de atendimento em helpdesk",
      company: "SD Informática",
      period: "Junho 2025 - Atual",
      type: "Trainee",
      description: [
        "Instalação e configuração de ambiente para o PDV da empresa",
        "Atendimento ao cliente e suporte via chat",
        "Acesso remoto aos periféricos e equipamentos",
      ],
    },
    {
      title: "Auxiliar Técnico de Informática",
      company: "TI Automação Comercial",
      period: "Fevereiro 2025 - Junho 2025",
      type: "",
      description: [
        "Instalação e configuração de terminais de atendimento e sistemas PDV",
        "Ajuste e configuração de ambiente de rede nos locais de produção",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                      {exp.type && (
                        <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
