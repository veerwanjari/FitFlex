// Powers the .ff-glow-hover CSS effect (see src/index.css).
// Tracks the cursor position inside the element and exposes it as the
// --x / --y CSS custom properties that the glow gradient reads from.
export const handleGlowMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
};
