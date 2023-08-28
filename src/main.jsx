import ReactDOM from "react-dom/client";
// import Intro from './Intro.jsx'
// import PropsYEstilos from './PropsYEstilos.jsx'
// import Ternary from './Ternary'
// import Lists from './Lists'
// import State from './State'
// import Counter from './Counter'
// import Text from './components/Text'
// import Effect from "./Effect";
// import ApiConsume from "./ApiConsume";
import AgePredict from "./ApiConsume/AgePredict";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AgePredict />
  // </React.StrictMode>
);
