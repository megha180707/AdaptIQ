"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("Player");
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
    setName(localStorage.getItem("playerName") || "Player");
    setScore(Number(localStorage.getItem("score")) || 0);
    setTotal(Number(localStorage.getItem("total")) || 5);
    setRating(Number(localStorage.getItem("rating")) || 1200);

    const m = localStorage.getItem("mastery");
    if (m) setMastery(JSON.parse(m));
  }, []);

  const accuracy = Math.round((score / total) * 100);

  const topics = [
    ["Arrays", mastery.arrays],
    ["Trees", mastery.trees],
    ["Graphs", mastery.graphs],
    ["Dynamic Programming", mastery.dp],
  ];

  return (
    <main className="min-h-screen bg-[#071342] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">Performance Dashboard</h1>
        <p className="text-cyan-300 mb-8">Welcome, {name}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#13275B] p-6 rounded-2xl">
            <p>Rating</p>
            <h2 className="text-5xl font-bold text-cyan-300 mt-2">{rating}</h2>
          </div>

          <div className="bg-[#13275B] p-6 rounded-2xl">
            <p>Latest Score</p>
            <h2 className="text-5xl font-bold text-cyan-300 mt-2">
              {score}/{total}
            </h2>
          </div>

          <div className="bg-[#13275B] p-6 rounded-2xl">
            <p>Accuracy</p>
            <h2 className="text-5xl font-bold text-cyan-300 mt-2">{accuracy}%</h2>
          </div>
        </div>

        <div className="bg-[#13275B] rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8">Concept Mastery</h2>

          <div className="space-y-7">
            {topics.map(([topic, value]) => (
              <div key={topic}>
                <div className="flex justify-between mb-2">
                  <span>{topic}</span>
                  <span>{value}%</span>
                </div>

                <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}