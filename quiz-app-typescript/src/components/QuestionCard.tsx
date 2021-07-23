import React, { FC } from 'react';
import { ANSWEROBJECT } from '../App';
import { generateUUID } from '../utils';

type Props = {
  question: string | null;
  answer: string[] | null;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: ANSWEROBJECT | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answer: answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}: Props) => {
  return (
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers &&
          answers.map((answer) => (
            <div key={generateUUID().toString()} id={generateUUID().toString()}>
              <button
                disabled={!!userAnswer}
                onClick={(e) => callback(e)}
                value={answer}
                type="button"
              >
                <span>{answer}</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionCard;
