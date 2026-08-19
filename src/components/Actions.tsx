import { assets } from "@/lib/assets";
import { MockHint } from "./AppWindow";
import { bundledActions } from "@/lib/features";
import MediaFrame from "./MediaFrame";
import { KeyCombo } from "./Kbd";

export default function Actions() {
  return (
    <section id="actions" className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          Actions
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          If you can script it, you can run it
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-gray-500">
          Drop a shell script into{" "}
          <code className="font-mono text-sm text-gray-900">
            ~/.config/HomeRun/actions/
          </code>{" "}
          and it shows up in the actions menu. Select any file, press{" "}
          <KeyCombo keys={["⌘", "⇧", "X"]} />, and the script runs with your
          selection as its argument. No plugin API to learn, no rebuild.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Bundled with the app
            </p>
            <ul className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
              {bundledActions.map((action) => (
                <li
                  key={action.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                >
                  <span className="font-mono text-sm text-gray-900">
                    {action.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {action.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <MediaFrame
            src={assets.actions}
            alt="The HomeRun actions menu"
            width={2000}
            height={1250}
            fallback={
              <div>
                <div
                  aria-hidden
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl"
                >
                  <p className="font-mono text-xs text-gray-500">
                    ~/.config/HomeRun/actions/backup_to_r2.sh
                  </p>
                  <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-gray-300">
                    <code>{`#!/bin/bash
# $1 is the path of the selected file.
rclone copy "$1" r2:backups/
osascript -e 'display notification "Backed up"'`}</code>
                  </pre>
                </div>
                <MockHint compact />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
