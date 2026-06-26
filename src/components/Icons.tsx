export type IconName =
  | "cube"
  | "gamepad"
  | "building"
  | "vr"
  | "film"
  | "nodes"
  | "search"
  | "spark";

const paths: Record<IconName, JSX.Element> = {
  cube: (
    <>
      <path d="M12 2.5 21 7.5V16.5L12 21.5 3 16.5V7.5L12 2.5Z" />
      <path d="M12 12 21 7.5" />
      <path d="M12 12 3 7.5" />
      <path d="M12 12V21.5" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7.5 9H16.5C19 9 21 11 21 13.5V16C21 17.4 19.9 18.5 18.5 18.5C17.6 18.5 16.8 18 16.3 17.2L15.5 16H8.5L7.7 17.2C7.2 18 6.4 18.5 5.5 18.5C4.1 18.5 3 17.4 3 16V13.5C3 11 5 9 7.5 9Z" />
      <path d="M8 12V15" />
      <path d="M6.5 13.5H9.5" />
      <path d="M16 13H16.01" />
      <path d="M18 15H18.01" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5L13 2V21" />
      <path d="M13 8H20V21" />
      <path d="M7 8H8" />
      <path d="M7 12H8" />
      <path d="M7 16H8" />
      <path d="M16 12H17" />
      <path d="M16 16H17" />
    </>
  ),
  vr: (
    <>
      <path d="M4 9C4 7.9 4.9 7 6 7H18C19.1 7 20 7.9 20 9V15C20 16.1 19.1 17 18 17H15.5L13.5 14H10.5L8.5 17H6C4.9 17 4 16.1 4 15V9Z" />
      <path d="M8 12H10" />
      <path d="M14 12H16" />
    </>
  ),
  film: (
    <>
      <path d="M5 3H19V21H5V3Z" />
      <path d="M8 3V21" />
      <path d="M16 3V21" />
      <path d="M5 8H19" />
      <path d="M5 16H19" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="7" r="3" />
      <circle cx="10" cy="18" r="3" />
      <path d="M8.8 7.1 15.2 6.9" />
      <path d="M7.2 8.7 9 15.1" />
      <path d="M16.5 9.4 11.5 15.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20 16.2 16.2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2 14.8 9.2 22 12 14.8 14.8 12 22 9.2 14.8 2 12 9.2 9.2 12 2Z" />
    </>
  )
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
