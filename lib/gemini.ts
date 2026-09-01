import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function generateQuestions(
  topic: string,
  difficulty: "easy" | "medium" | "hard"
) {
  const prompt = `
Generate EXACTLY 5 multiple choice DSA questions.

Topic: ${topic}
Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:
[
  {
    "question":"...",
    "options":["A","B","C","D"],
    "answer":0,
    "explanation":"..."
  }
]
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  const text = response.text ?? "[]";

  return JSON.parse(text);
}