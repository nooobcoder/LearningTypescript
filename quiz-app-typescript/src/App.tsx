import React, { FC } from 'react';

// Components Import
import QuestionCard from './components/QuestionCard';

const App: FC = () => {
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
      <h1>REACT QUIZ </h1>
      <button type="button" className="start" onClick={() => startTrivia()}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard
        question=""
        totalQuestions={4}
        questionNumber={1}
        callback={null}
        answer={['2']}
        userAnswer={false}
      />
      <button type="button" className="next" onClick={() => nextQuestion()}>
        Next Question
      </button>
    </div>
  );
};

export default App;
