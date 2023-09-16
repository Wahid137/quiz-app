import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

const Menu = () => {
  const { setGameState, setUsername } = useContext(GameStateContext);

  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. Wahid Ahmed"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={() => setGameState("playing")}>Start Quiz</button>
    </div>
  );
};

export default Menu;
