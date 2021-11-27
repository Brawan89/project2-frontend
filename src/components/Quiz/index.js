import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, CardContent } from "@material-ui/core";
import axios from "axios";
import ShowResult from "../ShowResult";
import "./style.css";

const BASE_URL = "http://localhost:5000";

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [curQuestionNo, setCurQuestionNo] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [result, setResult] = useState(false);
  const [selected, setSelected] = useState("");

  const createMarkUp = (text) => {
    return { __html: text };
  };

  const getAllUquizes = async () => {
    const quize = await axios.get(`${BASE_URL}/quiz/questions`);
    console.log(quize.data);

    setQuestions(quize.data);
    setAllAnswers(
      [...quize.data[0].answers, quize.data[0].currectanswer].sort(
        () => Math.random() - 0.5
      )
    );
  };
  useEffect(() => {
    getAllUquizes();
  }, []);

  const nextQuestion = () => {
    if (!questions[curQuestionNo].userAnswer) {
      alert("Please select one answer !");
      return false;
    }
    setAllAnswers(
      [
        ...questions[curQuestionNo + 1].answers,
        questions[curQuestionNo + 1].currectanswer,
      ].sort(() => Math.random() - 0.5)
    );

    setCurQuestionNo(curQuestionNo + 1);
  };
  const showResult = () => {
    if (!questions[curQuestionNo].userAnswer) {
      alert("Please select one answer !");
      return false;
    }
    setResult(true);
  };

  const reset = () => {
    navigate(-1);
  };

  const getAnswer = (ans) => {
    questions[curQuestionNo].userAnswer = ans;
    setSelected(ans);
  };

  return (
    <div>
      {!result ? (
        <div>
          {questions.length > 0 && (
            <>
              <Card className="questionContent">
                <div className="question">
                  <p
                    className="questionText"
                    dangerouslySetInnerHTML={createMarkUp(
                      questions[curQuestionNo].description
                    )}
                  ></p>
                </div>
                <hr />
                <CardContent>
                  {allAnswers.map((ans, i) => {
                    return (
                      <div
                        className={
                          selected === ans ? "selected answer" : "answer"
                        }
                        key={i}
                        onClick={() => {
                          getAnswer(ans);
                        }}
                      >
                        <p dangerouslySetInnerHTML={createMarkUp(ans)}></p>
                      </div>
                    );
                  })}

                  <div>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ float: "right" }}
                      onClick={
                        questions.length === curQuestionNo + 1
                          ? showResult
                          : nextQuestion
                      }
                    >
                      {questions.length === curQuestionNo + 1
                        ? "show Result"
                        : "Next Question"}
                    </Button>

                    <Button variant="outlined" onClick={reset}>
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      ) : (
        <ShowResult
          questions={questions}
          createMarkUp={createMarkUp}
          reset={reset}
        />
      )}
    </div>
  );
};

export default Quiz;
