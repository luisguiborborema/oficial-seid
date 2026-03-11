import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MapPin, Target, Lightbulb, ArrowRight } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    category: "Tendência",
    title: "O mercado imobiliário do ES cresce — mas poucos sabem comunicar isso",
    excerpt:
      "Enquanto o volume de lançamentos aumenta, a maioria dos corretores e incorporadoras ainda usa estratégias genéricas. Quem domina o posicionamento digital sai na frente.",
  },
  {
    icon: MapPin,
    category: "Regional",
    title: "Vitória e Vila Velha lideram a valorização — e exigem marketing à altura",
    excerpt:
      "Empreendimentos de alto padrão na Grande Vitória demandam uma abordagem visual e narrativa que reflita o nível do produto. Fotos de celular não vendem apartamentos de R$ 2 milhões.",
  },
  {
    icon: Target,
    category: "Estratégia",
    title: "Lead barato não é lead bom: a métrica que engana",
    excerpt:
      "Custo por lead baixo vira vaidade quando a conversão não acontece. O segredo está em qualificar antes do clique, com funis inteligentes e criativos que filtram.",
  },
  {
    icon: Lightbulb,
    category: "Insight",
    title: "Branding imobiliário: o diferencial que ninguém copia",
    excerpt:
      "Preço é copiável. Localização é fixa. Mas a percepção de marca que você constrói no digital é única — e é o que faz o cliente escolher você antes mesmo de visitar o imóvel.",
  },
];

const MarketInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="insights" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Autoridade & Conhecimento
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            Inteligência de Mercado
          </h2>
          <p className="font-body text-lg text-champagne/60 max-w-2xl mx-auto font-light">
            Insights exclusivos sobre o mercado imobiliário do Espírito Santo.
            Conhecimento que transforma decisões em resultados.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                className="border border-gold/15 p-8 md:p-10 hover:border-gold/40 transition-all duration-500 group"
              >
                {/* Category badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/50">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl text-champagne editorial-spacing mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-champagne/50 leading-relaxed font-light mb-6">
                  {item.excerpt}
                </p>

                {/* Read more */}
                <a
                  href="#diagnostico"
                  className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.3em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Saiba mais
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
