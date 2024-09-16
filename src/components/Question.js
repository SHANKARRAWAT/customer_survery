import { useState } from "react";
import "./question.css";
import { useNavigate } from "react-router-dom";

export default function Question({ questions }) {
  const [currentInd, setCurrentInd] = useState(0);
  const [answer, setAnswer] = useState({});
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleNext = () => {
    if (currentInd < questions.length - 1) {
      setCurrentInd((currentInd) => currentInd + 1);
    } else {
      const ans = prompt("Are you sure?");
      if (ans && ans.toLowerCase() === "yes") {
        const updatedAnswers = { ...answer, [currentInd]: text };
        console.log(updatedAnswers); // Log the updated answers
        setAnswer(updatedAnswers);
        setTimeout(() => {
          navigate("/endexam");
        }, 5000);
      }
    }
  };

  const handlePrev = () => {
    if (currentInd > 0) {
      setCurrentInd((currentInd) => currentInd - 1);
    }
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
          <h4>{questions[currentInd].question}</h4>
        </div>
        {questions[currentInd].type === "rating" && (
          <>
            <ul>
              {Array.from({ length: questions[currentInd].scale }, (_, i) => (
                <li
                  key={i} // Add a unique key here
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
          <textarea
            value={text}
            onChange={handleChange}
          ></textarea>
        )}

        <div className="buttons">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
