import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { useState, useEffect } from "react";
import Question from "./Questions/Question";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };

  return questions.length > 0 ? (
    <div className="App">
      <Header />
      {currentIndex >= questions.length ? (
        <h1 className="score">Your Score is : {score}</h1>
      ) : (
        <>
          <Question
            data={questions[currentIndex]}
            handleAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  ) : (
    <>
      <div className="App">
        <Header />
        <h1 className="load App">Loading...</h1>
      </div>
    </>
  );
}

export default App;
