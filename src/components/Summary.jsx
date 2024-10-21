import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer
  );

  const wrongAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] !== answer && answer !== null
  );

  console.log(skippedAnswers);
  console.log(correctAnswers);
  console.log(wrongAnswers);
  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round(
              (skippedAnswers.length / userAnswers.length) * 100.0,
              2
            )}
            %
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round(
              (correctAnswers.length / userAnswers.length) * 100.0,
              2
            )}
            %
          </span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">
            {Math.round((wrongAnswers.length / userAnswers.length) * 100.0, 2)}%
          </span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
