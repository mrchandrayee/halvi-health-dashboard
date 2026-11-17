// Video-visible excerpt: src/ui/charts.tsx
export function Dial({ value, max = 100, size = 230, ticks = 56 }) {
  const R = size / 2, r1 = R - 6, r0 = R - 26;
  // a 300-degree sweep of short radial ticks, the gap at the bottom
  const lines = Array.from({ length: ticks }, (_, i) => {
    const a = (-240 + (i / (ticks - 1)) * 300) * (Math.PI / 180);
    return { x1: R + Math.cos(a) * r0, y1: R + Math.sin(a) * r0,
             x2: R + Math.cos(a) * r1, y2: R + Math.sin(a) * r1 };
  });
  useLayoutEffect(() => {
    const target = (Math.min(max, value) / max) * ticks;
    const paint = () => els.forEach((l, i) =>
      l.classList.toggle('is-on', i < Math.round(st.v)));
    gsap.to(st, { v: target, duration: 1.6, ease: 'power3.out',
      onUpdate: () => schedule(paint) });
  }, [value]);
}
