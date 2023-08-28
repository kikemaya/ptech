import Axios from "axios";
import { useEffect, useState } from "react";

// https://api.agify.io/?name=Miguel -> API para hacer ejercicio

function ApiConsume() {
  //   fetch("https://catfact.ninja/fact")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.fact));

  const [catFact, setCatFact] = useState("lorem ipsum");

  //   REACT NO SE LLEVA BIEN CON EL ASINCRONISMO POR DEFECTO, PORQUE EL COMPONENTE ESTA DISEÑADO
  //   PARA GENERAR RENDERS MUY CONSTANTES.
  // UNA PETICION A UNA API CUANDO LLEGA EL VALOR, OBLIGA A HACER UN UPDATE AL COMPONENTE Y SE QUEDA EN UN LOOP
  //   Axios.get("https://catfact.ninja/fact").then((res) =>
  //     setCatFact(res.data.fact)
  //   );

  //   REACT NO RECOMIENDA TRAER DATOS ASI
  //   useEffect(() => {
  //     Axios.get("https://catfact.ninja/fact").then((res) =>
  //       setCatFact(res.data.fact)
  //     );
  //   }, []);

  function handleGetCatFact() {
    Axios.get("https://catfact.ninja/fact").then((res) =>
      setCatFact(res.data.fact)
    );
  }
  useEffect(() => {
    handleGetCatFact();
  }, []);

  return (
    <div>
      {/* <button onClick={handleGetCatFact}>Generate Cat fact</button> */}
      <button onClick={handleGetCatFact}>Generate Cat fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default ApiConsume;
