import { PopperMy } from "@/components/Popper/Popper";
import { useState } from "react";
import { usePopper } from "react-popper";

const Other = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <div>
      <button type="button" ref={referenceElement}>
        Reference element
      </button>

      <div ref={popperElement} style={styles.popper} {...attributes.popper}>
        {/* <div
          style={{ width: "200px", height: "200px", background: "red" }}
        ></div> */}
        <div ref={arrowElement} style={styles.arrow} />
      </div>

      <PopperMy />
    </div>
  );
};

export default Other;
