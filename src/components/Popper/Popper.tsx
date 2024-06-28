import React, { useEffect, useRef, useState } from "react";
import { computePosition } from "@floating-ui/dom";

import styled from "./styled.module.scss";
import { useFloating, autoUpdate, offset, flip, shift } from "@floating-ui/react";

export const PopperMy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    const button: HTMLElement | null = document.querySelector("#button");
    const tooltip: HTMLElement | null = document.querySelector("#tooltip");

    if (button && tooltip) {
      computePosition(button, tooltip, {
        placement: "top",
        middleware: [shift()],
      }).then(({ x, y }) => {
        Object.assign(tooltip.style, {
          top: `${y}px`,
          left: `${x}px`,
        });
      });
    }
  }, []);

  return (
    <div>
      <div style={{ height: "500px" }}></div>

      <button ref={refs.setReference} className={styled.button}>
        Button
      </button>
      <div ref={refs.setFloating} className={styled.tooltip} style={floatingStyles}>
        Tooltip
      </div>

      <div style={{ height: "300px" }}></div>
    </div>
  );
};
