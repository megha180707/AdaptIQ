"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { saveQuizResult } from "@/lib/database";

export default function ResultsPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(5);
  const [rating, setRating] = useState(1200);

  const [mastery, setMastery] = useState({
    arrays: 50,
    trees: 50,
    graphs: 50,
    dp: 50,
  });

  useEffect(() => {
    setScore(Number(localStorage.getItem("score")) || 0);
    setTotal(Number(localStorage.getItem("total")) || 5);
    setRating(Number(localStorage.getItem("rating")) || 1200);

    const m = localStorage.getItem("mastery");
    if (m) setMastery(JSON.parse(m));

    setName(localStorage.getItem("playerName") || "");
  }, []);

  async function finishQuiz() {
    const player = name.trim() || "Anonymous";

    try {
      // Save to Supabase
      await saveQuizResult({
        name: player,
        score,
        total,
        rating,
        mastery,
      });

      // Save user info
      localStorage.setItem("playerName", player);
      localStorage.setItem("score", String(score));
      localStorage.setItem("total", String(total));
      localStorage.setItem("rating", String(rating));
      localStorage.setItem("mastery", JSON.stringify(mastery));

      // ⭐ Save into leaderboard
      const leaderboard = JSON.parse(
        localStorage.getItem("leaderboard") || "[]"
      );

      leaderboard.push({
        name: player,
        score,
        rating,
      });

      leaderboard.sort((a: any, b: any) => b.rating - a.rating);

      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

      // Go to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to save result:", error);
      alert("Failed to save result. Please try again.");
    }
  }

  const accuracy = Math.round((score / total) * 100);

  return (
    <main className="min-h-screen bg-[#071342] flex items-center justify-center text-white">
      <div className="bg-[#10204D] p-8 rounded-3xl w-[430px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Quiz Complete 🎉
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl bg-[#1B2D63] outline-none"
        />

        <div className="space-y-3 text-lg">
          <div className="flex justify-between">
            <span>Score</span>
            <span>{score}/{total}</span>
          </div>

          <div className="flex justify-between">
            <span>Accuracy</span>
            <span>{accuracy}%</span>
          </div>

          <div className="flex justify-between">
            <span>Rating</span>
            <span>{rating}</span>
          </div>
        </div>

        <button
          onClick={finishQuiz}
          className="mt-8 w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-xl font-bold transition"
        >
          Save & View Dashboard
        </button>
      </div>
    </main>
  );
}