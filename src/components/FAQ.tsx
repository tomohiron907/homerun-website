import { faqs } from "@/lib/features";
import BuyButton from "./BuyButton";

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-gray-100 py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          FAQ
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Questions
        </h2>

        <dl className="mt-16 divide-y divide-gray-100 border-y border-gray-100">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="grid gap-3 py-8 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12"
            >
              <dt className="font-semibold tracking-tight text-gray-900">
                {faq.q}
              </dt>
              <dd className="leading-relaxed text-gray-500">{faq.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <BuyButton medium="faq" size="lg" />
          <p className="text-sm text-gray-400">
            Still unsure? Try it for free first — the trial is the full app.
          </p>
        </div>
      </div>
    </section>
  );
}
