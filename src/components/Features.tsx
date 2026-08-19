import { assets } from "@/lib/assets";
import { features, type Feature } from "@/lib/features";
import AppWindow, { MockHint } from "./AppWindow";
import MediaFrame from "./MediaFrame";
import { KeyCombo } from "./Kbd";

/** The mock shown for a feature until its screenshot lands (see ASSETS.md §B). */
function FeatureMock({ id }: { id: string }) {
  switch (id) {
    case "jump":
      return (
        <AppWindow
          path="~/"
          query="g"
          cursor={1}
          rows={[
            { name: "gh  →  ~", kind: "dir" },
            { name: "gw  →  ~/Downloads", kind: "dir" },
            { name: "gd  →  ~/Documents", kind: "dir" },
            { name: "gc  →  ~/.config", kind: "dir" },
          ]}
        />
      );
    case "find":
      return (
        <AppWindow
          path="Global fuzzy finder"
          query="hmrn"
          cursor={0}
          rows={[
            { name: "~/Projects/homerun", kind: "dir" },
            { name: "~/Projects/homerun/README.md", kind: "file" },
            { name: "~/Documents/homerun-notes.md", kind: "file" },
            { name: "~/Downloads/HomeRun.dmg", kind: "file" },
          ]}
        />
      );
    case "preview":
      return (
        <AppWindow
          path="~/Pictures"
          cursor={2}
          rows={[
            { name: "2026-01", kind: "dir", meta: "84 items" },
            { name: "2026-02", kind: "dir", meta: "51 items" },
            { name: "cover.png", kind: "file", meta: "2.4 MB" },
            { name: "diagram.pdf", kind: "file", meta: "310 KB" },
            { name: "sketch.heic", kind: "file", meta: "1.8 MB" },
          ]}
        />
      );
    case "fileops":
      return (
        <AppWindow
          path="~/Downloads"
          cursor={1}
          rows={[
            { name: "invoice.pdf", kind: "file", meta: "88 KB" },
            { name: "report-final.pdf", kind: "file", meta: "1.1 MB" },
            { name: "archive.zip", kind: "file", meta: "24 MB" },
            { name: "installer.dmg", kind: "file", meta: "96 MB" },
          ]}
        />
      );
    default:
      return <AppWindow path="~/" cursor="walk" />;
  }
}

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <div className={flipped ? "md:order-2" : undefined}>
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          {feature.number} — {feature.subtitle}
        </p>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-5 leading-relaxed text-gray-500">{feature.body}</p>

        <dl className="mt-8 space-y-3">
          {feature.shortcuts.map((shortcut) => (
            <div key={shortcut.label} className="flex items-baseline gap-4">
              <dt className="w-28 shrink-0">
                <KeyCombo keys={shortcut.keys} />
              </dt>
              <dd className="text-sm text-gray-500">{shortcut.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={flipped ? "md:order-1" : undefined}>
        <MediaFrame
          src={assets.features[feature.id] ?? null}
          alt={`${feature.title} in HomeRun`}
          width={2000}
          height={1250}
          fallback={
            <div>
              <FeatureMock id={feature.id} />
              <MockHint compact />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          Features
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Everything within reach of your fingers
        </h2>

        <div className="mt-20 space-y-28">
          {features.map((feature, i) => (
            <FeatureBlock key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
