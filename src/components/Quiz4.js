import "../App.css";
import { Questions4 } from "../helpers/EnglishQuestions";
import { useEffect, useRef, useState } from "react";
import { shuffle } from "../helpers/Questions";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz4() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [listAnswer, setListAnswer] = useState([]);

  const [optionChosen, setOptionChosen] = useState("");
  const myButtons = useRef(null);
  const [statusNextButton, setStatusNextButton] = useState(false);

  const resetButton = () => {
    [...myButtons.current.querySelectorAll("button")].forEach((item) => {
      item.className = "";
    });
  };

  const { score, setScore, gameState, setGameState, setNumQuestion } =
    useContext(GameStateContext);

  const nextQuestion = () => {
    if (Questions4[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setStatusNextButton(false);
    resetButton();
    setOptionChosen("");
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const restartQuiz4 = () => {
    setScore(0);
    setGameState("menu");
  };

  const checkAnswer = () => {
    // if (Questions[currentQuestion].str === optionChosen) {
    //   setScore(score + 1);
    // }
    [...myButtons.current.querySelectorAll("button")].forEach((item) => {
      const buttonText = item.textContent;
      if (
        buttonText === Questions4[currentQuestion].str &&
        Questions4[currentQuestion].str === optionChosen
      ) {
        item.classList.remove("active");
        item.classList.add("correct");

        return;
      } else if (
        buttonText === Questions4[currentQuestion].str &&
        Questions4[currentQuestion].str !== optionChosen
      ) {
        item.classList.add("correct");
      }
      if (buttonText === optionChosen) {
        item.classList.add("incorrect");
      }
      setStatusNextButton(true);
    });
  };

  const finishQuiz4 = () => {
    if (Questions4[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  useEffect(() => {
    setListAnswer(shuffle(Questions4[currentQuestion].arrQA));
    setNumQuestion(Questions4.length);
  }, [currentQuestion]);
  return (
    <div className="Quiz">
      <h1>{Questions4[currentQuestion].ques}</h1>
      <div className="questions" ref={myButtons}>
        {listAnswer.map((item) => {
          return (
            <button
              onClick={() => {
                setOptionChosen(item);
              }}
              className={`${optionChosen === item ? "active" : ""}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="button__action">
        <button onClick={restartQuiz4}>Restart Quiz4</button>
        {!statusNextButton ? (
          // <button onClick={finishQuiz4} id="nextQuestion">
          //   Finish Quiz4
          // </button>
          <button onClick={checkAnswer} id="nextQuestion">
            Submit
          </button>
        ) : currentQuestion === Questions4.length - 1 ? (
          <button onClick={finishQuiz4} id="nextQuestion">
            Finish Quiz4
          </button>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">
            Next question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz4;
