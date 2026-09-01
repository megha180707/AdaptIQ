import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AdaptIQ",
  description: "AI Adaptive Assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#071342] text-white">
        <nav className="bg-white text-black px-10 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">
            AdaptIQ
          </h1>

          <div className="flex gap-8 text-lg">
            <Link href="/">Home</Link>
            <Link href="/quiz?topic=arrays&practice=true">Quiz</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/leaderboard">Leaderboard</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}