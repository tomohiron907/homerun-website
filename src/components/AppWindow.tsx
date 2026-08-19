import Kbd from "./Kbd";

type Row = { name: string; kind?: "dir" | "file"; meta?: string };

const defaultRows: Row[] = [
  { name: "Documents", kind: "dir", meta: "42 items" },
  { name: "Downloads", kind: "dir", meta: "8 items" },
  { name: "Projects", kind: "dir", meta: "17 items" },
  { name: "notes.md", kind: "file", meta: "4 KB" },
  { name: "screenshot.png", kind: "file", meta: "1.2 MB" },
];

type AppWindowProps = {
  /** Path shown in the title bar. */
  path?: string;
  rows?: Row[];
  /** Index of the highlighted row, or "walk" to animate the caret downward. */
  cursor?: number | "walk";
  /** Text of the search/filter field. Omitted when undefined. */
  query?: string;
  className?: string;
};

/**
 * A CSS rendition of the HomeRun HUD window. Used wherever a real screenshot
 * has not been supplied yet — see ASSETS.md.
 */
export default function AppWindow({
  path = "~/",
  rows = defaultRows,
  cursor = 0,
  query,
  className = "",
}: AppWindowProps) {
  const walking = cursor === "walk";

  return (
    <div
      aria-hidden
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-xs text-gray-500">{path}</span>
      </div>

      {query !== undefined && (
        <div className="border-b border-white/10 px-4 py-2.5">
          <span className="font-mono text-xs text-gray-500">/</span>
          <span className="ml-2 font-mono text-xs text-gray-200">{query}</span>
          <span
            className="ml-0.5 inline-block h-3.5 w-[1.5px] translate-y-0.5 bg-gray-200"
            style={{ animation: "homerun-blink 1s steps(1) infinite" }}
          />
        </div>
      )}

      <div className="relative p-2">
        {walking && (
          <div
            className="absolute inset-x-2 h-9 rounded-md bg-white/10"
            style={{ animation: "homerun-walk 4s ease-in-out infinite" }}
          />
        )}
        {rows.map((row, i) => (
          <div
            key={row.name}
            className={`relative flex h-9 items-center justify-between rounded-md px-3 font-mono text-xs ${
              !walking && i === cursor
                ? "bg-white/10 text-gray-100"
                : "text-gray-400"
            }`}
          >
            <span className="flex items-center gap-2 truncate">
              <span className="text-gray-600">
                {row.kind === "dir" ? "▸" : "·"}
              </span>
              {row.name}
            </span>
            {row.meta && (
              <span className="shrink-0 pl-3 text-gray-600">{row.meta}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * The hint strip under a mock window, explaining that it is a mock.
 *
 * Every frame that renders a CSS mock instead of a real screenshot must carry
 * one, so nobody can mistake an illustration for the shipping UI.
 * (実画面ではないことを必ず明示するため、モック枠には必ずこれを添える)
 */
export function MockHint({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-widest text-gray-400">
        Illustration
      </p>
    );
  }

  return (
    <p className="mt-4 text-center text-xs text-gray-400">
      Illustration — press <Kbd>j</Kbd> <Kbd>k</Kbd> in the app to move the
      cursor.
    </p>
  );
}
