import React, { FC, useState } from 'react';
import { DIFFICULTY, fetchQuizQuestions } from './API';

// Components Import
const TOTAL_QUESTIONS = 10;

type QUESTIONS = {
  question: string | null;
  answer: string[] | null;
}[];

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QUESTIONS>([{ question: null, answer: null }]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuestions(TOTAL_QUESTIONS, DIFFICULTY.EASY).then((r) => r);

  /**
   * Starts the App Trivia, makes subsequent API requests
   */
  const startTrivia = async () => {};

  /**
   *
   * @param e
   */
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  /**
   * Serve the next question to the user
   */
  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button type="button" className="start" onClick={() => startTrivia()}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        question={questions[number].question}
        totalQuestions={TOTAL_QUESTIONS}
        questionNumber={number + 1}
        callback={checkAnswer}
        answer={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      /> */}
      <button type="button" className="next" onClick={() => nextQuestion()}>
        Next Question
      </button>
    </div>
  );
};

export default App;
