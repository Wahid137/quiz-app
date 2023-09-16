import { useState } from "react";
import "../App.css";
import { Questions } from "../helpers/Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
    </div>
  );
};

export default Quiz;
