import React, { FC, useEffect, useState } from 'react';
import { DIFFICULTY, fetchQuizQuestions, QuestionState } from './API';
import QuestionCard from './components/QuestionCard';

// Components Import
const TOTAL_QUESTIONS = 10;

type ANSWEROBJECT = {
  question?: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[] | null>(null);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<ANSWEROBJECT[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => console.log(questions), [questions]);

  /**
   * Starts the App Trivia, makes subsequent API requests
   */
  const startTrivia = async () => {
    setLoading(() => true);
    setGameOver(() => false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, DIFFICULTY.EASY);

    setQuestions(newQuestions!);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

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
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button type="button" className="start" onClick={() => startTrivia()}>
          Start
        </button>
      ) : null}
      {!gameOver && <p className="score">Score:</p>}
      {loading && <p>Loading Questions...</p>}
      {questions && (
        <>
          <QuestionCard
            question={questions[number]?.question}
            totalQuestions={TOTAL_QUESTIONS}
            questionNumber={number + 1}
            callback={checkAnswer}
            answer={questions[number]?.answers}
            userAnswer={userAnswers[number]}
          />
          <button type="button" className="next" onClick={() => nextQuestion()}>
            Next Question
          </button>
        </>
      )}
    </div>
  );
};

export default App;
export type { ANSWEROBJECT };
