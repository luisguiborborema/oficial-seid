import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  Fingerprint,
  LayoutGrid,
  Video,
  Camera,
  Globe,
  Rocket,
  Bot,
  BrainCircuit,
  BarChartBig,
} from "lucide-react";

const steps = [
  { step: "01", title: "Diagnóstico", subtitle: "Consultoria Estratégica", icon: Compass },
  { step: "02", title: "Identidade", subtitle: "DNA Digital", icon: Fingerprint },
  { step: "03", title: "Presença", subtitle: "Vitrine Impactante", icon: LayoutGrid },
  { step: "04", title: "Qualificação", subtitle: "Vendedor Invisível", icon: Video },
  { step: "05", title: "Audiovisual", subtitle: "Imersão Visual", icon: Camera },
  { step: "06", title: "Digital", subtitle: "Presença Digital Sólida", icon: Globe },
  { step: "07", title: "Escala", subtitle: "Motor de Leads", icon: Rocket },
  { step: "08", title: "Automação", subtitle: "Piloto Automático", icon: Bot },
  { step: "09", title: "Inteligência", subtitle: "Cérebro Digital", icon: BrainCircuit },
  { step: "10", title: "Performance", subtitle: "Inteligência de Dados", icon: BarChartBig },
];

const MetodoSeid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" ref={ref} className="py-24 md:py-32 bg-secondary texture-linen">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nossa Jornada
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            O Método SEID 360°
          </h2>
          <p className="font-body text-lg text-champagne/60 max-w-2xl mx-auto font-light">
            Do primeiro diagnóstico até a escala total. Cada etapa é construída
            sobre a anterior, formando um sistema de marketing completo.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:py-6`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ml-14 md:ml-0 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="border border-gold/15 p-6 hover:border-gold/40 transition-colors duration-500 group bg-background/40 backdrop-blur-sm">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/50">
                          Etapa {item.step}
                        </span>
                      </div>
                      <h3 className="font-display text-lg text-champagne editorial-spacing mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-gold/60 italic font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 w-12 h-12 flex items-center justify-center border border-gold/30 rounded-full bg-background group-hover:border-gold/60 transition-colors">
                    <Icon className="w-5 h-5 text-gold opacity-70" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="/solucoes"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-gold text-gold px-10 py-4 rounded-full hover:bg-gold hover:text-background transition-all duration-500 font-medium"
          >
            Ver Todas as Soluções
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodoSeid;
