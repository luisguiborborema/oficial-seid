import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoSeid from "@/assets/logo-seid.png";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href === "#" || href === "") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const menuLinks = [
    { label: "Home", href: "#" },
    { label: "Sobre", href: "#diferente" },
    { label: "Soluções", href: "/solucoes" },
    { label: "Cases", href: "#cases" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Arquitetura moderna de luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-8">
              <img src={logoSeid} alt="SEID" className="h-10 object-contain" />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-champagne/70 hover:text-gold transition-colors duration-300 p-2"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {menuLinks.map((link) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-2xl tracking-widest uppercase text-champagne/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-8"
              >
                <button
                  onClick={() => handleNavClick("#diagnostico")}
                  className="font-body text-sm tracking-[0.3em] uppercase bg-gold text-background px-10 py-4 rounded-full hover:bg-champagne transition-colors duration-500 font-semibold"
                >
                  Solicitar Diagnóstico
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top nav bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 md:px-16 h-[72px] md:h-auto md:py-8">
        <img src={logoSeid} alt="SEID" className="h-7 md:h-10 object-contain" />

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Abrir menu"
        >
          <span className="block w-5 h-[1px] bg-champagne/70" />
          <span className="block w-5 h-[1px] bg-champagne/70" />
          <span className="block w-5 h-[1px] bg-champagne/70" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-champagne/70">
          <a href="#por-que-erram" className="hover:text-gold transition-colors duration-300">Método</a>
          <a href="#diferente" className="hover:text-gold transition-colors duration-300">Diferencial</a>
          <Link to="/solucoes" className="hover:text-gold transition-colors duration-300">Soluções</Link>
          <a href="#pra-quem" className="hover:text-gold transition-colors duration-300">Pra Quem</a>
          <a href="#diagnostico" className="hover:text-gold transition-colors duration-300">Contato</a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="gold-line w-12 md:w-16 mx-auto mb-6 md:mb-8" />
          <p className="font-body text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase text-gold mb-6 md:mb-8">
            Agência de Marketing Imobiliário 360°
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-champagne editorial-spacing font-medium mb-8"
        >
          Marketing imobiliário 360°{" "}
          <span className="italic text-gold">para quem quer vender mais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-base md:text-lg text-champagne/70 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Estratégia, tráfego, conteúdo, vídeo e posicionamento integrados em um
          único sistema, pensado para gerar desejo, autoridade e vendas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#diagnostico"
            className="inline-block font-body text-sm tracking-[0.3em] uppercase bg-gold text-background px-10 py-4 rounded-full hover:bg-champagne transition-colors duration-500 font-semibold"
          >
            Quero um Diagnóstico
          </a>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="gold-line w-full opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
