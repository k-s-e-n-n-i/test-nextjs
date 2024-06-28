import { useEffect, useRef, useState } from "react";
import styled from "../styles/gsap-scroll.module.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Portal } from "@/components/Portal/Portal";
// import ScrollSmoother from "gsap/dist/ScrollSmoother";

const Gsap2 = () => {
  const container: any = useRef();
  const [bgColor, setBgColor] = useState("#383838");
  const [showText, setShowText] = useState(false);

  useGSAP(
    () => {
      ScrollTriggerFunc(bgColor, setBgColor, setShowText);
      ScrollTriggerFunc2();
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <h3>GSAP-анимации со скроллом</h3>

      <Portal>
        <div className={styled.portal}></div>
      </Portal>

      <div className={styled.gsapContainer}>
        <div className={styled.blockScroll}>
          <div className={styled.scrollA} data-lag="2"></div>
          <div className={styled.scrollB} data-lag="1"></div>
          <div className={styled.scrollC} data-lag="0.5"></div>
        </div>
        {showText && (
          <div className={styled.cutText}>
            <h1 className={styled.title}>
              <span>Hi, nice</span>
              <span>to see</span>
              <span>you here</span>
            </h1>

            {/* <h2 className={styled.title}>
              <span>This is</span>
              <span>a long</span>
              <span>sub title</span>
            </h2> */}
          </div>
        )}
        <div className={styled.block2Scroll}>
          <div className={styled.scrollAA} data-lag="2"></div>
        </div>
      </div>

      <div className={styled.blockScroll + " " + styled.gsapContainer}>
        <div className={styled.scrollD}></div>
        <div className={styled.scrollE}></div>
        <div className={styled.scrollF}></div>
      </div>
    </div>
  );
};

export default Gsap2;

const ScrollTriggerFunc = (bgColor: string, setBgColor: any, setShowText: any) => {
  gsap.registerPlugin(ScrollTrigger);
  // const b = document.querySelector("main.body") as HTMLElement;
  // if (b) b.style.backgroundColor = "red";

  // let smoother = ScrollSmoother.create({
  //   wrapper: `[class*="gsap"]`,
  //   content: `[class*="blockScroll"]`,
  //   smooth: 2,
  //   effects: true,
  //   onUpdate: (self: any) => {
  //     console.log(self.getVelocity());
  //   },
  // });

  const scrollTrigger = {
    toggleActions: "restart none reverse none",
    trigger: ".scrollA",
    start: () => "1200 90%", //+ document.querySelector(`[class*="scrollB"]`)?.getBoundingClientRect().y + "px",
    endTrigger: "scrollA",
    end: () => "1500 10%",
    scrub: true,
    pin: `[class*="ghost"]`,
    // markers: true,
  };

  const settings = {
    rotation: 360,
    duration: 3,
  };

  gsap.to(`[class*="scrollB"]`, {
    scrollTrigger: { ...scrollTrigger, markers: true },
    x: "80vw",
    y: 800,
    ...settings,
  });

  gsap.to(`[class*="gsapContainer"], [class*="scrollB"], .portal`, {
    scrollTrigger,
    duration: 4,
    backgroundColor: bgColor, //`#${Math.ceil(Math.random() * 0xffffff).toString(16)}`,
    onUpdate: () => {
      // setBgColor(`#${Math.ceil(Math.random() * 0xffffff).toString(16)}`);
      setShowText(true);
    },
    onStart: () => {
      setShowText(false);
    },
  });

  gsap.to(`[class*="scrollAA"]`, {
    scrollTrigger: {
      ...scrollTrigger,
      trigger: ".scrollAA",
      start: () => "2200 90%",
      end: () => "2800 10%",
    },
    x: "-85vw",
    y: 1000,
    ...settings,
  });
};

const ScrollTriggerFunc2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollTrigger = {
    toggleActions: "restart none reverse none",
    trigger: ".scrollD",
    start: () => "4000 90%", //+ document.querySelector(`[class*="scrollB"]`)?.getBoundingClientRect().y + "px",
    endTrigger: "scrollD",
    end: () => "4000 30%",
    // scrub: true,
    pin: `[class*="ghost"]`,
    // markers: true,
  };

  const settings = { x: 400, rotation: 360, duration: 3 };

  gsap.to(`[class*="scrollF"]`, {
    scrollTrigger,
    ...settings,
  });

  gsap.to(`[class*="scrollE"]`, {
    scrollTrigger: { ...scrollTrigger, start: () => "4100 90%", end: () => "4100 30%" },
    ...settings,
  });
};
