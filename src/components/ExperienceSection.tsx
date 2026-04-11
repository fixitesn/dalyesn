import { motion } from "framer-motion";
import { Coffee, Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Coffee,
    title: "Starbucks (UK)",
    subtitle: "High-Pressure Operations & Customer Engineering",
    period: "2018–2021",
  },
  {
    icon: Building2,
    title: "Principality Stadium",
    subtitle: "Large-Scale Event Logistics",
    period: "2021–2022",
  },
  {
    icon: GraduationCap,
    title: "UE Poznań",
    subtitle: "Mastering the Future of Innovation Management",
    period: "2024–2026",
  },
];

// Knight-move: L-shaped slide-in (right then up)
const knightVariant = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? 120 : -120,
    y: 60,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const ExperienceSection = () => (
  <section className="relative py-32 px-6" id="experience">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-gradient-teal mb-4"
      >
        The Launchpad
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-accent font-display text-sm tracking-widest mb-16"
      >
        🚀 Experience Timeline
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              custom={i}
              variants={knightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-20"
            >
              <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <exp.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors">
                <span className="text-accent font-display text-xs tracking-widest">{exp.period}</span>
                <h3 className="font-display text-lg text-foreground mt-1">{exp.title}</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">{exp.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
