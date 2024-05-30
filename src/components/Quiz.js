import "../App.css";
import { Questions } from "../helpers/EnglishQuestions";
import { useEffect, useRef, useState } from "react";
import { shuffle } from "../helpers/Questions";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
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
    if (Questions[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setStatusNextButton(false);
    resetButton();
    setOptionChosen("");
    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
  };

  const restartQuiz = () => {
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
        buttonText === Questions[currentQuestion].str &&
        Questions[currentQuestion].str === optionChosen
      ) {
        item.classList.remove("active");
        item.classList.add("correct");

        return;
      } else if (
        buttonText === Questions[currentQuestion].str &&
        Questions[currentQuestion].str !== optionChosen
      ) {
        item.classList.add("correct");
      }
      if (buttonText === optionChosen) {
        item.classList.add("incorrect");
      }
      setStatusNextButton(true);
    });
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].str === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  useEffect(() => {
    setListAnswer(shuffle(Questions[currentQuestion].arrQA));
    setNumQuestion(Questions.length);
  }, [currentQuestion]);
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].ques}</h1>
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
        <button onClick={restartQuiz}>Restart Quiz</button>
        {!statusNextButton ? (
          // <button onClick={finishQuiz} id="nextQuestion">
          //   Finish Quiz
          // </button>
          <button onClick={checkAnswer} id="nextQuestion">
            Submit
          </button>
        ) : currentQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
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

export default Quiz;
