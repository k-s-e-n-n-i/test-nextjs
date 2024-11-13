import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const goAnimation = (items: NodeListOf<Element>, heightItem: string) => {
  ScrollTrigger.normalizeScroll(false);
  gsap.registerPlugin(ScrollTrigger);

  setTimeout(() => {
    items.forEach((x, i) => {
      if (i === 0) {
        (x as HTMLElement).style.height = "300px";
        return;
      }

      gsap.to(x, {
        scrollTrigger: {
          // markers: true,
          trigger: x,
          start: () => "100 20%",
          end: () => `+=100 10%`,
          scrub: true,
        },
        duration: 1,
        height: heightItem,
      });
    });
  }, 2000);
};

export const goJsAnimation = (items: NodeListOf<Element>) => {
  const blockHeight = 300;
  const offset = items[0]?.getBoundingClientRect().top || 100;

  const points: number[] = [];

  items.forEach((x) => {
    points.push(x.getBoundingClientRect().top);
  });

  document.addEventListener("scroll", (e) => {
    items.forEach((x, i) => {
      if (i === 0) {
        return;
      }

      if (window.scrollY > points[i]) {
        (x as HTMLElement).style.height = `${
          blockHeight * (1 - (window.scrollY - offset - blockHeight * i) / blockHeight)
        }px`;
      }
      if (window.scrollY > points[i] + blockHeight) {
        (x as HTMLElement).style.height = "0";
      }
      if (window.scrollY < points[i] - blockHeight) {
        (x as HTMLElement).style.height = `${blockHeight}px`;
      }
    });
  });
};

export const goCssAnimation = (items: NodeListOf<Element>) => {
  const points: number[] = [];

  items.forEach((x) => {
    points.push(x.getBoundingClientRect().top);
  });

  document.addEventListener("scroll", (e) => {
    items.forEach((x, i) => {
      if (i === 0) {
        return;
      }

      if (window.scrollY > points[i]) {
        (x as HTMLElement).classList.add("css-open");
        (x as HTMLElement).classList.remove("css-close");
        return;
      }

      (x as HTMLElement).classList.remove("css-open");
      (x as HTMLElement).classList.add("css-close");
    });
  });
};
