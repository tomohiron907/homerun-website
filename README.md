# homerun-website

**HomeRun** の販売用ランディングページ。CrossLayer LLC 名義で `homerun.crosslayer.co.jp` に公開する。

HomeRun は「ホームポジションのまま、コンピュータの中を走り回る」をコンセプトにした
macOS 向けのキーボードファーストなファイルブラウザ（`../HomeRun`, Tauri v2 + React）。

- **ページの文言は英語のみ** — 英語圏の macOS パワーユーザー向け
- **このリポジトリのドキュメントは日本語** — 書くのは日本語話者なので

## セットアップ

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 静的書き出し → out/
npm run lint
```

Node 24 / Next.js 16（Turbopack）/ React 19 / Tailwind v4 / TypeScript 5。

> ⚠️ Next.js 16 は学習データ時点から破壊的変更が入っている。App Router のコードを書く前に
> `node_modules/next/dist/docs/` の該当ガイドを読むこと（詳細は `AGENTS.md`）。

## 構成

```
src/
  app/
    layout.tsx          メタデータ・OGP・JSON-LD (SoftwareApplication)
    page.tsx            LP 本体（各セクションを並べるだけ）
    thanks/page.tsx     Polar の Success URL。noindex
    globals.css         CrossLayer 共通トークン + キーキャップ/歩行アニメ
  lib/
    site.ts             価格・URL・数値の唯一の出どころ。TODO(release) はここだけ
    assets.ts           画像/動画パス。null = 未提供 → CSS モックにフォールバック
    features.ts         機能 5 種・同梱アクション・FAQ のデータ
  components/           Nav Hero Demo Features Actions MacNative Config Pricing FAQ Footer
                        + Kbd BuyButton DownloadButton AppWindow MediaFrame
public/CNAME            homerun.crosslayer.co.jp
```

### 触る場所の原則

| やりたいこと | 触るファイル |
|---|---|
| 価格・URL・トライアル日数などを変える | `src/lib/site.ts` **だけ** |
| 画像・動画を差し込む | `src/lib/assets.ts` **だけ**（`public/` に置いた上で） |
| 機能の説明文・キーバインド・FAQ を直す | `src/lib/features.ts` |
| 見た目を直す | `src/components/*` |

- **Buy ボタンは必ず `<BuyButton medium="..." />` を使う。** 直接 `<a href>` を書かないこと。
  UTM（`utm_source=lp` + 設置場所ごとの `utm_medium`）が付かなくなる。計測は後から遡れない
- **素材の有無を分岐するのは `MediaFrame` 1 か所だけ。** 各セクションで `assets.x ? ... : ...` を
  書かない。素材が届いたときに触るのが `assets.ts` だけで済まなくなる

## デプロイ

Cloudflare Pages に `out/` を配信する。Git 連携（push で自動）か `npm run deploy`
（`wrangler pages deploy out`）のどちらか。GitHub Pages 用の workflow と `public/CNAME` は削除済み。

**DNS と Polar が未設定なので、今 push しても売れる状態にはならない。**
公開手順は `RELEASE-CHECKLIST.md` に従うこと。

## ドキュメント

| ファイル | 内容 |
|---|---|
| [`ASSETS.md`](./ASSETS.md) | 用意すべき画像・動画の仕様（ファイル名 / 解像度 / 尺 / 撮影注意） |
| [`RELEASE-CHECKLIST.md`](./RELEASE-CHECKLIST.md) | 公開までに残っている作業。プレースホルダ・DNS・法務・アプリ側 |
| [`AGENTS.md`](./AGENTS.md) / [`CLAUDE.md`](./CLAUDE.md) | コーディングエージェント向けのルール |

関連リポジトリ: `../HomeRun`（アプリ本体・販売ドキュメント）、
`../CrossLayer-website`（コーポレートサイト。ここから LP に送客する）
