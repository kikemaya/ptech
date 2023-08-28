// Una variable que mantiene datos, se actualiza y persiste brevemente

import { useState } from "react";

// REACT RENDERIZA EL COMPONENTE, CUANDO ESCUCHA UN CAMBIO DE ESTADO
function State() {
  // 5. CHANGE COLOR
  const [textColor, setTextColor] = useState("black");

  // 4.
  //   const [showText, setShowText] = useState(true);

  // 2.
  // const [age, setAge] = useState(0);

  // 1.
  //   let age = 0;
  //   const increaseAge = () => {
  //     age = age + 1;
  //     console.log(age);

  // document.getElementById... para crear la logica que renderiza algun componente
  //   };

  //   2.
  //   const increaseAge = () => {
  //     setAge(age + 1);
  //   };

  //   3.
  //   const [inputValue, setInputValue] = useState("");

  //   const handleInputChange = (event) => {
  //     // console.log(event.target.value);
  //     setInputValue(event.target.value)
  //   };

  //   4.
  //   const handleShowText = () => {
  //     setShowText(!showText);
  //   };

  return (
    <div className="App">
      {/* 1. {age} <button onClick={() => increaseAge()}>Increase age</button> */}
      {/* 2. {age} <button onClick={() => increaseAge()}>Increase age</button> */}
      {/* 3. <input type="text" onChange={handleInputChange} />
      {inputValue} */}

      {/* 4. <button onClick={handleShowText}>Show/Hide</button>
      {showText && <h1>Hi, my name is Pedro</h1>} */}

      <button onClick={() => setTextColor(textColor === "black" ? "red" : "black")}>Show/Hide</button>
      <h1 style={{color: textColor}}>Hi, my name is Pedro</h1>
    </div>
  );
}

export default State;
