import { RefObject, useEffect, useRef, useState } from "react";

const useInViewport = (options: object) => {
  const [isVisible, setIsVisible] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (elRef && elRef.current) {
      observer.observe(elRef.current);
    }
  }, [options]);

  return [elRef, isVisible] as [RefObject<HTMLDivElement>, boolean];
};

export default useInViewport;
