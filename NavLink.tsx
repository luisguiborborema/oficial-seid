import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ImpactTransition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="gold-line w-16 mx-auto mb-12 opacity-40" />
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-champagne editorial-spacing leading-snug italic">
            O marketing imobiliário de alto padrão não admite improvisos.
          </h2>
          <p className="font-display text-2xl md:text-4xl lg:text-5xl text-gold editorial-spacing leading-snug mt-4">
            É hora de transformar sua operação em um sistema de vendas.
          </p>
          <div className="gold-line w-16 mx-auto mt-12 opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactTransition;
