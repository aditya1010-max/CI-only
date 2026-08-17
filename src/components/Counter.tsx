import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button
        type="button"
        aria-label="Increment counter"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
