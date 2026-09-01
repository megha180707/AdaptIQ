"use client";

import { useEffect, useState } from "react";

type Player = {
  name: string;
  score: number;
  total: number;
  rating: number;
};

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const data: Player[] = JSON.parse(
      localStorage.getItem("leaderboard") || "[]"
    );

    data.sort((a, b) => b.rating - a.rating);
    setPlayers(data);
  }, []);

  return (
    <main className="min-h-screen bg-[#071342] text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Global Leaderboard</h1>

      <div className="bg-[#233A7A] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-center">
              <th className="p-4">Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {players.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-300">
                  No players yet. Complete a quiz first!
                </td>
              </tr>
            ) : (
              players.map((p, i) => (
                <tr
                  key={i}
                  className="text-center border-t border-slate-600"
                >
                  <td className="p-4 font-bold">#{i + 1}</td>
                  <td>{p.name}</td>
                  <td>
                    {p.score}/{p.total}
                  </td>
                  <td>{p.rating}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}