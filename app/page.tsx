"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("playerName");
    if (!saved) setShowPopup(true);
  }, []);

  function startQuiz() {
    if (name.trim()) {
      localStorage.setItem("playerName", name);
    }
    router.push("/quiz?topic=arrays&practice=true");
  }

  return (
    <main className="min-h-screen bg-[#071342] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">AdaptIQ</h1>
        <p className="text-xl text-gray-300 mb-8">
          AI Powered Adaptive Assessment Platform
        </p>

        <button
          onClick={startQuiz}
          className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-bold"
        >
          Start Quiz
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#10204D] p-8 rounded-2xl w-96">
            <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-3 rounded-lg text-black"
            />

            <button
              onClick={startQuiz}
              className="mt-4 w-full bg-cyan-400 text-black py-3 rounded-xl font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </main>
  );
}