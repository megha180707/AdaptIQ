import { Question } from './types';

const INITIAL_RATING = 1200;
const K_FACTOR = 32;

export const getDifficultyRating = (difficulty: 'Easy' | 'Medium' | 'Hard'): number => {
  const ratings = {
    Easy: 1000,
    Medium: 1200,
    Hard: 1400,
  };
  return ratings[difficulty];
};

export const calculateExpectedScore = (studentRating: number, difficultyRating: number): number => {
  return 1 / (1 + Math.pow(10, (difficultyRating - studentRating) / 400));
};

export const calculateNewRating = (
  currentRating: number,
  difficultyRating: number,
  isCorrect: boolean
): number => {
  const expected = calculateExpectedScore(currentRating, difficultyRating);
  const actual = isCorrect ? 1 : 0;
  const change = K_FACTOR * (actual - expected);
  return Math.round(currentRating + change);
};

export const getNextDifficulty = (rating: number): 'Easy' | 'Medium' | 'Hard' => {
  if (rating < 1100) return 'Easy';
  if (rating <= 1300) return 'Medium';
  return 'Hard';
};

export const getNextQuestion = (
  questions: Question[],
  currentRating: number,
  usedQuestionIds: Set<string>,
  concept?: string
): Question | null => {
  const difficulty = getNextDifficulty(currentRating);
  
  const available = questions.filter(
    q => q.difficulty === difficulty && !usedQuestionIds.has(q.id)
  );

  if (available.length === 0) return null;

  // If concept specified, try to get from that concept
  if (concept) {
    const conceptMatch = available.find(q => q.concept === concept);
    if (conceptMatch) return conceptMatch;
  }

  // Otherwise return random from available
  return available[Math.floor(Math.random() * available.length)];
};

export const calculateAccuracy = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const getWeakestConcept = (
  conceptMastery: Record<string, { correct: number; attempted: number }>
): string => {
  let weakest = '';
  let lowestAccuracy = 101;

  for (const [concept, stats] of Object.entries(conceptMastery)) {
    const accuracy = stats.attempted > 0 ? stats.correct / stats.attempted : 0;
    if (accuracy < lowestAccuracy) {
      lowestAccuracy = accuracy;
      weakest = concept;
    }
  }

  return weakest;
};
