import React, { useEffect, useRef, useState } from "react";

/**
 * Replaces the native scrollbar with a slim frosted-glass thumb that follows the
 * curve of the page frame. It fades out when idle and can be dragged.
 */
const Thumb: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<number | undefined>(undefined);
  const drag = useRef<{ startY: number; startScroll: number } | null>(null);
  const [m, setM] = useState({ ratio: 1, progress: 0, trackH: 0 });
  const [awake, setAwake] = useState(false);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setM({
        ratio: Math.min(1, window.innerHeight / doc.scrollHeight),
        progress: max > 0 ? window.scrollY / max : 0,
        trackH: trackRef.current?.clientHeight ?? 0,
      });
    };
    const onScroll = () => {
      update();
      setAwake(true);
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setAwake(false), 1200);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      ro.disconnect();
      window.clearTimeout(idleTimer.current);
    };
  }, []);

  const thumbH = Math.max(56, m.ratio * m.trackH);
  const travel = Math.max(1, m.trackH - thumbH);
  const top = m.progress * travel;
  const visible = awake || hover || dragging;

  // Block text selection for the whole page while the thumb is being dragged.
  useEffect(() => {
    if (!dragging) return;
    const prevent = (e: Event) => e.preventDefault();
    const body = document.body;
    const prevSelect = body.style.userSelect;
    const prevWebkit = body.style.webkitUserSelect;
    body.style.userSelect = "none";
    body.style.webkitUserSelect = "none";
    document.addEventListener("selectstart", prevent);
    window.getSelection()?.removeAllRanges();
    return () => {
      body.style.userSelect = prevSelect;
      body.style.webkitUserSelect = prevWebkit;
      document.removeEventListener("selectstart", prevent);
    };
  }, [dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { startY: e.clientY, startScroll: window.scrollY };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const next = drag.current.startScroll + ((e.clientY - drag.current.startY) / travel) * scrollable;
    window.scrollTo({ top: next, behavior: "instant" });
  };

  const onPointerUp = () => {
    drag.current = null;
    setDragging(false);
  };

  if (m.ratio >= 1 && m.trackH > 0) return null;

  return (
    <div
      ref={trackRef}
      aria-hidden
      className="fixed z-[85] pointer-events-none right-[13px] md:right-[17px] top-[26px] bottom-[26px] md:top-[38px] md:bottom-[38px] w-2"
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="scroll-thumb absolute right-0 w-2 rounded-full pointer-events-auto cursor-grab active:cursor-grabbing select-none touch-none"
        style={{
          height: thumbH,
          transform: `translateY(${top}px)`,
          opacity: visible ? 1 : 0,
          width: hover || dragging ? 10 : 8,
        }}
      />
    </div>
  );
};

/** Drawn only at 768px and wider; phones keep the browser's own scrolling. */
export const CurvedScrollbar: React.FC = () => {
  const [wide, setWide] = useState(() => window.matchMedia("(min-width: 768px)").matches);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setWide(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return wide ? <Thumb /> : null;
};
