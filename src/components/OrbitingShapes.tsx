import { motion } from "framer-motion";

const shapes = [
  { size: 12, orbit: 120, duration: 25, color: "hsl(184 78% 26% / 0.3)" },
  { size: 8, orbit: 180, duration: 35, color: "hsl(51 100% 50% / 0.2)" },
  { size: 16, orbit: 80, duration: 20, color: "hsl(184 78% 40% / 0.2)" },
  { size: 6, orbit: 150, duration: 30, color: "hsl(51 100% 50% / 0.15)" },
];

const OrbitingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 left-1/2 rounded-full"
        style={{
          width: s.size,
          height: s.size,
          backgroundColor: s.color,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: s.duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            transform: `translateX(${s.orbit}px)`,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      </motion.div>
    ))}
  </div>
);

export default OrbitingShapes;
