export function StatStrip({ stats }: { stats: readonly string[] }) {
  return (
    <div className="section-shell reveal grid gap-3 py-8 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat) => (
        <div
          className="glass-panel rounded-xl px-4 py-5 text-sm font-bold leading-6 text-bone/90"
          key={stat}
        >
          {stat}
        </div>
      ))}
    </div>
  );
}
