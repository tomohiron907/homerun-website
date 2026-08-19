import Nav from "./Nav";
import Footer from "./Footer";
import { legal } from "@/lib/site";

/**
 * Shared shell for Privacy / Terms / 特定商取引法. These pages are read rarely
 * but scrutinised when they are (Polar's review, and customers deciding whether
 * to trust a one-person vendor), so they get the same typography as the LP
 * rather than looking like an afterthought.
 * (法務ページは読まれる頻度は低いが、読まれるときは審査や信頼判断の場面なので
 *  LP と同じ体裁にしておく)
 */
export default function LegalPage({
  title,
  lead,
  lang,
  children,
}: {
  title: string;
  lead?: string;
  lang?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main lang={lang} className="mx-auto max-w-3xl px-6 pt-24 pb-32">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-gray-400">
          Effective {legal.effectiveDate}
        </p>
        {lead ? (
          <p className="mt-8 text-lg leading-relaxed text-gray-500">{lead}</p>
        ) : null}
        <div className="mt-12 space-y-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-gray-900">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-gray-500 [&_a]:text-gray-900 [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
