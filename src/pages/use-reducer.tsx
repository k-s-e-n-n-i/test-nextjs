import { useReducer } from "react";

import Link from "next/link";

const TestUseReducer = () => {
  const [visible, toggleVisible] = useReducer((v) => !v, false);

  const [state, dispatch] = useReducer(reducer, { name: "Taylor", age: 42 });

  return (
    <div>
      <button type="button" onClick={toggleVisible}>
        toggle
      </button>
      {visible && <Link href="/test">test</Link>}

      <br />
      <br />

      <input
        value={state.name}
        onChange={(e: any) =>
          dispatch({
            type: "changed_name",
            nextName: e.target.value,
          })
        }
      />
      <button type="button" onClick={() => dispatch({ type: "incremented_age" })}>
        +
      </button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </div>
  );
};

export default TestUseReducer;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};
