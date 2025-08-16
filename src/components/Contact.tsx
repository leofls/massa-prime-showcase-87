import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Instagram,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços.";
  const mapsUrl = "https://maps.google.com/?q=Massa+Estética+Automotiva";
  const instagramUrl = "https://instagram.com/massaesteticaautomotiva";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Estética Automotiva, 123\nBairro Premium, São Paulo - SP\nCEP: 01234-567"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda à Sexta: 8h às 18h\nSábado: 8h às 16h\nDomingo: Fechado"
    },
    {
      icon: Phone,
      title: "Contato",
      content: "(11) 99999-9999\ncontato@massaestetica.com.br"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-premium-black text-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Venha nos <span className="text-brand-blue">visitar</span>
          </h2>
          <p className="text-xl text-off-white max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu veículo com o carinho que ele merece
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-premium-black-light border-brand-blue-light">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pure-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-off-white whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-bold py-4 shine-effect"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco no WhatsApp
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-pure-white py-4"
                onClick={() => window.open(mapsUrl, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-pure-white py-4"
                onClick={() => window.open(instagramUrl, '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Siga no Instagram
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="h-full min-h-[400px] bg-muted border-brand-blue-light overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-blue-light to-brand-blue/20">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-brand-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-premium-black mb-2">
                    Nossa Localização
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Clique no botão abaixo para abrir no Google Maps
                  </p>
                  <Button 
                    className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white"
                    onClick={() => window.open(mapsUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver no Mapa
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;