import { useState } from "react";
import Text from "./Text";

function Effect() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
}

export default Effect;

// Life cycle stages of a react component
// Mounting - Rendering
// Updating - Re rendering
// Unmounting - Unrender/Destroy
