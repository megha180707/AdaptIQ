export type Question = {
  id: number;
  topic: string;
  difficulty: number;
  question: string;
  options: string[];
  answer: number;
};

export const questions: Question[] = [
  // ARRAYS
  { id:1, topic:"Arrays", difficulty:800, question:"What is the index of the first element in an array?", options:["0","1","-1","Depends"], answer:0 },
  { id:2, topic:"Arrays", difficulty:900, question:"Time complexity of accessing arr[i]?", options:["O(n)","O(log n)","O(1)","O(n log n)"], answer:2 },
  { id:3, topic:"Arrays", difficulty:1000, question:"Best algorithm to find maximum subarray sum?", options:["Merge Sort","Kadane","DFS","BFS"], answer:1 },
  { id:4, topic:"Arrays", difficulty:1100, question:"Two Sum is commonly solved using?", options:["Queue","HashMap","Heap","Stack"], answer:1 },
  { id:5, topic:"Arrays", difficulty:1200, question:"Space complexity of Kadane's Algorithm?", options:["O(n)","O(log n)","O(1)","O(n²)"], answer:2 },
  { id:6, topic:"Arrays", difficulty:1300, question:"Prefix sums help answer range sum queries in?", options:["O(1)","O(n)","O(log n)","O(n²)"], answer:0 },

  // TREES
  { id:7, topic:"Trees", difficulty:900, question:"Root node has how many parents?", options:["1","2","0","Depends"], answer:2 },
  { id:8, topic:"Trees", difficulty:1000, question:"Traversal: Left → Root → Right", options:["Preorder","Postorder","Inorder","Level Order"], answer:2 },
  { id:9, topic:"Trees", difficulty:1100, question:"Height of a single-node tree?", options:["0","1","2","Undefined"], answer:0 },
  { id:10, topic:"Trees", difficulty:1200, question:"Balanced BST search complexity?", options:["O(n)","O(log n)","O(1)","O(n log n)"], answer:1 },
  { id:11, topic:"Trees", difficulty:1300, question:"Queue is used in which traversal?", options:["DFS","Inorder","Level Order","Preorder"], answer:2 },
  { id:12, topic:"Trees", difficulty:1400, question:"Leaves of a full binary tree have?", options:["1 child","2 children","0 children","3 children"], answer:2 },

  // GRAPHS
  { id:13, topic:"Graphs", difficulty:1000, question:"BFS uses?", options:["Stack","Queue","Heap","Deque"], answer:1 },
  { id:14, topic:"Graphs", difficulty:1100, question:"DFS primarily uses?", options:["Queue","Stack","Heap","Array"], answer:1 },
  { id:15, topic:"Graphs", difficulty:1200, question:"Dijkstra works on graphs with?", options:["Negative weights","Positive weights","Cycles only","Trees only"], answer:1 },
  { id:16, topic:"Graphs", difficulty:1300, question:"Minimum Spanning Tree algorithm?", options:["Kruskal","Binary Search","KMP","Bellman"], answer:0 },
  { id:17, topic:"Graphs", difficulty:1400, question:"Bellman-Ford detects?", options:["Cycles","Negative cycles","Bridges","Components"], answer:1 },
  { id:18, topic:"Graphs", difficulty:1500, question:"Topological sort requires?", options:["Tree","DAG","Complete graph","Cycle"], answer:1 },

  // DP
  { id:19, topic:"Dynamic Programming", difficulty:1200, question:"DP avoids repeated computation using?", options:["Recursion","Memoization","Sorting","BFS"], answer:1 },
  { id:20, topic:"Dynamic Programming", difficulty:1300, question:"Fibonacci DP complexity?", options:["O(2ⁿ)","O(n)","O(log n)","O(n²)"], answer:1 },
  { id:21, topic:"Dynamic Programming", difficulty:1400, question:"0/1 Knapsack is solved by?", options:["Greedy","DP","DFS","Union Find"], answer:1 },
  { id:22, topic:"Dynamic Programming", difficulty:1500, question:"LCS stands for?", options:["Longest Common Subsequence","Largest Continuous Sum","Least Cost Search","Longest Connected Set"], answer:0 },
  { id:23, topic:"Dynamic Programming", difficulty:1600, question:"DP state usually represents?", options:["Answer only","Subproblem","Input array","Graph"], answer:1 },
  { id:24, topic:"Dynamic Programming", difficulty:1700, question:"Tabulation builds solutions?", options:["Top-down","Bottom-up","Randomly","Recursively only"], answer:1 },
];