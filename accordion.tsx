import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const qualifies = [
  "Incorporadoras e construtoras que investem em posicionamento",
  "Imobiliárias que buscam um sistema de geração de demanda",
  "Loteadoras que querem escalar com método e constância",
  "Corretores de alto padrão que entendem branding como investimento",
];

const disqualifies = [
  "Quem busca soluções baratas e improvisadas",
  "Quem quer resultado sem investir em estrutura",
  "Quem trata marketing como despesa, não como alavanca",
  "Quem não está disposto a construir marca a longo prazo",
];

const WhoWeServe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pra-quem"
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
            Qualificação
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing">
            Pra quem a SEID faz sentido
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-0">
          {/* Qualifies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:pr-12 md:border-r border-gold/20"
          >
            <h3 className="font-display text-lg text-gold editorial-spacing mb-8 italic">
              Fazemos sentido para você se...
            </h3>
            <ul className="space-y-5">
              {qualifies.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-gold mt-1 text-xs">✦</span>
                  <span className="font-body text-sm text-champagne/80 leading-relaxed font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Disqualifies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:pl-12"
          >
            <h3 className="font-display text-lg text-champagne/40 editorial-spacing mb-8 italic">
              Não fazemos sentido para quem...
            </h3>
            <ul className="space-y-5">
              {disqualifies.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-champagne/20 mt-1 text-xs">✦</span>
                  <span className="font-body text-sm text-champagne/30 leading-relaxed font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            to="/solucoes"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-gold text-gold px-10 py-4 rounded-full hover:bg-gold hover:text-background transition-all duration-500 font-medium"
          >
            Conheça Nossas Soluções
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
