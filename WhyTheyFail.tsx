import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  "https://player.mediadelivery.net/embed/609046/2b16eb98-dc29-4e7f-8066-3aba1b53f830?autoplay=false",
  "https://player.mediadelivery.net/embed/609046/24f79003-c717-4a1a-9fb9-bea32eeda8aa?autoplay=false",
  "https://player.mediadelivery.net/embed/609046/6049d0d2-71e2-492e-b041-6551407b13ef?autoplay=false",
];

const VideoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Portfólio
          </p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-champagne editorial-spacing mb-6">
            Narrativas que valorizam
          </h2>
          <p className="font-display text-lg text-champagne/40 italic max-w-xl mx-auto">
            Mais do que imagens, criamos atmosfera e desejo para o mercado de alto padrão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videos.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-gold/15 shadow-[0_15px_50px_-12px_rgba(0,0,0,0.4)]" style={{ aspectRatio: '16/9' }}
            >
              <iframe
                src={url}
                className="absolute inset-0 w-full h-full object-cover"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
