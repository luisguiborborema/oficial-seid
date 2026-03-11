import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    icon: "◇",
    title: "Estratégia antes da execução",
    description:
      "Nenhuma peça é criada sem um plano claro. Entendemos o mercado, o posicionamento e os objetivos antes de executar.",
  },
  {
    icon: "▽",
    title: "Audiovisual que gera desejo",
    description:
      "Vídeos, fotos e conteúdos que elevam a percepção de valor do empreendimento e criam conexão emocional com o público.",
  },
  {
    icon: "○",
    title: "Funis inteligentes",
    description:
      "Do primeiro clique ao agendamento. Estruturamos jornadas de compra com automação, remarketing e nutrição estratégica.",
  },
  {
    icon: "□",
    title: "Alívio operacional",
    description:
      "Assumimos a operação de marketing por completo. Você foca em vender, nós cuidamos de tudo que gera demanda.",
  },
];

const WhySeid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferente" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nosso Método
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            Por que a SEID é diferente
          </h2>
          <p className="font-body text-lg text-champagne/60 max-w-2xl mx-auto font-light">
            Marketing como sistema. Não como lista de serviços avulsos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="border border-gold/20 p-8 md:p-10 hover:border-gold/50 transition-colors duration-500 group"
            >
              <span className="text-gold text-2xl mb-6 block opacity-60 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              <h3 className="font-display text-xl text-champagne mb-3 editorial-spacing">
                {item.title}
              </h3>
              <p className="font-body text-sm text-champagne/60 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <a
            href="#diagnostico"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-gold text-gold px-10 py-4 rounded-full hover:bg-gold hover:text-background transition-all duration-500 font-medium"
          >
            Solicitar Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySeid;
