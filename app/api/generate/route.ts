import { NextResponse } from "next/server";
import { generateQuestions } from "@/lib/gemini";

export async function POST(req: Request) {
  const { topic, count } = await req.json();

  const questions = await generateQuestions(topic, count);

  return NextResponse.json(questions);
}