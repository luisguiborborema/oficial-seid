import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/seid.mkt", handle: "@seid.mkt" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
      </svg>
    ),
    label: "TikTok",
    href: "https://tiktok.com/@seid",
    handle: "@seid",
  },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/5527999674069?text=Ol%C3%A1%2C%20vim%20pelo%20site", handle: "(27) 99967-4069" },
  { icon: Mail, label: "E-mail", href: "mailto:falecom@seid.com.br", handle: "falecom@seid.com.br" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" ref={ref} className="py-24 md:py-32 bg-petrol-light texture-linen">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Fale Conosco
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-champagne editorial-spacing">
            Entre em contato
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {socials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-5 border border-gold/20 p-6 hover:border-gold/50 transition-colors duration-500 group"
              >
                <span className="text-gold opacity-60 group-hover:opacity-100 transition-opacity">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-champagne/80 font-light">
                    {item.handle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
