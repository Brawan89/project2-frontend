import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardHeader } from "@material-ui/core";

const ShowResult = ({ questions, createMarkUp, reset }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (questions.length > 0) {
      setScore(
        questions.filter((q) => q.userAnswer === q.currectanswer).length * 10
      );
    }
  }, []);
  
  return (
    <div className="boxes" >
      <Card
        style={{ marginTop: "50px" , backgroundColor: "rgba(211, 211, 211, 0.87)" }}
      >
        {/* <CardHeader
          title="Marksheet"
          titleTypographyProps={{ variant: "h3" }}
          style={{
            textAlign: "center",
            backgroundColor: "rgb(73, 189, 235)",
            color: "white",
          }}
        ></CardHeader> */}
        <CardContent>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.95rem",
              fontWeight: "bold",
            }}
          >
            Full Score {questions.length * 10}
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.95rem",
              fontWeight: "bold",
            }}
          >
            Total Score {score}
          </p>
        </CardContent>
      </Card>
      {questions.map((q, i) => {
        return (
          <Card key={i} style={{ marginTop: "15px" }}>
            <div className="question">
              <p
                className="questionText"
                dangerouslySetInnerHTML={createMarkUp(q.question)}
              ></p>
            </div>
            <hr />
            <CardContent  >
             <div style={{ textAlign: "center" }} 
              className="answerq">
                <b>Your Answer: </b>{" "}
                <p
                  dangerouslySetInnerHTML={createMarkUp(q.userAnswer)}
                  className={
                    q.userAnswer === q.currectanswer ? "correct" : "wrong"}
                ></p>
                <hr />
                <b>Correct Answer: </b>
                <p
                  dangerouslySetInnerHTML={createMarkUp(q.currectanswer)}
                  className="correct"
                ></p>
              </div>
              <p style={{ float: "right", color: "rgb(121,87,133)" , fontSize: "20px" }}>
                <b>Mark : {q.userAnswer === q.currectanswer ? "10" : "00"}</b>
              </p>
            </CardContent>
          </Card>
        );
      })}
      <div>
        <Button
          variant="contained"
          onClick={reset}
          style={{ marginTop: "35px", marginBottom: "15px", width: "100%" , backgroundColor:"rgb(121,87,133)" }}
          color="primary"
        >
          Reset
        </Button>
        
      </div>
    </div>
    
  );
};


export default ShowResult;
