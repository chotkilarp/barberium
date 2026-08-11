import { useEffect } from "react";

/**
 * Selector for every "play once" entrance animation class used across the site.
 * Elements start hidden (opacity: 0, see styles.css) and only animate in once
 * the ".is-visible" class is added — which happens when they scroll into view.
 */
const REVEAL_SELECTOR = ".anim-rise, .anim-mono-mark, .anim-price-in, .anim-row-in";

/**
 * Reveals entrance animations as elements scroll into view, instead of all at
 * once on page load. Elements already in the viewport on mount (e.g. the hero)
 * reveal immediately, since IntersectionObserver fires right away for them.
 *
 * `routeKey` (e.g. the current pathname) lets this re-scan after client-side
 * navigation, since new elements can mount without this effect re-running.
 */
export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    // No IntersectionObserver support: just show everything, no animation.
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        // Trigger a bit before the element's bottom edge reaches the
        // viewport bottom, so the animation feels timed to the scroll.
        rootMargin: "0px 0px -8% 0px",
      },
    );

    // Wait a frame so the new route's DOM is committed before we scan it.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [routeKey]);
}
