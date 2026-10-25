import React, { useEffect } from "react";
import "./goldBackdrop.css";

/**
 * Backdrop for the gold edition: a slow morphing gold mesh behind the hero that
 * leans gently away from the cursor and fades as you scroll, plus fine film grain.
 */
export const GoldBackdrop: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => root.style.setProperty("--hs", Math.min(1, window.scrollY / 700).toFixed(3));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cursor lean, eased so the mesh trails the pointer.
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...target };
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.09;
      cur.y += (target.y - cur.y) * 0.09;
      root.style.setProperty("--px", ((cur.x / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--py", ((cur.y / window.innerHeight) * 2 - 1).toFixed(3));
      raf = requestAnimationFrame(loop);
    };
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="gold-layer" aria-hidden>
        <div className="mesh-lean">
          <div className="mesh-blob" />
        </div>
      </div>
      <div className="gold-grain" aria-hidden />
    </>
  );
};
