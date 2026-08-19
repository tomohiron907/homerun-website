import { assets } from "@/lib/assets";
import AppWindow, { MockHint } from "./AppWindow";
import MediaFrame from "./MediaFrame";

export default function Demo() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32">
      <MediaFrame
        src={assets.demoVideo}
        poster={assets.demoPoster}
        kind="video"
        alt="HomeRun being driven entirely from the keyboard"
        width={1600}
        height={900}
        fallback={
          <div>
            <AppWindow
              path="~/Projects"
              cursor="walk"
              rows={[
                { name: "homerun", kind: "dir", meta: "12 items" },
                { name: "crosslayer-website", kind: "dir", meta: "9 items" },
                { name: "notes", kind: "dir", meta: "31 items" },
                { name: "README.md", kind: "file", meta: "6 KB" },
              ]}
            />
            <MockHint />
          </div>
        }
      />
    </section>
  );
}
