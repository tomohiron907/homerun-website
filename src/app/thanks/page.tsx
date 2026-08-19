import { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CheckoutReference from "./CheckoutReference";

export const metadata: Metadata = {
  title: `Thank you — ${site.name}`,
  description: "Your HomeRun licence is on its way.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    n: "1",
    title: "Check your email",
    body: `Your licence key arrives from Polar within a minute of the payment clearing. It starts with HOMERUN_. If it has not shown up, look in your spam folder before writing to us.`,
  },
  {
    n: "2",
    title: "Download and install HomeRun",
    body: "Open the DMG and drag HomeRun to your Applications folder. The app is signed and notarized, so it opens without a Gatekeeper warning.",
  },
  {
    n: "3",
    title: "Paste the key",
    body: `On first launch, choose "Enter licence key" and paste it in. The key is stored in your macOS Keychain and works on up to ${site.activationLimit} Macs.`,
  },
];

export default function Thanks() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-32">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
          Order complete
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Thank you for buying {site.name}.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
          Your payment went through and your licence key is on its way by email.
          Here is what to do next.
        </p>

        {/* Renders nothing when the parameter is absent, so the page is safe to visit directly. */}
        <Suspense fallback={null}>
          <CheckoutReference />
        </Suspense>

        <ol className="mt-16 divide-y divide-gray-100 border-y border-gray-100">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid gap-3 py-8 md:grid-cols-[3rem_1fr] md:gap-8"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                {step.n}
              </span>
              <div>
                <h2 className="font-semibold tracking-tight text-gray-900">
                  {step.title}
                </h2>
                <p className="mt-2 leading-relaxed text-gray-500">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={site.downloadUrl}
            className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-gray-900 px-8 py-4 font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Download HomeRun
          </a>
          <a
            href={site.customerPortalUrl}
            className="inline-flex items-center justify-center rounded-full border border-gray-900 px-8 py-4 font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Manage your licence
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Something wrong with your order? Email{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            {site.supportEmail}
          </a>{" "}
          and include the order reference above.
        </p>
      </main>
      <Footer />
    </>
  );
}
