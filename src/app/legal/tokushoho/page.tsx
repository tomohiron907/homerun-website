import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site, legal } from "@/lib/site";

export const metadata: Metadata = {
  title: `特定商取引法に基づく表記 — ${site.name}`,
  description: `${site.name} の特定商取引法に基づく表記。`,
  alternates: { canonical: `${site.url}/legal/tokushoho/` },
};

/**
 * The only Japanese page on the site. LP copy is English because the audience
 * is English-speaking macOS users, but this is a statutory disclosure under
 * Japanese law and has to be readable by a Japanese consumer and a Japanese
 * regulator, so it stays in Japanese.
 * (LP は英語だが、これは日本の法定表示なので日本語のまま)
 */
const rows: { label: string; value: React.ReactNode }[] = [
  { label: "販売事業者", value: legal.companyJa },
  {
    label: "販売責任者",
    value: legal.representative,
  },
  { label: "所在地", value: legal.address },
  {
    label: "電話番号",
    value: (
      <>
        {legal.phone}
        <br />
        <span className="text-gray-400">
          お問い合わせは原則としてメールにて受け付けております。
        </span>
      </>
    ),
  },
  {
    label: "メールアドレス",
    value: (
      <a
        href={`mailto:${site.supportEmail}`}
        className="text-gray-900 underline underline-offset-4"
      >
        {site.supportEmail}
      </a>
    ),
  },
  {
    label: "販売価格",
    value: `${site.price.display}（${site.price.currency}）買い切り。消費税および各国の付加価値税は決済時に表示されます。`,
  },
  {
    label: "商品代金以外の必要料金",
    value:
      "ダウンロードおよびご利用にかかる通信料金はお客様のご負担となります。",
  },
  {
    label: "支払方法",
    value: "クレジットカードほか、決済代行事業者が提供する方法。",
  },
  { label: "支払時期", value: "ご注文時に即時決済されます。" },
  {
    label: "引渡時期",
    value:
      "決済完了後、ライセンスキーを直ちにメールにて送付します。アプリケーション本体は本サイトからいつでもダウンロードいただけます。",
  },
  {
    label: "動作環境",
    value: `macOS ${site.minMacOS} 以降（Apple Silicon / Intel）`,
  },
  {
    label: "返品・キャンセル",
    value: `デジタル商品の性質上、原則として返品はお受けしておりません。ご購入前に ${site.trialDays} 日間の無料トライアル版で動作をご確認ください。不具合により正常にご利用いただけない場合は、購入後 14 日以内にメールにてご連絡ください。`,
  },
  {
    label: "販売者（Merchant of Record）",
    value: `${legal.merchantOfRecord} が販売者として決済・請求書発行・税の取り扱いを行います。`,
  },
];

export default function Tokushoho() {
  return (
    <LegalPage
      title="特定商取引法に基づく表記"
      lang="ja"
      lead={`${site.name} の販売に関する、特定商取引法第 11 条に基づく表示です。`}
    >
      <dl className="divide-y divide-gray-100 border-y border-gray-100">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-8"
          >
            <dt className="text-sm font-semibold tracking-tight text-gray-900">
              {row.label}
            </dt>
            <dd className="leading-relaxed text-gray-500">{row.value}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  );
}
