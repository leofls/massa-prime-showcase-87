import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Car, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Gostaria de agendar um serviço de vitrificação. Quando posso levar meu carro?";

  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Agende pelo WhatsApp",
      description: "Atendimento rápido e personalizado",
      color: "text-brand-blue"
    },
    {
      number: "2", 
      icon: Car,
      title: "Traga seu veículo",
      description: "Técnicas profissionais e produtos de alta performance",
      color: "text-brand-blue"
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Retire protegido",
      description: "Brilho e durabilidade por anos",
      color: "text-brand-blue"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-4">
            Proteção em <span className="text-brand-blue">3 passos simples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo otimizado para garantir máxima qualidade e conveniência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center border-2 border-transparent hover:border-brand-blue-light transition-all duration-300 group">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-brand-blue text-pure-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 pt-4">
                <div className="w-16 h-16 bg-brand-blue-light rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-premium-black mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connection Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-brand-blue-light"></div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-bold px-8 py-4 text-lg shine-effect"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agende pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;