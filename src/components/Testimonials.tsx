import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      vehicle: "BMW X3 2022",
      rating: 5,
      comment: "Impressionante! A vitrificação ficou perfeita e o brilho durou exatamente como prometido. Já faz 8 meses e o carro ainda parece novo saído da concessionária.",
      initials: "CS"
    },
    {
      name: "Marina Santos",
      vehicle: "Audi A4 2021",
      rating: 5,
      comment: "Atendimento excepcional e resultado impecável. A proteção realmente funciona - chuva, poeira, nada gruda no carro. Recomendo de olhos fechados!",
      initials: "MS"
    },
    {
      name: "Roberto Oliveira",
      vehicle: "Porsche 911 2023",
      rating: 5,
      comment: "Profissionais de primeira linha! Cuidaram do meu Porsche com todo carinho. O resultado superou minhas expectativas. Vitrificação Dimension é outro nível.",
      initials: "RO"
    },
    {
      name: "Ana Costa",
      vehicle: "Mercedes C300 2022",
      rating: 5,
      comment: "Melhor investimento que fiz no meu carro! Além da proteção, a facilidade para limpar é incrível. Água e sabão bastam para deixar impecável.",
      initials: "AC"
    }
  ];

  const results = [
    { metric: "100%", label: "Clientes Satisfeitos" },
    { metric: "5 anos", label: "Garantia Máxima" },
    { metric: "500+", label: "Veículos Protegidos" },
    { metric: "24h", label: "Tempo de Aplicação" }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-black mb-4">
            Nossos clientes <span className="text-brand-blue">aprovam!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados que falam por si só e clientes que recomendam
          </p>
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <Card key={index} className="p-6 text-center border-2 border-brand-blue-light">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                {result.metric}
              </div>
              <div className="text-sm font-medium text-premium-black">
                {result.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative border-l-4 border-l-brand-blue">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-blue-light" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarFallback className="bg-brand-blue text-pure-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-premium-black">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-brand-blue">
                    {testimonial.vehicle}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-premium-black mb-8">
            Veja a <span className="text-brand-blue">transformação</span>
          </h3>
          <Card className="p-8 bg-gradient-to-r from-brand-blue-light to-brand-blue/10">
            <p className="text-lg text-premium-black mb-4">
              📸 <strong>Fotos e vídeos de antes/depois disponíveis no WhatsApp!</strong>
            </p>
            <p className="text-muted-foreground">
              Entre em contato para ver exemplos reais dos nossos trabalhos e resultados impressionantes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;