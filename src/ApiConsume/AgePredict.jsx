import Axios from "axios";
import { useState } from "react";

function AgePredict() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  function fetchData() {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Ex. Pedro"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData()}>Predict Age</button>
      <h1>Predicted Age {predictedAge}</h1>
    </div>
  );
}

export default AgePredict;
