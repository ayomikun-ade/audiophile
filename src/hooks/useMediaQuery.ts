"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);
    listener(); // set initial

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)"); // < 640px
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)"); // 640 - 1023
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)"); // ≥ 1024px
}
