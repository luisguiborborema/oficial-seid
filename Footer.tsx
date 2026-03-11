import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  Fingerprint,
  LayoutGrid,
  Rocket,
  ChevronRight,
} from "lucide-react";

const phases = [
  {
    phase: "Fase 1",
    icon: Compass,
    title: "Inteligência & Diagnóstico",
    description:
      "Antes de qualquer execução, mergulhamos no cenário. Entregamos um mapa estratégico completo com oportunidades reais.",
    deliverables: [
      "Análise completa de presença digital",
      "Estudo de concorrência e benchmarks",
      "Mapa mental pós-reunião com plano tático",
      "Diagnóstico de posicionamento e persona",
      "Relatório de oportunidades de mercado",
    ],
  },
  {
    phase: "Fase 2",
    icon: Fingerprint,
    title: "Posicionamento & Identidade",
    description:
      "Construímos o DNA da sua marca. Do arquétipo ao tom de voz, cada elemento é projetado para diferenciar e conectar.",
    deliverables: [
      "Definição de arquétipos e personalidade",
      "Tom de voz e diretrizes de comunicação",
      "Guia de estilo visual completo",
      "Identidade visual aplicada ao digital",
      "Manual de aplicação para equipe",
    ],
  },
  {
    phase: "Fase 3",
    icon: LayoutGrid,
    title: "Atração & Conteúdo",
    description:
      "Ativamos a presença com conteúdo estratégico, audiovisual cinematográfico e landing pages de alta conversão.",
    deliverables: [
      "Planejamento editorial estratégico",
      "Produção audiovisual profissional",
      "Landing pages de alta conversão",
      "Criativos para tráfego pago",
      "Funil de conteúdo no perfil (Vendedor Invisível)",
    ],
  },
  {
    phase: "Fase 4",
    icon: Rocket,
    title: "Escala & Performance",
    description:
      "Automatizamos a captação e otimizamos cada centavo investido. Métricas claras e ROI rastreável.",
    deliverables: [
      "Gestão de Meta Ads com funil completo",
      "Automação de WhatsApp e atendimento",
      "Agentes de IA para qualificação de leads",
      "CRM configurado com esteira de vendas",
      "Dashboards de ROI e performance",
    ],
  },
];

const EngenhariaSeid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
            Profundidade Técnica
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            Engenharia SEID
          </h2>
          <p className="font-body text-lg text-champagne/60 max-w-2xl mx-auto font-light">
            Cada fase possui entregas definidas em contrato. Transparência total
            sobre o que você recebe em cada etapa.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-10">
          {phases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                className="border border-gold/15 hover:border-gold/40 transition-all duration-500 group"
              >
                <div className="md:flex">
                  {/* Left: phase info */}
                  <div className="p-8 md:p-10 md:w-1/2 border-b md:border-b-0 md:border-r border-gold/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center border border-gold/20 rounded-full group-hover:border-gold/50 transition-colors">
                        <Icon className="w-5 h-5 text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/50">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-champagne editorial-spacing mb-4">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-champagne/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Right: deliverables */}
                  <div className="p-8 md:p-10 md:w-1/2">
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/40 mb-5">
                      Entregas Técnicas
                    </p>
                    <ul className="space-y-3">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <ChevronRight className="w-3 h-3 text-gold/40 mt-1 shrink-0" />
                          <span className="font-body text-sm text-champagne/55 font-light leading-relaxed">
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngenhariaSeid;
