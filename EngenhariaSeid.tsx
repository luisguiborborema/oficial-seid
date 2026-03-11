import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClosingBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-petrol-light texture-linen">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="gold-line w-16 mx-auto mb-12 opacity-40" />

          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold/50 mb-8">
            O Manifesto SEID
          </p>

          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-champagne editorial-spacing leading-snug mb-4">
            Não deixe sua vitrine digital ser apenas mais uma.
          </h2>

          <p className="font-display text-xl md:text-3xl text-gold editorial-spacing italic mt-6 mb-14">
            SEID: A presença que vende.
          </p>

          <div className="gold-line w-10 mx-auto mb-14 opacity-30" />

          <a
            href="#diagnostico"
            className="inline-block font-body text-sm tracking-[0.3em] uppercase bg-gold text-background px-12 py-4 rounded-full hover:bg-champagne transition-colors duration-500 font-semibold"
          >
            Solicitar Meu Diagnóstico
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingBanner;
