export function Logo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <img
        src="/brand/solverto-mark.svg"
        width={44}
        height={44}
        alt="Solverto"
        className="h-11 w-11 rounded-xl"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <img
        src="/brand/solverto-mark.svg"
        width={44}
        height={44}
        alt=""
        aria-hidden="true"
        className="h-11 w-11 rounded-xl"
      />
      <span className="grid leading-tight">
        <span className="text-base font-black text-bone">Solverto</span>
        <span className="hidden text-xs font-semibold text-muted sm:inline">
          Games · 3D · Realtime
        </span>
      </span>
    </span>
  );
}
