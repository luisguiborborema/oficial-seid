import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, Users, BarChart3 } from "lucide-react";

const results = [
  {
    metric: "R$ 12M",
    label: "em VGV gerado em 30 dias",
    icon: TrendingUp,
  },
  {
    metric: "–67%",
    label: "no custo por lead qualificado",
    icon: Target,
  },
  {
    metric: "3.2x",
    label: "mais visitas agendadas via tráfego",
    icon: Users,
  },
  {
    metric: "+420%",
    label: "de aumento em engajamento orgânico",
    icon: BarChart3,
  },
];


const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" ref={ref} className="py-24 md:py-32 bg-petrol-light texture-linen">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Prova Social
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing">
            Resultados que falam por nós
          </h2>
        </motion.div>

        {/* Results grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {results.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="border border-gold/15 p-6 md:p-8 text-center hover:border-gold/40 transition-colors duration-500"
              >
                <Icon className="w-5 h-5 text-gold/50 mx-auto mb-4" />
                <p className="font-display text-3xl md:text-4xl text-champagne font-medium mb-2">
                  {item.metric}
                </p>
                <p className="font-body text-[11px] text-champagne/45 leading-relaxed font-light">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
