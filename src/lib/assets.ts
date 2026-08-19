/**
 * 素材が届いたらこのファイルだけを差し替える。
 * `null` の間は `MediaFrame` が CSS モックを描画するので、ページは壊れない。
 * 各素材の仕様は ASSETS.md を参照。
 */
export const assets = {
  // 例: "/demo/homerun-demo.mp4"
  demoVideo: null as string | null,
  // 例: "/demo/homerun-demo-poster.png"
  demoPoster: null as string | null,

  // src/lib/features.ts の feature.id に対応する。例: "/features/01-navigation.png"
  features: {
    navigation: null,
    jump: null,
    find: null,
    preview: null,
    fileops: null,
  } as Record<string, string | null>,

  // 例: "/features/actions.png"
  actions: null as string | null,

  // OGP 画像。1200x630。ASSETS.md の D を参照
  og: "/og.png",
};
