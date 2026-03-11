import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChartBig, FolderOpen, Headset } from "lucide-react";

const features = [
  {
    icon: BarChartBig,
    title: "Dashboard de Performance",
    description:
      "Cada parceiro possui um painel exclusivo com métricas em tempo real: leads gerados, custo por lead, taxa de conversão e ROI. Dados claros para decisões inteligentes.",
  },
  {
    icon: FolderOpen,
    title: "Drive de Ativos Exclusivo",
    description:
      "Todos os materiais produzidos — vídeos, fotos, artes e documentos estratégicos — ficam organizados em um Drive privado, acessível a qualquer momento.",
  },
  {
    icon: Headset,
    title: "Atendimento Dedicado",
    description:
      "Canal direto com o time estratégico. Reuniões de alinhamento recorrentes e suporte prioritário para decisões rápidas.",
  },
];

const ExperienciaCliente = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary texture-linen">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Exclusividade
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-champagne editorial-spacing mb-6">
            Experiência do Cliente
          </h2>
          <p className="font-body text-base text-champagne/60 max-w-xl mx-auto font-light">
            Ser parceiro da SEID vai além do marketing. Cada cliente tem acesso
            a ferramentas exclusivas de acompanhamento e gestão.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 * index }}
                className="border border-gold/20 p-8 text-center hover:border-gold/50 transition-colors duration-500 group bg-background/30 backdrop-blur-sm"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-gold/20 rounded-full mx-auto mb-6 group-hover:border-gold/50 transition-colors">
                  <Icon className="w-6 h-6 text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-lg text-champagne editorial-spacing mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-champagne/50 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienciaCliente;
