import "../App.css";
import { Questions2 } from "../helpers/EnglishQuestions";
import { useEffect, useRef, useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { shuffle } from "../helpers/Questions";

function Quiz2() {
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
    if (Questions2[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setStatusNextButton(false);
    resetButton();
    setOptionChosen("");
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const restartQuiz2 = () => {
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
        buttonText === Questions2[currentQuestion].str &&
        Questions2[currentQuestion].str === optionChosen
      ) {
        item.classList.remove("active");
        item.classList.add("correct");

        return;
      } else if (
        buttonText === Questions2[currentQuestion].str &&
        Questions2[currentQuestion].str !== optionChosen
      ) {
        item.classList.add("correct");
      }
      if (buttonText === optionChosen) {
        item.classList.add("incorrect");
      }
      setStatusNextButton(true);
    });
  };

  const finishQuiz2 = () => {
    if (Questions2[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  useEffect(() => {
    setListAnswer(shuffle(Questions2[currentQuestion].arrQA));
    setNumQuestion(Questions2.length);
  }, [currentQuestion]);
  return (
    <div className="Quiz">
      <h1>{Questions2[currentQuestion].ques}</h1>
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
        <button onClick={restartQuiz2}>Restart Quiz2</button>
        {!statusNextButton ? (
          // <button onClick={finishQuiz2} id="nextQuestion">
          //   Finish Quiz2
          // </button>
          <button onClick={checkAnswer} id="nextQuestion">
            Submit
          </button>
        ) : currentQuestion === Questions2.length - 1 ? (
          <button onClick={finishQuiz2} id="nextQuestion">
            Finish Quiz2
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

export default Quiz2;
