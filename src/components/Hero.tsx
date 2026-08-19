import { site } from "@/lib/site";
import BuyButton from "./BuyButton";
import DownloadButton from "./DownloadButton";
import Kbd from "./Kbd";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32">
      <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
        Keyboard-first file browser for macOS
      </p>

      <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
        Stay on the home row.
        <br />
        Run through your Mac.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
        HomeRun is a file browser you drive entirely from the keyboard. Move
        with <Kbd>h</Kbd> <Kbd>j</Kbd> <Kbd>k</Kbd> <Kbd>l</Kbd>, jump to any
        directory in two keystrokes, and fuzzy-find anything on your disk —
        without your hands ever leaving the home row.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <DownloadButton size="lg" />
        <BuyButton medium="hero" size="lg" />
      </div>

      <p className="mt-6 text-sm text-gray-400">
        macOS {site.minMacOS}+ · Apple Silicon &amp; Intel · {site.trialDays}
        -day trial, no card required
      </p>
    </section>
  );
}
