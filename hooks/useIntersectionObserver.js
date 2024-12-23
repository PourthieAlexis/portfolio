import { useEffect, useState } from "react";

export default function useIntersectionObserver(ref, options = {}) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setHasBeenVisible(true);
      return;
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      ...options,
    });

    const timer = setTimeout(() => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ref, hasBeenVisible, options]);

  return hasBeenVisible;
}
