import { useEffect, useRef } from "react";

type CurrentSection = {
  id: string;
  intersectionRatio: number;
};

const useVisibleSection = (elems: HTMLElement[]) => {
  const currentSection = useRef({} as CurrentSection);

  useEffect(() => {
    const setCurrentSection = (id: string, intersectionRatio: number) => {
      currentSection.current.id = id;
      currentSection.current.intersectionRatio = intersectionRatio;
      sessionStorage.setItem("activeSection", id);
    };

    const getActiveSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(
        ({ isIntersecting, intersectionRatio, target: { id } }) => {
          if (isIntersecting) {
            if (
              currentSection &&
              currentSection.current &&
              Object.keys(currentSection.current).length === 0 &&
              Object.getPrototypeOf(currentSection.current) === Object.prototype
            ) {
              setCurrentSection(id, intersectionRatio);
            } else if (id === currentSection.current.id) {
              currentSection.current.intersectionRatio = intersectionRatio;
            } else if (
              intersectionRatio > currentSection.current.intersectionRatio
            ) {
              setCurrentSection(id, intersectionRatio);
            }
          }
        }
      );
    };

    const observer = new IntersectionObserver(getActiveSection, {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
    });

    elems.forEach((elem) => observer.observe(elem));
  }, [elems]);
};

export default useVisibleSection;
