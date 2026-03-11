import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const errors = [
  {
    number: "01",
    title: "Tráfego sem filtro",
    description:
      "Investir em anúncios sem estratégia de qualificação é queimar dinheiro. Leads baratos não são leads bons.",
  },
  {
    number: "02",
    title: "Marketing fragmentado",
    description:
      "Contratar freelancers avulsos para cada peça gera ruído visual, mensagens desconexas e zero posicionamento.",
  },
  {
    number: "03",
    title: "Conteúdo sem intenção",
    description:
      "Postar por postar não constrói autoridade. Sem estratégia editorial, seu conteúdo não converte — apenas existe.",
  },
  {
    number: "04",
    title: "Falta de constância",
    description:
      "Campanhas pontuais não criam marca. Quem aparece só quando precisa vender, perde para quem está sempre presente.",
  },
];

const WhyTheyFail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="por-que-erram"
      ref={ref}
      className="py-24 md:py-32 bg-petrol-light texture-linen"
    >
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Diagnóstico do Mercado
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing">
            Por que a maioria erra
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {errors.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-5xl text-gold/20 font-light leading-none shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-champagne mb-3 editorial-spacing">
                    {item.title}
                  </h3>
                  <div className="gold-line w-8 mb-4 opacity-50" />
                  <p className="font-body text-sm text-champagne/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTheyFail;
