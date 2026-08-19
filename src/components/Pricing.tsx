import { site } from "@/lib/site";
import BuyButton from "./BuyButton";
import DownloadButton from "./DownloadButton";

const included = [
  "One-time payment — no subscription",
  `Use it on up to ${site.activationLimit} of your Macs`,
  "Free updates",
  "Universal binary — Apple Silicon and Intel",
  "Signed, notarized, and stapled by Apple",
  `${site.trialDays}-day trial, no card required`,
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Buy it once. Keep it.
        </h2>

        <div className="mt-16 grid gap-12 rounded-2xl border border-gray-200 p-8 md:grid-cols-2 md:gap-16 md:p-12">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-bold tracking-tight text-gray-900">
                {site.price.display}
              </span>
              <span className="text-sm text-gray-400">
                {site.price.currency} · one-time
              </span>
            </div>
            <p className="mt-6 leading-relaxed text-gray-500">
              A licence key arrives by email the moment you buy. Paste it into
              HomeRun and it is yours — no account, no monthly bill, no
              feature tiers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BuyButton medium="pricing" size="lg" />
              <DownloadButton size="lg" label="Try it free" />
            </div>
          </div>

          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-baseline gap-3 text-gray-500">
                <span aria-hidden className="font-mono text-xs text-gray-900">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Payments are handled by Polar as the merchant of record. Applicable
          VAT and sales tax are calculated at checkout.
        </p>
      </div>
    </section>
  );
}
