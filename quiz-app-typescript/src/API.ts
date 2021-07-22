// Check API docs for the supported difficulty types
export enum DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

interface APIResponse {
  response_code: number;
  results?: QUESTION[] | null;
}

export type QUESTION = {
  type: string;
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionState = QUESTION & { answers: string[] };

// Handles API requests and distributed responses to requested components
export const fetchQuizQuestions = async (amount: number, difficulty: DIFFICULTY) => {
  // Designing the API endpoint dynamically using template string
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  try {
    // Awaiting the awaited promise to get the json value.
    const data: APIResponse = await (await fetch(endpoint)).json();
    if (data.response_code === 0) console.log(data);
    else console.error('Check API response');
  } catch (error: any) {
    console.warn('API ERROR: ', error);
  }
};
