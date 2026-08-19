type KbdProps = {
  children: React.ReactNode;
  /** Use on dark panels, where the light keycap would blow out. */
  dark?: boolean;
};

export default function Kbd({ children, dark = false }: KbdProps) {
  const tone = dark
    ? "border-white/20 bg-white/10 text-gray-100"
    : "border-gray-300 bg-white text-gray-900";

  return (
    <kbd
      className={`inline-flex min-w-[1.75rem] items-center justify-center rounded-md border px-1.5 py-0.5 font-mono text-xs leading-5 shadow-[0_1px_0_rgba(0,0,0,0.06)] ${tone}`}
    >
      {children}
    </kbd>
  );
}

/** A shortcut rendered as a sequence of keycaps, e.g. ⌘ ⇧ F. */
export function KeyCombo({
  keys,
  dark = false,
}: {
  keys: string[];
  dark?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((key, i) => (
        <Kbd key={`${key}-${i}`} dark={dark}>
          {key}
        </Kbd>
      ))}
    </span>
  );
}
