// Fisher–Yates keverés
export function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function pickRandom<T>(pool: T[], count: number): T[] {
  if (!Array.isArray(pool)) return [];
  const n = Math.min(count, pool.length);
  return shuffleInPlace([...pool]).slice(0, n);
}
