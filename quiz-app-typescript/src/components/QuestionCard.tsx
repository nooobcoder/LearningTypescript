import React, { FC } from 'react';
import { generateUUID } from '../utils';

type Props = {
  question: string | null;
  answer: string[] | null;
  callback: any;
  userAnswer: boolean | undefined;
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
            <div>
              <button disabled={userAnswer} onClick={() => callback()} type="button">
                <span key={generateUUID().toString()} id={generateUUID().toString()}>
                  {answer}
                </span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionCard;
