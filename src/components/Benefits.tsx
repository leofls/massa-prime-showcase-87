import { Card } from "@/components/ui/card";
import { Shield, Clock, Droplets, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Durabilidade extrema",
      description: "até 5 anos de proteção",
      detail: "Nossa vitrificação Dimension 9H oferece proteção duradoura que mantém seu veículo impecável por anos."
    },
    {
      icon: Shield,
      title: "Proteção avançada",
      description: "riscos, raios UV, chuva ácida, manchas",
      detail: "Barreira invisible que protege contra todos os elementos que podem danificar a pintura do seu carro."
    },
    {
      icon: Droplets,
      title: "Facilidade de limpeza",
      description: "sujeira não adere facilmente",
      detail: "Superfície hidrofóbica que repele água, lama e sujeira, facilitando a manutenção diária."
    },
    {
      icon: TrendingUp,
      title: "Valorização na revenda",
      description: "aparência impecável",
      detail: "Pintura protegida mantém o valor do veículo e impressiona na hora da venda."
    }
  ];

  return (
    <section className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-4">
            Por que escolher a <span className="text-brand-blue">Massa Estética Automotiva?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta e expertise profissional para proteger seu investimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 text-center border-2 border-transparent hover:border-brand-blue-light transition-all duration-300 group hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-hover rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-pure-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-premium-black mb-2">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-brand-blue font-semibold mb-4">
                {benefit.description}
              </p>
              
              {/* Detail */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;