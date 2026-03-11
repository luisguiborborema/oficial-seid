import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Eye, Clock, TrendingUp } from "lucide-react";

const cases = [
  {
    category: "Apresentação de Imóvel",
    title: "Residencial Vista Mar — Vitória",
    result: "Imóvel vendido em 12 dias após produção",
    views: "45K visualizações orgânicas",
  },
  {
    category: "Lifestyle Imobiliário",
    title: "Condomínio Serra Garden — Vila Velha",
    result: "3x mais visitas agendadas no primeiro mês",
    views: "78K visualizações com narrativa segmentada",
  },
  {
    category: "Depoimento de Corretor",
    title: "Ricardo Mendes — RM Incorporadora",
    result: "De 5 para 22 leads qualificados por semana",
    views: "32K visualizações no Instagram",
  },
  {
    category: "Apresentação de Imóvel",
    title: "Edifício Palazzo — Praia da Costa",
    result: "VGV de R$ 8M captado em campanha de 45 dias",
    views: "120K alcance total na campanha",
  },
  {
    category: "Lifestyle Imobiliário",
    title: "Alto Padrão — Enseada do Suá",
    result: "Percepção de valor elevada em 40%",
    views: "56K visualizações orgânicas",
  },
  {
    category: "Depoimento de Corretor",
    title: "Carolina Assis — Assis Imóveis de Luxo",
    result: "Posicionamento como referência em luxo",
    views: "28K visualizações no Reels",
  },
];

const VideoCard = ({
  item,
  index,
  isInView,
}: {
  item: (typeof cases)[0];
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.15 * index }}
    className="group"
  >
    {/* Video frame */}
    <div className="relative aspect-[9/16] bg-petrol-light rounded-2xl overflow-hidden border border-gold/15 shadow-[0_15px_50px_-12px_rgba(0,0,0,0.4)] hover:border-gold/40 transition-all duration-500">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center bg-background/30 backdrop-blur-sm cursor-pointer group-hover:border-gold group-hover:scale-110 transition-all duration-300">
          <Play className="w-5 h-5 text-gold ml-0.5" />
        </div>
      </div>

      {/* Category tag */}
      <div className="absolute top-4 left-4">
        <span className="font-body text-[9px] tracking-[0.2em] uppercase text-gold/70 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h4 className="font-display text-sm text-champagne mb-3 leading-snug">
          {item.title}
        </h4>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-gold/60" />
            <span className="font-body text-[10px] text-champagne/60 font-light">
              {item.result}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-3 h-3 text-gold/60" />
            <span className="font-body text-[10px] text-champagne/40 font-light">
              {item.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            A Experiência SEID
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            Narrativas que valorizam
          </h2>
          <p className="font-display text-lg text-champagne/40 italic max-w-xl mx-auto">
            Mais do que imagens, criamos atmosfera e desejo para o mercado de alto padrão.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {cases.map((item, index) => (
            <VideoCard key={item.title} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
