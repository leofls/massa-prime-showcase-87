import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, MessageCircle } from "lucide-react";

const About = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Gostaria de conhecer melhor a Massa Estética Automotiva.";

  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Apaixonados por cuidar de veículos como se fossem nossos"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos premium e técnicas profissionais certificadas"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Personalizado e focado na satisfação do cliente"
    }
  ];

  return (
    <section className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-6">
              Aqui é <span className="text-brand-blue">Massa!</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos apaixonados por cuidar de veículos. Na Massa Estética Automotiva, 
              oferecemos serviços de estética automotiva premium e vitrificação com as 
              melhores técnicas e produtos do mercado.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Seja carro, moto ou embarcação, tratamos cada bem como se fosse nosso, 
              garantindo resultados que superam expectativas e proteção duradoura.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="w-12 h-12 bg-brand-blue-light rounded-full flex items-center justify-center mx-auto md:mx-0 mb-3">
                    <value.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-premium-black mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-bold px-8 py-4 shine-effect"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-brand-blue-light to-brand-blue/10 border-brand-blue-light">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-pure-white" />
                </div>
                <h3 className="text-2xl font-bold text-premium-black mb-4">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Proporcionar proteção premium e cuidado excepcional para seu veículo, 
                  combinando tecnologia avançada com atendimento personalizado para 
                  resultados que fazem a diferença.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;