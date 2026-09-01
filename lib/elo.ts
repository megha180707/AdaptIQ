export type Difficulty = "Easy" | "Medium" | "Hard";

const difficultyRating = {
  Easy: 1000,
  Medium: 1200,
  Hard: 1400,
};

export function updateRating(
  studentRating: number,
  difficulty: Difficulty,
  correct: boolean
) {
  const questionRating = difficultyRating[difficulty];

  const expected =
    1 / (1 + Math.pow(10, (questionRating - studentRating) / 400));

  const K = 32;
  const actual = correct ? 1 : 0;

  const newRating = studentRating + K * (actual - expected);

  return Math.round(newRating);
}

export function getDifficulty(rating: number): Difficulty {
  if (rating < 1100) return "Easy";
  if (rating > 1300) return "Hard";
  return "Medium";
}