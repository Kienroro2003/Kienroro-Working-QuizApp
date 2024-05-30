import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";
import Quiz5 from "./components/Quiz5";
import Quiz6 from "./components/Quiz6";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [numQuestion, setNumQuestion] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          numQuestion,
          setNumQuestion,
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "playing2" && <Quiz2 />}
        {gameState === "playing3" && <Quiz3 />}
        {gameState === "playing4" && <Quiz4 />}
        {gameState === "playing5" && <Quiz5 />}
        {gameState === "playing6" && <Quiz6 />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
