import { Icon } from "./Icons";

export type PortfolioFilter =
  | "all"
  | "architecture"
  | "gamedev"
  | "metaverse"
  | "analysis"
  | "support"
  | "austria"
  | "canada"
  | "uae"
  | "largest";

export function PortfolioFilters({
  active,
  labels,
  onChange,
  search,
  onSearch,
  count
}: {
  active: PortfolioFilter;
  labels: Record<Exclude<PortfolioFilter, "all">, string> & { all: string; search: string };
  onChange: (filter: PortfolioFilter) => void;
  search: string;
  onSearch: (value: string) => void;
  count: string;
}) {
  const filters: PortfolioFilter[] = [
    "all",
    "architecture",
    "gamedev",
    "metaverse",
    "analysis",
    "support",
    "austria",
    "canada",
    "uae",
    "largest"
  ];

  return (
    <div className="reveal mb-7 grid gap-4">
      <label className="relative block">
        <span className="sr-only">{labels.search}</span>
        <Icon name="search" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
        <input
          className="min-h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-12 pr-4 text-bone outline-none transition placeholder:text-muted focus:border-gold"
          type="search"
          value={search}
          placeholder={labels.search}
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            className={`rounded-full border px-4 py-2 text-sm font-black transition ${
              active === filter
                ? "border-gold bg-gold text-obsidian"
                : "border-white/10 bg-white/[0.04] text-muted hover:border-cyan/45 hover:text-bone"
            }`}
            type="button"
            key={filter}
            onClick={() => onChange(filter)}
          >
            {labels[filter]}
          </button>
        ))}
        <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-muted">
          {count}
        </span>
      </div>
    </div>
  );
}
