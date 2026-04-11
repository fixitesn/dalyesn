import { motion } from "framer-motion";
import OrbitingShapes from "./OrbitingShapes";
import esnLogo from "@/assets/esn-logo.png";

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HeroSection = () => {
  const name = "DalY";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <OrbitingShapes />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img src={esnLogo} alt="ESN Star Logo" className="w-20 h-20 mx-auto" />
        </motion.div>

        <div className="flex justify-center gap-2 mb-6">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-7xl md:text-9xl font-display font-bold text-gradient-teal inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-body mb-4"
        >
          Bridging British Engineering with Polish Innovation
        </motion.p>

        {/* Constellation line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex items-center justify-center gap-4 mb-10 text-sm text-muted-foreground font-body"
        >
          <span className="text-accent">UK 2018</span>
          <svg width="120" height="2" className="opacity-40">
            <motion.line
              x1="0" y1="1" x2="120" y2="1"
              stroke="hsl(184 78% 35%)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 1.5 }}
            />
          </svg>
          <span className="text-accent">Poznań 2026</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(184 78% 26% / 0.5)" }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToContact}
          className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase rounded-sm glow-teal"
        >
          Initiate Contact
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
