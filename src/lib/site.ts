export const site = {
  name: "HomeRun",
  vendor: "CrossLayer LLC",
  vendorUrl: "https://crosslayer.co.jp",
  url: "https://homerun.crosslayer.co.jp",
  version: "1.0.0",
  price: { amount: 19, currency: "USD", display: "$19" },
  trialDays: 14,
  activationLimit: 3,
  minMacOS: "12.0",
  checkoutUrl:
    "https://buy.polar.sh/polar_cl_NwWaZDUrgcgh3hjnB1w16hEcPRFr6WL4NOpRR0Q0cnX",
  downloadUrl:
    "https://homerun-dl.crosslayer.co.jp/HomeRun_1.0.0_universal.dmg",
  supportEmail: "support@crosslayer.co.jp",
  customerPortalUrl: "https://polar.sh/crosslayer-llc/portal",
} as const;

/**
 * Every host the app or this site talks to. The privacy policy is generated
 * from this list rather than written by hand, so a new endpoint cannot be
 * added to the product without the policy going stale in a visible way.
 * (プライバシーポリシーはこの定数から描画する。手書きだと通信先が増えたときに
 *  ポリシーだけ古いまま残るため)
 */
export const endpoints = {
  /** Licence activation and validation (Polar API). */
  licence: "https://api.polar.sh",
  /** Update manifest polled by the in-app updater. */
  updates: "https://homerun-dl.crosslayer.co.jp/latest.json",
} as const;

/**
 * Legal identity shown on the Privacy / Terms / 特定商取引法 pages.
 * Polar is the Merchant of Record: it is the party that sells to the customer
 * and handles tax, invoicing and refunds. CrossLayer LLC develops and supports
 * the software.
 * (Polar が Merchant of Record（販売者）で、CrossLayer LLC は開発・サポート主体)
 */
export const legal = {
  company: "CrossLayer LLC",
  companyJa: "合同会社CrossLayer",
  address: "神奈川県藤沢市石川6丁目14-23 アンジェリーク湘南103",
  representative: "谷口 朝洋",
  phone: "070-4400-9277",
  /**
   * Named verbatim as it appears in Polar's Master Services Terms
   * (https://polar.sh/legal/terms), where it is defined as the reseller of the
   * Product. Used in English prose on Privacy/Terms, so keep it to the bare
   * entity name. (Polar の利用規約に記載の法人名をそのまま使う)
   */
  merchantOfRecord: "Polar Software, Inc.",
  /** Shown as the effective date on the legal pages. */
  effectiveDate: "2026-08-18",
} as const;

/**
 * Buy links always carry UTM parameters. Attribution cannot be reconstructed
 * after the fact, so every CTA passes its own placement as `medium`.
 */
export const buyUrl = (medium: string) =>
  `${site.checkoutUrl}?utm_source=lp&utm_medium=${medium}`;
