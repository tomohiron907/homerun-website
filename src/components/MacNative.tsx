import { site } from "@/lib/site";
import { KeyCombo } from "./Kbd";

const points = [
  {
    keys: ["⌘", "I"],
    title: "AirDrop from the keyboard",
    body: "Send the selected file to a nearby device through the system share sheet.",
  },
  {
    keys: ["⌘", "T"],
    title: "Open in your terminal",
    body: "Terminal, iTerm2, Warp, or Ghostty — set your own in the config file.",
  },
  {
    keys: null,
    title: "Folder colors",
    body: "Tint the directories you live in so you can spot them without reading.",
  },
  {
    keys: null,
    title: "Signed and notarized",
    body: `Developer ID signed, notarized by Apple, and stapled. Gatekeeper opens it without a warning on macOS ${site.minMacOS} and later.`,
  },
];

export default function MacNative() {
  return (
    <section className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          Native to macOS
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Not a port. Built for the Mac.
        </h2>

        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {points.map((point) => (
            <div key={point.title}>
              {point.keys && (
                <div className="mb-3">
                  <KeyCombo keys={point.keys} />
                </div>
              )}
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {point.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-500">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
