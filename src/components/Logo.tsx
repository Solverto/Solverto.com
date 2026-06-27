export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/graphics/SolvertoLogo.gif"
      width={96}
      height={96}
      alt="Solverto"
      className={compact ? "h-12 w-12 object-contain" : "h-16 w-16 object-contain"}
    />
  );
}
