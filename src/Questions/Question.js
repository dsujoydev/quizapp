import React from "react";
import "./Question.css";

function Question({
  showAnswers,
  handleAnswer,
  data: { question, correct_answer, incorrect_answers }
}) {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div>
      <span className="question_section">
        <h2
          className="question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </span>
      <div className="container">
        {shuffledAnswers.map((answer) => (
          <button
            className="option_style"
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
}
// {` option_style ${
//                 correct_answer === answer ? "purp" : ""
//               }`}
export default Question;
