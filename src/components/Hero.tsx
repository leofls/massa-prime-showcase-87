import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Droplets, Star, TrendingUp } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Quero proteger meu veículo com vitrificação! Gostaria de mais informações.";

  const benefits = [
    { icon: Star, text: "Brilho intenso e duradouro" },
    { icon: Shield, text: "Proteção contra micro-riscos" },
    { icon: Droplets, text: "Resistência à água e sujeira" },
    { icon: TrendingUp, text: "Valorização na revenda" }
  ];

  const seals = [
    "Parceria oficial Dimension",
    "Garantia de até 5 anos",
    "Atendimento personalizado"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-premium-black to-premium-black-light">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCarImage} 
          alt="Carro premium com vitrificação cerâmica brilhante"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-premium-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white mb-6 leading-tight">
            Seu carro merece <span className="text-brand-blue">proteção premium</span>.
            <br />
            Você merece <span className="text-brand-blue">tranquilidade</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-off-white mb-8 font-medium">
            Vitrificação com até <span className="text-brand-blue font-bold">5 Anos de Proteção</span>
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-pure-white/10 backdrop-blur-sm rounded-lg p-4 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-pure-white" />
                </div>
                <span className="text-pure-white font-medium text-sm md:text-base">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-bold text-lg px-8 py-6 rounded-xl shine-effect animate-glow"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <Check className="w-5 h-5 mr-2" />
              Quero Proteger Meu Veículo
            </Button>
          </div>

          {/* Trust Seals */}
          <div className="flex flex-wrap justify-center gap-4">
            {seals.map((seal, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-pure-white/20 text-pure-white border-brand-blue-light px-4 py-2 text-sm font-medium"
              >
                <Check className="w-4 h-4 mr-2 text-brand-blue" />
                {seal}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;