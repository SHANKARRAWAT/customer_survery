import "./App.css";
import React from "react";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import EndExam from "./components/EndExam";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const surveyQuestions = [
  {
    id: 1,
    question: "How satisfied are you with our products?",
    type: "rating",
    scale: 5,
  },
  {
    id: 2,
    question: "How fair are the prices compared to similar retailers?",
    type: "rating",
    scale: 5,
  },
  {
    id: 3,
    question:
      "How satisfied are you with the value for money of your purchase?",
    type: "rating",
    scale: 5,
  },
  {
    id: 4,
    question:
      "On a scale of 1-10 how would you recommend us to your friends and family?",
    type: "rating",
    scale: 10,
  },
  { id: 5, question: "What could we do to improve our service?", type: "text" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Welcome />
        <Routes>
          <Route path="/" element={<Question questions={surveyQuestions} />} />
          <Route path="/endexam" element={<EndExam />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
