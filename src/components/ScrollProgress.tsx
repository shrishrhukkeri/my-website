import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin bar at the top of the viewport showing reading progress. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-accent to-accent-2"
    />
  );
};
