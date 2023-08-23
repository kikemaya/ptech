import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button>Increase</button>
      <button>Decrease</button>
      <button>Set to zero</button>

      {count}
    </div>
  );
}

export default Counter;
