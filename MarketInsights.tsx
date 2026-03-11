import { Link } from "react-router-dom";
import logoSeid from "@/assets/logo-seid.png";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const solutionLinks = [
{ label: "Consultoria Estratégica", href: "/solucoes#servicos" },
{ label: "DNA Digital", href: "/solucoes#servicos" },
{ label: "Imersão Visual", href: "/solucoes#servicos" },
{ label: "Motor de Leads", href: "/solucoes#servicos" },
{ label: "Cérebro Digital (IA)", href: "/solucoes#servicos" },
{ label: "Desenvolvimento Web", href: "/solucoes#servicos" }];


const contentLinks = [
{ label: "Sobre Nós", href: "/#diferente" },
{ label: "Cases de Sucesso", href: "/#cases" },
{ label: "FAQ", href: "/#faq" },
{ label: "Blog (em breve)", href: "#", disabled: true }];


const linkClasses =
"font-body text-xs text-champagne/50 hover:text-gold transition-colors duration-300 block py-1.5 font-light";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {/* Manifesto */}
          <div className="lg:col-span-1">
            <img src={logoSeid} alt="SEID" className="h-10 object-contain mb-6" />
            <p className="font-display text-sm text-champagne/60 italic leading-relaxed mb-6">
              Transformamos identidade em posicionamento, posicionamento em
              desejo — e desejo em resultado.
            </p>
            <p className="font-display text-sm text-gold/70 italic mb-8">
              A presença que vende.
            </p>
            <div className="gold-line w-8 opacity-30 mb-4" />
            <p className="font-body text-[10px] tracking-[0.15em] text-champagne/25 uppercase">
              Especialistas no Mercado Imobiliário do Espírito Santo
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/60 font-semibold mb-6">
              Soluções
            </h4>
            <nav className="flex flex-col">
              {solutionLinks.map((link) =>
              <Link key={link.label} to={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              )}
            </nav>
          </div>

          {/* Conteúdo */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/60 font-semibold mb-6">
              Conteúdo
            </h4>
            <nav className="flex flex-col">
              {contentLinks.map((link) =>
              <Link
                key={link.label}
                to={link.href}
                className={`${linkClasses} ${link.disabled ? "opacity-30 pointer-events-none" : ""}`}>

                  {link.label}
                </Link>
              )}
            </nav>
          </div>

          {/* Fale com um Estrategista */}
          <div>
            <h4 className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/60 font-semibold mb-6">
              Fale com um Estrategista
            </h4>

            <a
              href="https://wa.me/5527999674069?text=Ol%C3%A1%2C%20vim%20pelo%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold/40 text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-background transition-all duration-500 font-body text-xs tracking-[0.15em] uppercase mb-6">

              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <div className="space-y-3 mt-2">
              <a
                href="mailto:falecom@seid.com.br"
                className="flex items-center gap-3 group">

                <Mail className="w-3.5 h-3.5 text-champagne/30 group-hover:text-gold transition-colors duration-300" />
                <span className="font-body text-xs text-champagne/50 group-hover:text-gold transition-colors duration-300 font-light">
                  falecom@seid.com.br
                </span>
              </a>
              <a
                href="https://instagram.com/seid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group">

                <Instagram className="w-3.5 h-3.5 text-champagne/30 group-hover:text-gold transition-colors duration-300" />
                <span className="font-body text-xs text-champagne/50 group-hover:text-gold transition-colors duration-300 font-light">
                  @seid.mkt
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/15">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-champagne/25 tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} SEID — Marketing Imobiliário 360°. Todos os direitos reservados.
          </p>
          <p className="font-body text-[10px] text-gold/30 tracking-wider">
            Segurança Contratual e Escopo Garantido.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;