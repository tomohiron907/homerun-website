import { site } from "@/lib/site";

/** Trimmed from ../HomeRun/config/default_config.toml — keep the two in sync. */
const configExcerpt = `# ~/.config/HomeRun/config.toml

[defaults]
sort_by = "frecency"   # name | modified | size | created | frecency
dirs_first = true

# Per-directory overrides fall back to [defaults].
[directories."~/Downloads"]
sort_by = "modified"
sort_order = "desc"

# Press g, then a key, to jump.
[jumps]
h = "~/"
w = "~/Downloads"
d = "~/Documents"
c = "~/.config"

[keybindings]
quick_look = "space"
inline_search = "cmd+f"
fuzzy_finder = "cmd+shift+f"
open_in_terminal = "cmd+t"
actions = "cmd+shift+x"

[terminal]
app = "Ghostty"        # Terminal | iTerm | Warp | Ghostty

[folder_colors]
"~/Documents" = "blue"`;

/** Line-level colouring — enough for a config excerpt, no highlighter dependency. */
function ConfigLine({ line }: { line: string }) {
  if (line.trim().startsWith("#")) {
    return <span className="text-gray-600">{line}</span>;
  }
  if (line.trim().startsWith("[")) {
    return <span className="font-medium text-gray-100">{line}</span>;
  }

  const eq = line.indexOf("=");
  if (eq === -1) {
    return <span>{line}</span>;
  }

  const comment = line.indexOf("#", eq);
  const value = comment === -1 ? line.slice(eq + 1) : line.slice(eq + 1, comment);

  return (
    <>
      <span className="text-gray-400">{line.slice(0, eq)}</span>
      <span className="text-gray-600">=</span>
      <span className="text-gray-200">{value}</span>
      {comment !== -1 && (
        <span className="text-gray-600">{line.slice(comment)}</span>
      )}
    </>
  );
}

export default function Config() {
  return (
    <section className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Configuration
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              One file. Every key.
            </h2>
            <p className="mt-6 leading-relaxed text-gray-500">
              Every shortcut, every jump target, and every sort order lives in a
              single TOML file. Rebind anything, set a different sort per
              directory, point <code className="font-mono text-sm text-gray-900">⌘T</code>{" "}
              at your terminal of choice, and tint the folders you use most.
            </p>
            <p className="mt-6 leading-relaxed text-gray-500">
              The file is created on first launch and it is yours — plain text,
              easy to keep in your dotfiles repo, no hidden state.
            </p>
            <p className="mt-6 text-sm text-gray-400">
              HomeRun {site.version} · macOS {site.minMacOS}+
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-2 font-mono text-xs text-gray-500">
                config.toml
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed">
              <code>
                {configExcerpt.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    <ConfigLine line={line} />
                    {line === "" ? " " : ""}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
