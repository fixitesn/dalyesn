import { useState } from "react";
import { motion } from "framer-motion";
import { Dribbble, Crown, Rocket } from "lucide-react";

const hobbies = [
  {
    icon: Dribbble,
    title: "Basketball",
    subtitle: "Team Dynamics & Velocity",
    desc: "Understanding how individual velocity contributes to collective momentum.",
  },
  {
    icon: Crown,
    title: "Chess",
    subtitle: "Strategic Foresight & Analysis",
    desc: "Every game is a lesson in calculated risk and long-term vision.",
  },
  {
    icon: Rocket,
    title: "Space",
    subtitle: "The Ultimate Frontier of Engineering",
    desc: "Where engineering ambition meets the infinite canvas of possibility.",
  },
];

const HobbiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6" id="hobbies">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-gradient-teal mb-4"
        >
          The Recreation Deck
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-accent font-display text-sm tracking-widest mb-16"
        >
          🏀 Where strategy meets passion
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-accent/40 transition-all cursor-default"
            >
              <motion.div
                animate={
                  hoveredIndex === i
                    ? { scale: [1, 1.08, 0.95, 1.05, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center"
              >
                <h.icon className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="font-display text-sm tracking-widest text-foreground mb-1">{h.title}</h3>
              <p className="text-accent font-display text-xs mb-3">{h.subtitle}</p>
              <p className="text-muted-foreground font-body text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
