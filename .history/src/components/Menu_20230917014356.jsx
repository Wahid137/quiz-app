import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

const Menu = () => {
  const { gameState, setGameState, userName, setUsername } =
    useContext(GameStateContext);

  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
