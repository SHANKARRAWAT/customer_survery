import { useState } from "react";
import "./question.css";
export default function Question({ questions }) {
  const [currentInd, setCurrentInd] = useState(0);
  const [answer, setAnswer] = useState({});
  const handleNext = () => {
    if (currentInd < questions.length - 1)
      setCurrentInd((currentInd) => currentInd + 1);
  };

  const handlePrev = () => {
    if (currentInd > 0) setCurrentInd((currentInd) => currentInd - 1);
  };
  const handleClick = (i) => {
    const value = i + 1;
    setAnswer({ ...answer, [currentInd]: value });
  };
  return (
    <>
      <div className="questions">
        <div className="number">
          <span>{currentInd + 1}</span>
          <span>/{questions.length}</span>
        </div>
        <div className="question-text">
          <span>{currentInd + 1}</span>
          <h4>{questions[currentInd].question} </h4>
        </div>
        {questions[currentInd].type === "rating" && (
          <>
            <ul>
              {Array.from({ length: questions[currentInd].scale }, (_, i) => (
                <li
                  onClick={() => handleClick(i)}
                  className={answer[currentInd] === i + 1 ? "selected" : ""}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
          </>
        )}
        {questions[currentInd].type === "text" && (
          <textarea name="" id=""></textarea>
        )}

        <div className="buttons">
          <button onClick={handlePrev}>previous</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </>
  );
}
