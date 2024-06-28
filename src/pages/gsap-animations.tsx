import { useRef, useState } from "react";
import styled from "../styles/gsap-animations.module.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Gsap = () => {
  const container: any = useRef();
  const [tweenFuncs, setTweenFuncs] = useState<any>();

  useGSAP(
    () => {
      gsap.timeline().add(Box()).add(Text(), "-=2").add(Part1()).add(Part2(), "-=1");

      const tween = Tween1();
      setTweenFuncs(tween);
    },
    { scope: container }
  );

  return (
    <div className={styled.gsap} ref={container}>
      <h3>GSAP-анимации</h3>

      <div className={styled.main}>
        <h1 className={styled.title} id="title">
          Заголовок - тут был какой-то длинный текст, тут был какой-то длинный текст
        </h1>
        <div className={styled.box} />
      </div>

      <div>
        <div className={styled.nav}>
          {/* {["play", "pause", "resume", "reverse", "restart"].map((nameB, i) => (
          <button id={nameB} key={i} onClick={() => tweenFuncs[nameB]}>{`${nameB}()`}</button>
        ))} */}

          <button id="play" onClick={() => tweenFuncs.play()}>
            play()
          </button>
          <button id="pause" onClick={() => tweenFuncs.pause()}>
            pause()
          </button>
          <button id="resume" onClick={() => tweenFuncs.resume()}>
            resume()
          </button>
          <button id="reverse" onClick={() => tweenFuncs.reverse()}>
            reverse()
          </button>
          <button id="restart" onClick={() => tweenFuncs.restart()}>
            restart()
          </button>
        </div>

        <div className={styled.flair}></div>
      </div>

      <div>
        <div className={styled.test}></div>
      </div>
    </div>
  );
};

export default Gsap;

const Nav = () => {
  const nav: HTMLElement = document.querySelector(`[class*="nav"]`) || document.body;
  return nav;
};

const Box = () => {
  return gsap.to(`[class*="box"]`, {
    rotation: "360",
    duration: 2,
    backgroundColor: "red",
    borderRadius: "10px",
  });
};

const Text = () => {
  const tl = gsap.timeline();
  tl.to("#title", { x: 100, duration: 1 });
  tl.to("#title", { y: 50, duration: 1 });

  // tl.pause();
  // tl.resume();
  // tl.seek(1.5);
  tl.reverse();

  return tl;
};

const Tween1 = () => {
  let tween = gsap.to(`[class*="flair"]`, {
    duration: 2,
    x: () => Nav()?.offsetWidth,
    xPercent: -100,
    rotation: 360,
    scale: 3,
    borderRadius: "5px",
    ease: "none",
    paused: true,
  });

  tween.play();

  return tween;
};

const Part1 = () => {
  let tween = gsap.to(`[class*="test"]`, {
    duration: 2,
    x: () => Nav()?.offsetWidth,
    xPercent: -100,
    rotation: 360,
    scale: 3,
    borderRadius: "5px",
    backgroundColor: "red",
    ease: "none",
    paused: true,
  });

  tween.play();

  return tween;
};

const Part2 = () => {
  const tl = gsap.timeline();
  tl.to(`[class*="test"]`, {
    duration: 4,
    y: () => Nav()?.offsetWidth,
    rotation: 180,
    scale: 1.5,
    borderRadius: "0",
    backgroundColor: "yellow",
  });

  tl.to(
    `[class*="test"]`,
    {
      duration: 2,
      x: () => 20,
      y: () => 0,
      rotation: 90,
      scale: 1,
      backgroundColor: "green",
    },
    "-=2"
  );

  tl.play();

  return tl;
};
