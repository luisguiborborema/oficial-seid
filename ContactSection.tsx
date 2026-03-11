import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Crosshair, Magnet, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Diagnóstico",
    description: "Mapeamos sua presença digital, concorrência e oportunidades. Sem achismos — dados reais.",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Posicionamento",
    description: "Definimos quem você é no mercado: identidade, tom de voz e narrativa que diferencia.",
  },
  {
    number: "03",
    icon: Magnet,
    title: "Atração",
    description: "Ativamos canais com conteúdo estratégico, audiovisual premium e tráfego qualificado.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Escala",
    description: "Automatizamos, otimizamos e escalamos. Funis inteligentes que geram resultados previsíveis.",
  },
];

const CaminhoAutoridade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Método Simplificado
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            O Caminho para a Autoridade
          </h2>
          <p className="font-body text-lg text-champagne/60 max-w-2xl mx-auto font-light">
            Quatro etapas que transformam sua presença digital em uma máquina de
            posicionamento e resultados.
          </p>
        </motion.div>

        {/* 4 steps — horizontal on desktop */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gold/20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex flex-col items-center text-center px-4 relative"
              >
                {/* Circle node */}
                <div className="w-20 h-20 flex items-center justify-center border border-gold/30 rounded-full bg-background mb-6 relative z-10 group hover:border-gold/70 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Step number */}
                <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/40 mb-2">
                  Passo {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl text-champagne editorial-spacing mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-champagne/50 leading-relaxed font-light max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="#diagnostico"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-gold text-gold px-10 py-4 rounded-full hover:bg-gold hover:text-background transition-all duration-500 font-medium"
          >
            Iniciar Meu Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaminhoAutoridade;
