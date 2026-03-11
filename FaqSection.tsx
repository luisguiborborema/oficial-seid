import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";

const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

const formSchema = z.object({
  nome: z.string().trim().min(1, "Preencha seu nome completo").max(60, "Máximo de 60 caracteres"),
  whatsapp: z.string().regex(phoneRegex, "Informe um número válido: (00) 00000-0000"),
  instagram: z.string().trim().min(1, "Preencha seu @ do Instagram").max(30, "Máximo de 30 caracteres"),
  atuacao: z.string().min(1, "Selecione seu tipo de atuação"),
  nicho: z.string().min(1, "Selecione seu nicho principal"),
  publicoAlvo: z.string().trim().min(1, "Descreva seu público-alvo").max(200, "Máximo de 200 caracteres"),
  investeTrafego: z.string().min(1, "Selecione uma opção"),
  maiorIncomodo: z.string().trim().min(1, "Descreva sua maior dor ou objetivo").max(500, "Máximo de 500 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const DiagnosticForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [form, setForm] = useState<Partial<FormData>>({});
  const [attempted, setAttempted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    update("whatsapp", formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-gold/30 py-3 font-body text-sm text-champagne placeholder:text-champagne/30 focus:outline-none focus:border-gold transition-colors duration-300";

  const selectClasses =
    "w-full bg-transparent border-b border-gold/30 py-3 font-body text-sm text-champagne focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer";

  const errorClass = "font-body text-[10px] text-red-400 mt-1.5";

  const charCount = (field: keyof FormData, max: number) => {
    const len = (form[field] || "").length;
    return len > 0 ? (
      <span className={`font-body text-[10px] mt-1 block text-right ${len >= max ? "text-red-400" : "text-champagne/25"}`}>
        {len}/{max}
      </span>
    ) : null;
  };

  return (
    <section id="diagnostico" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Funil de Pré-Qualificação
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-champagne editorial-spacing mb-4">
            Diagnóstico Gratuito
          </h2>
          <p className="font-body text-sm text-champagne/50 font-light max-w-md mx-auto">
            Leva cerca de 2 min — Analisamos seu perfil pessoalmente antes de retornar.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-gold/20 px-8"
          >
            <span className="text-gold text-4xl block mb-6">✦</span>
            <h3 className="font-display text-2xl text-champagne editorial-spacing mb-4">
              Diagnóstico recebido com sucesso
            </h3>
            <p className="font-body text-sm text-champagne/60 font-light leading-relaxed max-w-md mx-auto">
              Nossa equipe analisará seu perfil e entraremos em contato via WhatsApp em breve.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8"
            noValidate
          >
            {/* Nome & WhatsApp */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                  Nome Completo <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className={inputClasses}
                  maxLength={60}
                  value={form.nome || ""}
                  onChange={(e) => update("nome", e.target.value)}
                />
                {charCount("nome", 60)}
                {(attempted || errors.nome) && errors.nome && <p className={errorClass}>{errors.nome}</p>}
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                  WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={inputClasses}
                  value={form.whatsapp || ""}
                  onChange={handlePhoneChange}
                />
                {(attempted || errors.whatsapp) && errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
              </div>
            </div>

            {/* Instagram */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                @ do Instagram <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="@seuinstagram"
                className={inputClasses}
                maxLength={30}
                value={form.instagram || ""}
                onChange={(e) => update("instagram", e.target.value)}
              />
              {charCount("instagram", 30)}
              {(attempted || errors.instagram) && errors.instagram && <p className={errorClass}>{errors.instagram}</p>}
            </div>

            {/* Atuação & Nicho */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                  Tipo de Atuação <span className="text-red-400">*</span>
                </label>
                <select
                  className={selectClasses}
                  value={form.atuacao || ""}
                  onChange={(e) => update("atuacao", e.target.value)}
                >
                  <option value="" className="bg-background">Selecione</option>
                  <option value="autonomo" className="bg-background">Corretor Autônomo</option>
                  <option value="imobiliaria" className="bg-background">Imobiliária</option>
                  <option value="incorporadora" className="bg-background">Incorporadora / Construtora</option>
                  <option value="loteadora" className="bg-background">Loteadora</option>
                </select>
                {(attempted || errors.atuacao) && errors.atuacao && <p className={errorClass}>{errors.atuacao}</p>}
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                  Nicho Principal <span className="text-red-400">*</span>
                </label>
                <select
                  className={selectClasses}
                  value={form.nicho || ""}
                  onChange={(e) => update("nicho", e.target.value)}
                >
                  <option value="" className="bg-background">Selecione</option>
                  <option value="pronto" className="bg-background">Imóveis Prontos</option>
                  <option value="lancamento" className="bg-background">Lançamentos</option>
                  <option value="alto-padrao" className="bg-background">Alto Padrão / Luxo</option>
                  <option value="loteamento" className="bg-background">Loteamentos</option>
                  <option value="misto" className="bg-background">Misto</option>
                </select>
                {(attempted || errors.nicho) && errors.nicho && <p className={errorClass}>{errors.nicho}</p>}
              </div>
            </div>

            {/* Público-alvo */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                Público-alvo <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Investidores, famílias de classe A, primeiro imóvel..."
                className={inputClasses}
                maxLength={200}
                value={form.publicoAlvo || ""}
                onChange={(e) => update("publicoAlvo", e.target.value)}
              />
              {charCount("publicoAlvo", 200)}
              {(attempted || errors.publicoAlvo) && errors.publicoAlvo && <p className={errorClass}>{errors.publicoAlvo}</p>}
            </div>

            {/* Tráfego */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                Já investe em tráfego pago? <span className="text-red-400">*</span>
              </label>
              <select
                className={selectClasses}
                value={form.investeTrafego || ""}
                onChange={(e) => update("investeTrafego", e.target.value)}
              >
                <option value="" className="bg-background">Selecione</option>
                <option value="nao" className="bg-background">Não invisto atualmente</option>
                <option value="ate-3k" className="bg-background">Sim, até R$ 3.000/mês</option>
                <option value="3k-10k" className="bg-background">Sim, entre R$ 3.000 e R$ 10.000/mês</option>
                <option value="acima-10k" className="bg-background">Sim, acima de R$ 10.000/mês</option>
              </select>
              {(attempted || errors.investeTrafego) && errors.investeTrafego && <p className={errorClass}>{errors.investeTrafego}</p>}
            </div>

            {/* Maior incômodo */}
            <div>
              <label className="font-body text-xs tracking-[0.2em] uppercase text-gold/60 mb-2 block">
                Qual o maior incômodo hoje? <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="O que mais incomoda você na sua operação de marketing atualmente?"
                className={`${inputClasses} border border-gold/20 rounded-sm p-4 resize-none`}
                maxLength={500}
                value={form.maiorIncomodo || ""}
                onChange={(e) => update("maiorIncomodo", e.target.value)}
              />
              {charCount("maiorIncomodo", 500)}
              {(attempted || errors.maiorIncomodo) && errors.maiorIncomodo && <p className={errorClass}>{errors.maiorIncomodo}</p>}
            </div>

            {/* Note */}
            <div className="border-t border-gold/10 pt-6">
              <p className="font-body text-[11px] text-champagne/35 italic text-center leading-relaxed">
                ✦ Todos os campos são obrigatórios. Cada formulário é analisado pessoalmente pelo nosso time estratégico.
              </p>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-block font-body text-sm tracking-[0.3em] uppercase bg-gold text-background px-12 py-4 rounded-full hover:bg-champagne transition-colors duration-500 font-semibold w-full md:w-auto cursor-pointer"
              >
                Enviar Diagnóstico
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default DiagnosticForm;
