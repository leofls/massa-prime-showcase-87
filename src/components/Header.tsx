import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços de vitrificação.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pure-white/95 backdrop-blur-md border-b border-brand-blue-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-premium-black">
              <span className="text-brand-blue">Massa</span> Estética Automotiva
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-premium-black hover:text-brand-blue transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-premium-black hover:text-brand-blue transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-premium-black hover:text-brand-blue transition-colors">
              Contato
            </a>
          </nav>

          {/* WhatsApp CTA */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default"
              className="bg-brand-blue hover:bg-brand-blue-hover text-pure-white font-semibold shine-effect"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Fale no</span> WhatsApp
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-brand-blue-light bg-pure-white">
            <div className="py-4 space-y-2">
              <a 
                href="#servicos" 
                className="block px-4 py-2 text-premium-black hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className="block px-4 py-2 text-premium-black hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="block px-4 py-2 text-premium-black hover:text-brand-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;