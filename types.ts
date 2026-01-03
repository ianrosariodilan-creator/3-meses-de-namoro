
export type QuestionType = 'standard' | 'multiple-choice' | 'special-zombie' | 'special-cartoon' | 'open-text';

export interface QuizOption {
  text: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  type: QuestionType;
  question: string;
  answer: string;
  image?: string;
  options?: QuizOption[];
}

export interface QuizPhase {
  title: string;
  questions: QuizQuestion[];
}

export interface VideoData {
    path: string;
    message: string;
    finalWords: string;
}
