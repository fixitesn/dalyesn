import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import esnLogo from "@/assets/esn-logo.png";

const FooterSection = () => (
  <footer className="relative py-24 px-6 border-t border-border" id="contact">
    <div className="max-w-4xl mx-auto text-center">
      <motion.img
        src={esnLogo}
        alt="ESN Star Logo"
        className="w-12 h-12 mx-auto mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-foreground/60 font-body italic text-lg mb-8 max-w-xl mx-auto"
      >
        "Innovation isn't just about the new; it's about the move you didn't see coming."
      </motion.p>

      <motion.a
        href="mailto:fixit@esn.pl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase rounded-sm glow-teal"
      >
        <Mail className="w-5 h-5" />
        fixit@esn.pl
      </motion.a>

      <p className="mt-12 text-muted-foreground font-body text-xs tracking-wider">
        © 2026 DalY — Built with precision
      </p>
    </div>
  </footer>
);

export default FooterSection;
