import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz All
      </button>
      <button
        onClick={() => {
          setGameState("playing2");
        }}
      >
        Start Quiz 2
      </button>
      <button
        onClick={() => {
          setGameState("playing3");
        }}
      >
        Start Quiz 3
      </button>
      <button
        onClick={() => {
          setGameState("playing4");
        }}
      >
        Start Quiz 4
      </button>
      <button
        onClick={() => {
          setGameState("playing5");
        }}
      >
        Start Quiz 5
      </button>
      <button
        onClick={() => {
          setGameState("playing6");
        }}
      >
        Start Quiz 6
      </button>
    </div>
  );
}

export default Menu;
