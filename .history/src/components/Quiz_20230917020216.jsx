import { useState } from "react";
import "../App.css";
import { Questions } from "../helpers/Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button onClick={() => s}></button>
      </div>
    </div>
  );
};

export default Quiz;
