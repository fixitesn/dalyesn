import { motion } from "framer-motion";
import { Wrench, Lightbulb, Globe } from "lucide-react";

const traits = [
  { icon: Wrench, label: "Engineering", desc: "Problem-solving with precision" },
  { icon: Lightbulb, label: "Innovation", desc: "Turning vision into strategy" },
  { icon: Globe, label: "Global Mindset", desc: "UK roots, European horizons" },
];

const AboutSection = () => (
  <section className="relative py-32 px-6" id="about">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-gradient-teal mb-4"
      >
        The Strategy Board
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-accent font-display text-sm tracking-widest mb-12"
      >
        ♟️ Engineering is the board; Innovation Management is the move.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-foreground/80 font-body text-lg leading-relaxed max-w-3xl mb-16"
      >
        From the UK (2018–2022) to UE Poznań (2024–2026), the journey has been one of
        engineering foundations meeting innovation frontiers. Every experience, from
        high-pressure operations to academic mastery, has been a deliberate move on a
        much larger board.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8">
        {traits.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-card border border-border rounded-sm p-8 text-center group hover:border-primary/50 transition-colors"
          >
            <div className="w-16 h-16 mx-auto mb-4 hexagon bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-2">{t.label}</h3>
            <p className="text-muted-foreground font-body text-sm">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
