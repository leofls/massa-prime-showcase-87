import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Eye, 
  Shield, 
  Droplets, 
  Sparkles, 
  Zap,
  Heart,
  Home,
  Wrench,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Gostaria de conhecer mais sobre os serviços disponíveis.";

  const externalServices = [
    { icon: Sparkles, name: "Lavagem Premium" },
    { icon: Eye, name: "Restauração de Faróis" },
    { icon: Shield, name: "Proteção dos Plásticos Externos" },
    { icon: Droplets, name: "Tratamento dos Vidros" },
    { icon: Zap, name: "Lavagem a Seco" },
    { icon: Car, name: "Polimento de Pintura" },
    { icon: Shield, name: "Proteção da Pintura" },
    { icon: Car, name: "Brilho e Proteção dos Pneus" },
    { icon: Wrench, name: "Manutenção da Pintura" }
  ];

  const internalServices = [
    { icon: Heart, name: "Hidratação dos Bancos" },
    { icon: Home, name: "Higienização Interna" },
    { icon: Wrench, name: "Limpeza do Motor" }
  ];

  const products = [
    "Dimension 9H - Proteção Premium",
    "Dimension 7H - Proteção Avançada", 
    "Produtos Certificados",
    "Garantia Estendida"
  ];

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Main Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-4">
            Nossos <span className="text-brand-blue">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuidado completo para seu veículo, do exterior ao interior
          </p>
        </div>

        {/* External Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-premium-black mb-8 text-center">
            <Car className="w-8 h-8 inline-block mr-3 text-brand-blue" />
            Área Externa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {externalServices.map((service, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow duration-300 border-l-4 border-l-brand-blue">
                <service.icon className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-premium-black">{service.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Internal Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-premium-black mb-8 text-center">
            <Home className="w-8 h-8 inline-block mr-3 text-brand-blue" />
            Área Interna
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow duration-300 border-l-4 border-l-brand-blue">
                <service.icon className="w-10 h-10 text-brand-blue mx-auto mb-3" />
                <p className="font-medium text-premium-black">{service.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-premium-black mb-8 text-center">
            <Shield className="w-8 h-8 inline-block mr-3 text-brand-blue" />
            Nossos Produtos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="bg-brand-blue-light text-brand-blue px-4 py-2 text-sm font-medium"
              >
                {product}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-bold px-8 py-4 text-lg shine-effect"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;