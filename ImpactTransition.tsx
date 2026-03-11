import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Eu preciso aparecer nos vídeos?",
    answer:
      "Focamos na sua essência. Se você não quer aparecer, criamos narrativas focadas no imóvel e na locução profissional. O importante é transmitir a experiência do empreendimento de forma envolvente e sofisticada.",
  },
  {
    question: "A SEID atende apenas a Grande Vitória?",
    answer:
      "Nosso foco físico é o mercado capixaba, mas nossas estratégias de branding e tráfego escalam para todo o Brasil. Já atendemos operações em outros estados com resultados expressivos.",
  },
  {
    question: "Quanto preciso investir em anúncios?",
    answer:
      "Isso é definido na Consultoria Estratégica, com base no seu VGV e objetivo de escala. Não trabalhamos com valores genéricos — cada operação tem uma recomendação personalizada.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Posicionamento é construção. O tráfego pago gera leads imediatos, mas o DNA Digital consolida sua autoridade a médio e longo prazo. Resultados tangíveis começam nas primeiras semanas; marca forte se constrói em meses.",
  },
  {
    question: "O contrato tem fidelidade?",
    answer:
      "Trabalhamos com transparência e foco em LTV. Nossos contratos são claros, com escopos definidos, entregáveis exatos e prazos — tudo pensado para sua segurança e confiança.",
  },
];

const FaqItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gold/15 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
    >
      <h3 className="font-display text-base md:text-lg text-champagne editorial-spacing pr-8 group-hover:text-gold transition-colors duration-300">
        {faq.question}
      </h3>
      <ChevronDown
        className={`w-4 h-4 text-gold/50 shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-60 pb-6" : "max-h-0"
      }`}
    >
      <p className="font-body text-sm text-champagne/50 leading-relaxed font-light pl-0 md:pl-1 pr-12">
        {faq.answer}
      </p>
    </div>
  </div>
);

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Clareza Estratégica
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-champagne editorial-spacing">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border border-gold/15 px-8 md:px-10"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
