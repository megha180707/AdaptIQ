export interface Question {
  id: string;
  concept: 'Arrays' | 'Trees' | 'Graphs' | 'Dynamic Programming';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyRating: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizSession {
  studentRating: number;
  questionsAttempted: number;
  correctAnswers: number;
  conceptMastery: Record<string, { correct: number; attempted: number }>;
  currentQuestion?: Question;
  ratingHistory: Array<{ before: number; after: number; correct: boolean }>;
}

export interface RatingChange {
  before: number;
  after: number;
  correct: boolean;
  explanation: string;
}
