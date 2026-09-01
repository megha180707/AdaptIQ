"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

function QuizContent() {
  const router = useRouter();
  const params = useSearchParams();

  const topic = params.get("topic") || "arrays";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    loadQuiz();
  }, []);

  async function loadQuiz() {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          count: 5,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(err);
        alert(err);
        return;
      }

      const data: Question[] = await res.json();
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Failed to generate quiz.");
    }
  }

  function nextQuestion() {
    let newScore = score;

    if (selected === questions[current].answer) {
      newScore++;
      setScore(newScore);
    }

    if (current === questions.length - 1) {
      const rating = 1200 + newScore * 15;

      const mastery = {
        arrays: topic === "arrays" ? newScore * 20 : 50,
        trees: topic === "trees" ? newScore * 20 : 50,
        graphs: topic === "graphs" ? newScore * 20 : 50,
        dp: topic === "dp" ? newScore * 20 : 50,
      };

      localStorage.setItem("score", String(newScore));
      localStorage.setItem("total", "5");
      localStorage.setItem("rating", String(rating));
      localStorage.setItem("mastery", JSON.stringify(mastery));

      router.push("/results");
      return;
    }

    setCurrent(current + 1);
    setSelected(null);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#071342] flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Generating AI Quiz...</h1>
      </main>
    );
  }

  const q = questions[current];

  return (
    <main className="min-h-screen bg-[#071342] text-white flex items-center justify-center p-8">
      <div className="bg-[#10204D] w-full max-w-3xl rounded-2xl p-8">
        <div className="flex justify-between mb-6">
          <p className="text-lg">
            Question {current + 1} / {questions.length}
          </p>

          <div className="text-right">
            <p className="text-cyan-400 text-sm">Skill Rating</p>
            <h2 className="text-2xl font-bold">{1200 + score * 15}</h2>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8">{q.question}</h1>

        <div className="space-y-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-xl border transition ${
                selected === i
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "bg-[#1A2B5A] border-slate-600 hover:border-cyan-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          disabled={selected === null}
          className="mt-8 w-full bg-cyan-400 text-black py-3 rounded-xl font-bold disabled:opacity-40"
        >
          {current === questions.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#071342] flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </main>
      }
    >
      <QuizContent />
    </Suspense>
  );
}