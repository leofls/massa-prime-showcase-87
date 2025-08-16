import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/5511999999999";
  const instagramUrl = "https://instagram.com/massaesteticaautomotiva";

  return (
    <footer className="bg-premium-black-light text-pure-white py-12 border-t border-brand-blue-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-blue">Massa</span> Estética Automotiva
            </h3>
            <p className="text-off-white mb-6 leading-relaxed">
              Proteção premium para seu veículo com vitrificação cerâmica Dimension. 
              Qualidade, durabilidade e atendimento personalizado.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-hover transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center hover:bg-brand-blue-hover transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-brand-blue" />
              Endereço
            </h4>
            <address className="text-off-white not-italic leading-relaxed">
              Rua da Estética Automotiva, 123<br />
              Bairro Premium<br />
              São Paulo - SP<br />
              CEP: 01234-567
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-brand-blue" />
              Horário
            </h4>
            <div className="text-off-white space-y-1">
              <p>Segunda à Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 16h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-blue-light mt-8 pt-8 text-center">
          <p className="text-off-white">
            © 2024 Massa Estética Automotiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;