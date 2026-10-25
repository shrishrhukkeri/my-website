import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Fades and lifts content into place the first time it scrolls into view. */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 28, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease, delay }}
  >
    {children}
  </motion.div>
);

interface RevealTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

/** Word-by-word masked reveal, used for section titles. */
export const RevealText: React.FC<RevealTextProps> = ({ text, className, wordClassName, delay = 0 }) => (
  <span className={className} aria-label={text}>
    {text.split(" ").map((word, i, words) => (
      // The in-view trigger lives on the (unclipped) wrapper; the inner word slides up inside the mask.
      <motion.span
        key={i}
        aria-hidden
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="inline-block overflow-hidden align-bottom pb-[0.3em] -mb-[0.3em]"
      >
        <motion.span
          className={`inline-block ${wordClassName ?? ""}`}
          variants={{
            hidden: { y: "115%" },
            show: { y: 0, transition: { duration: 0.8, ease, delay: delay + i * 0.07 } },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      </motion.span>
    ))}
  </span>
);

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

/** Counts from zero to `to` when scrolled into view. */
export const CountUp: React.FC<CountUpProps> = ({ to, decimals = 0, duration = 1.8, prefix = "", suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration, ease, onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/** Nudges its child toward the cursor, then springs back. */
export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.12, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Glass card with a cursor-tracked glow and gradient edge (see .spotlight in index.css). */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight glass rounded-[28px] ${className ?? ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
};

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  center?: boolean;
}

/** Shared section header: gradient eyebrow, masked-reveal title with a gradient accent. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, accent, subtitle, center }) => (
  <div className={`space-y-4 ${center ? "text-center" : "text-left"}`}>
    <Reveal>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <div className="w-10 h-[2.5px] bg-gradient-to-r from-accent to-accent-2" />
        <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent-text">
          {eyebrow}
        </span>
      </div>
    </Reveal>
    <h2 className="text-3xl sm:text-[2.6rem] font-display font-bold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
      <RevealText text={title} />
      {accent && (
        <>
          {" "}
          <RevealText text={accent} wordClassName="text-gradient" delay={0.15} />
        </>
      )}
    </h2>
    {subtitle && (
      <Reveal delay={0.15}>
        <p className={`text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);
