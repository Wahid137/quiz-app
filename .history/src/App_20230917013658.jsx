import { useState } from "react";
import "./App.css";
import { GameStateContext } from "./helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      ></GameStateContext.Provider>
    </div>
  );
}

export default App;
