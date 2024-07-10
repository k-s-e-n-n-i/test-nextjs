import React, { useEffect, useRef, useState } from "react";
import { computePosition, shift, flip, offset, size } from "@floating-ui/dom";

import styled from "./styled.module.scss";

export const Popper2 = () => {
  useEffect(() => {
    const floating: HTMLElement | null = document.getElementById("floating");

    const Move = ({ clientX, clientY }: any) => {
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            right: clientX,
            top: clientY,
            bottom: clientY,
          };
        },
      };

      if (floating) {
        computePosition(virtualEl, floating, {
          placement: "right-start",
          middleware: [offset(5), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(floating.style, {
            top: `${y}px`,
            left: `${x}px`,
          });
        });
      }
    };

    document.addEventListener("mousemove", Move);

    return document.removeEventListener("mousemove", Move);
  }, []);

  useEffect(() => {
    const reference: HTMLElement | null = document.getElementById("reference");
    const floating: HTMLElement | null = document.getElementById("floating");

    [...Array(100)].forEach((_, index) => {
      const element = document.createElement("div");
      element.textContent = `List item ${index + 1}`;
      floating?.append(element);
    });

    if (reference && floating) {
      computePosition(reference, floating, {
        placement: "bottom",
        // Try removing the middleware. The dropdown will
        // overflow the boundary's edge and get clipped!
        middleware: [
          size({
            apply({ availableHeight }) {
              Object.assign(floating.style, {
                maxHeight: `${availableHeight}px`,
              });
            },
            padding: 5,
          }),
        ],
      }).then(({ x, y }) => {
        Object.assign(floating.style, {
          top: `${y}px`,
          left: `${x}px`,
          background: "red",
        });
      });
    }
  }, []);

  return (
    <div>
      <div style={{ height: "300px" }}></div>

      <div className={styled.floating}>Tooltip</div>

      {/* <p>The boundary will clip the floating element.</p>
      <div id="boundary">
        <div id="reference"></div>
        <div id="floating"></div>
      </div> */}
    </div>
  );
};
