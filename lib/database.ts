import { supabase } from "./supabase";

type Mastery = {
  arrays: number;
  trees: number;
  graphs: number;
  dp: number;
};

export async function saveQuizResult(result: {
  name: string;
  score: number;
  total: number;
  rating: number;
  mastery: Mastery;
}) {
  const { error } = await supabase.from("leaderboard").insert([
    {
      name: result.name,
      score: result.score,
      total: result.total,
      rating: result.rating,
      arrays: result.mastery.arrays,
      trees: result.mastery.trees,
      graphs: result.mastery.graphs,
      dp: result.mastery.dp,
    },
  ]);

  if (error) throw error;
}

export async function getLeaderboard() {
  const { data, error } = await supabase
    .from("leaderboard")
    .select("*")
    .order("rating", { ascending: false });

  if (error) throw error;

  return data ?? [];
}