import "../App.css";
import { Questions5 } from "../helpers/EnglishQuestions";
import { useEffect, useRef, useState } from "react";
import { shuffle } from "../helpers/Questions";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz5() {
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
    if (Questions5[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setStatusNextButton(false);
    resetButton();
    setOptionChosen("");
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const restartQuiz5 = () => {
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
        buttonText === Questions5[currentQuestion].str &&
        Questions5[currentQuestion].str === optionChosen
      ) {
        item.classList.remove("active");
        item.classList.add("correct");

        return;
      } else if (
        buttonText === Questions5[currentQuestion].str &&
        Questions5[currentQuestion].str !== optionChosen
      ) {
        item.classList.add("correct");
      }
      if (buttonText === optionChosen) {
        item.classList.add("incorrect");
      }
      setStatusNextButton(true);
    });
  };

  const finishQuiz5 = () => {
    if (Questions5[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  useEffect(() => {
    setListAnswer(shuffle(Questions5[currentQuestion].arrQA));
    setNumQuestion(Questions5.length);
  }, [currentQuestion]);
  return (
    <div className="Quiz">
      <h1>{Questions5[currentQuestion].ques}</h1>
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
        <button onClick={restartQuiz5}>Restart Quiz5</button>
        {!statusNextButton ? (
          // <button onClick={finishQuiz5} id="nextQuestion">
          //   Finish Quiz5
          // </button>
          <button onClick={checkAnswer} id="nextQuestion">
            Submit
          </button>
        ) : currentQuestion === Questions5.length - 1 ? (
          <button onClick={finishQuiz5} id="nextQuestion">
            Finish Quiz5
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

export default Quiz5;
