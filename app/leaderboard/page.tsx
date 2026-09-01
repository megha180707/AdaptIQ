"use client";

import { useEffect, useState } from "react";
import { getLeaderboard } from "@/lib/database";

export default function Leaderboard() {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    getLeaderboard().then(setPlayers);
  }, []);

  const rank = (i: number) => {
    if (i === 0) return "🥇";
    if (i === 1) return "🥈";
    if (i === 2) return "🥉";
    return `#${i + 1}`;
  };

  return (
    <main className="min-h-screen bg-[#071342] text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Global Leaderboard</h1>

      <table className="w-full bg-[#10204D] rounded-xl overflow-hidden">
        <thead className="bg-[#1C2F67]">
          <tr>
            <th className="p-4">Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p, i) => (
            <tr
              key={p.id}
              className="text-center border-t border-slate-700"
            >
              <td className="p-4 text-2xl">{rank(i)}</td>
              <td>{p.name}</td>
              <td>{p.score}/{p.total}</td>
              <td className="font-bold text-cyan-400">{p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}