// Small utility to add `in-view` class to elements with corner decorations
// Uses IntersectionObserver to trigger animations only when elements enter viewport
export default function initCornerObservers() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  // respect user preference
  const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;

  const selectors = ['.lemonade-image-box .img-frame', '.tm-single-image-inner', '.services-cards'];
  const elements = selectors.flatMap(sel => Array.from(document.querySelectorAll(sel)));
  if (!elements.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        // unobserve to trigger only once
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => obs.observe(el));
}
