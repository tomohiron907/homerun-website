# RELEASE CHECKLIST — 公開前にやること

`homerun.crosslayer.co.jp` を公開するまでに残っている作業。
LP のコードは書き終わっているが、**外部サービスが未確定なので今のままでは売れない**。
上から順に潰していけば公開できる。

前提ドキュメント: `../HomeRun/docs/polar-license-selling.md`（以下「販売ドキュメント」）。
Phase 番号はそちらのもの。

> 📌 「誰がやるか」で整理した司令塔は `../HomeRun/docs/RELEASE-PLAN.md`。
> **どこから手を付けるか迷ったらそちらを先に読む。** この
> ファイルは LP 側の作業内容を詳細に列挙したもので、担当と順序は書いていない。

---

## 1. プレースホルダ差し替え 【完了】

残作業は 1 コマンドで一覧できる。

```bash
grep -rn "TODO(release)" src   # → 0 件
```

`src/lib/site.ts` の `TODO(release)` は **全て解消済み**。ビルド成果物にも
`PLACEHOLDER` は 1 件も残っていない（`grep -rl PLACEHOLDER out/` が 0 件）。

| 定数 | 入った値 | 出所 |
|---|---|---|
| `checkoutUrl` | 本番 Checkout Link | Polar |
| `downloadUrl` | `https://homerun-dl.crosslayer.co.jp/HomeRun_0.1.0_universal.dmg` | R2 カスタムドメイン |
| `supportEmail` | `support@crosslayer.co.jp` | エイリアス設定済み・受信確認済み |
| `customerPortalUrl` | `https://polar.sh/crosslayer-llc/portal` | Polar 組織 slug |
| `legal.companyJa` / `address` / `representative` / `phone` | 合同会社CrossLayer / 神奈川県藤沢市石川6丁目14-23 アンジェリーク湘南103 / 谷口 朝洋 / 070-4400-9277 | 登記簿 |
| `legal.merchantOfRecord` | `Polar Software, Inc.` | Polar Master Services Terms（"Polar is the reseller of the Product"） |

- [x] `checkoutUrl` を本番 Checkout Link に差し替えた
- [x] `downloadUrl` を実 DMG URL に差し替えた
- [x] `supportEmail` の受信を確認した
- [x] `customerPortalUrl` を実 Portal URL に差し替えた
- [x] `legal.*` の 4 項目を登記情報で埋めた（特商法ページに直結）
- [x] `legal.merchantOfRecord` を埋めた
- [ ] Polar の **Success URL** を `https://homerun.crosslayer.co.jp/thanks?checkout_id={CHECKOUT_ID}` に設定した（Polar 管理画面側。LP のコードではない）
- [x] `site.version` が実際にリリースするバージョンと一致している（0.1.0）
- [x] `grep -rn "TODO(release)" src` が **0 件**

> 📌 `customerPortalUrl` は slug から組み立てた URL。Polar の組織公開後に
> 実際にブラウザで開いて 200 が返ることを一度だけ確認すること。

---

## 2. 素材

仕様は `ASSETS.md`。投入は `src/lib/assets.ts` の該当行を `null` から実パスに変えるだけ。

- [ ] **A. デモ動画** `public/demo/homerun-demo.mp4` + ポスター → `assets.demoVideo` / `assets.demoPoster`
- [ ] **B. 機能スクショ ×5** `public/features/01-navigation.png` … `05-fileops.png` → `assets.features.*`
- [ ] **C. Actions スクショ** `public/features/actions.png` → `assets.actions`
- [x] **D-1. `public/og.png`** — 生成済み（1200×630）。作り方と意図は `scripts/og.md`。
      LP のヒーローと同じ文言・同じ白基調にしてある
- [x] D-2. ファビコン / Apple touch icon — `src/app/icon.png`（256px）と
      `src/app/apple-icon.png`（180px）。Next の file convention なので `<link>` は自動で入る。
      `favicon.ico` と `public/icon.png` は**作らない**（前者は不要、後者は
      app-dir 側と `/icon.png` が衝突するため）
- [ ] 素材に実名・個人情報・機密ファイル名が写り込んでいないか、投入前に目視確認した

残るブロッカーは無い。A / B / C は未投入でも CSS モックが出るので **公開は可能**。ただし A（デモ動画）は
販売ドキュメントが「無いと Vim スタイルの価値が伝わらない」と明記しているので、
実質的に launch 必須と考えたほうがよい。

---

## 3. DNS / ホスティング（Cloudflare Pages）

GitHub Pages 用の `public/CNAME` と `.github/workflows/deploy.yml` は **削除済み**。
`CNAME` ファイルは GitHub Pages 専用の仕組みで、Cloudflare Pages では意味を持たないどころか
`out/` に不要なファイルが残るだけなので消してある。

配信方法は 2 通り。どちらか一方を選ぶ。

**A. Git 連携（推奨・push するたび自動デプロイ）**

- [ ] このリポジトリを GitHub に push（現状ローカルのみ、**コミットが 1 つも無い**）
- [ ] Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
- [ ] Build command: `npm run build` / Build output directory: `out` / Framework preset: Next.js (Static HTML Export)
- [ ] Custom domains に `homerun.crosslayer.co.jp` を追加（同一アカウントの DNS なら CNAME は自動作成）

**B. 直接アップロード（GitHub を使わない場合）**

```bash
npx wrangler login
npm run deploy      # next build && wrangler pages deploy out --project-name=homerun
```

- [ ] `wrangler` を devDependency に入れるか、`npx` で都度実行するか決めた
- [ ] Pages プロジェクト名が `--project-name=homerun` と一致している

**共通**

- [ ] `https://homerun.crosslayer.co.jp/` が HTTPS で開く（証明書は Cloudflare が自動発行）
- [ ] `https://homerun.crosslayer.co.jp/thanks/` に直接アクセスして 404 にならない
- [ ] `/privacy/` `/terms/` `/legal/tokushoho/` も直アクセスで開く
- [ ] `robots.txt` と `sitemap.xml` が配信されている
- [ ] `public/_headers` のセキュリティヘッダが効いている

```bash
curl -sI https://homerun.crosslayer.co.jp/ | grep -i "x-content-type-options\|referrer-policy\|x-frame-options"
```

---

## 4. 法務ページ 【公開ブロッカー】

ページは **作成済み**。中身の事実（会社情報・MoR 法人名）だけが §1 の `legal.*` 待ち。

- [x] Privacy Policy（`src/app/privacy/page.tsx`）
      — テレメトリ無し、通信先は `src/lib/site.ts` の `endpoints` から描画（手書きしない）
- [x] Terms / EULA（`src/app/terms/page.tsx`）
      — 3 台まで / 買い切り＋アップデート無償 / 返金 / 準拠法は日本
- [x] 特定商取引法に基づく表記（`src/app/legal/tokushoho/page.tsx`、当サイトで唯一の日本語ページ）
- [x] `Footer.tsx` に 3 本のリンクを戻した
- [ ] **Terms 第 4 条「すべてのアップデートを追加費用なしで提供」で本当に良いか確認**
      （有償メジャーアップグレードの余地を残すなら書き換える。売った後の変更は難しい）
- [ ] Polar のプロダクト設定にも同じ URL を登録
      （`/privacy/` `/terms/`。Polar の審査でも見られる）

### 税務・表記

- [ ] **特定商取引法に基づく表記の要否を確認する。** 販売ドキュメントは「Polar が MoR なので
      断定できない」としている。**税理士と Polar のサポートの両方に確認すること。**
      ページ自体は先に作ってある（不要と分かったら消せばよいが、あって困るものではない）
- [ ] インボイス / 売上計上の扱いを税理士と確認（Polar からの入金は業務委託手数料控除後）

---

## 5. HomeRun アプリ側（別リポジトリ `../HomeRun`）

- [x] `src-tauri/tauri.conf.json` の `copyright` は
      `Copyright © 2026 CrossLayer LLC. All rights reserved.` に**設定済み**（確認済み）
- [x] bundle identifier は `jp.co.crosslayer.homerun` に**設定済み**（確認済み）。
      公開後の変更は別アプリ扱いになり既存ユーザーの設定・ライセンス・アップデートが壊れるため、
      **これ以降は絶対に変えない**
- [ ] LP に書いた仕様と実装が一致しているか照合
      — 14 日トライアル / 3 台まで / 30 日オフライン猶予 / macOS 12.0+ / universal binary
- [ ] 署名・公証・stapling 済みの DMG をビルドし、R2 (`homerun-dist`) にアップロード
- [ ] **クリーンな Mac**（開発機以外）で DMG を開き、Gatekeeper 警告が出ずに起動することを確認

> 🔑 `.env.release` と `~/.tauri/homerun.key` は絶対に git に入れない・貼り付けない。
> 更新用秘密鍵は再発行不可で、失うと既存ユーザーへのアップデートが配信できなくなる。

---

## 6. コーポレートサイト側（別リポジトリ `../CrossLayer-website`）

「crosslayer.co.jp ドメインをうまく使う」の実体はここ。コーポレートサイトから LP へ送客する。

- [ ] `src/lib/i18n.ts` の `content.products.items` に HomeRun を追加
      — `number: "04"`、ja/en の `title` / `subtitle` / `body`、
      `url: "https://homerun.crosslayer.co.jp"`、`cta`
- [ ] `Products.tsx` の `productImages` に HomeRun の画像を追加
- [ ] `crosslayer.co.jp/#products` から LP に遷移できることを実機で確認

---

## 7. 公開直前の動作確認

- [ ] `npm run build` / `npm run lint` がクリーン
- [ ] **すべての Buy ボタンが本番 Checkout Link を指している**（`grep -rn PLACEHOLDER out/` が 0 件）
- [ ] UTM が 4 種そろっている

```bash
grep -o 'utm_medium=[a-z]*' out/index.html | sort -u
# → nav / hero / pricing / faq の 4 種
```

- [ ] **実際にテスト購入する**（Polar のテストモード → 本番少額）
      - [ ] 決済後 `/thanks` に着地し、`checkout_id` が画面に表示される
      - [ ] ライセンスキーのメールが届く（`HOMERUN_` 始まり）
      - [ ] そのキーで実際にアプリがアクティベートできる
      - [ ] Customer Portal にログインできる
- [ ] 375 / 768 / 1440 px で横スクロールが出ない
- [ ] キーボードのみで Download / Buy 両方の CTA に到達できる
- [ ] OGP を確認（Slack / X にリンクを貼って画像とタイトルが出るか）
- [ ] `/thanks` が `noindex` になっている（`out/thanks/index.html` の robots メタ）

---

## 8. 公開後

- [ ] Polar の初回入金を確認
- [ ] Show HN / Product Hunt / r/macapps などへの投稿を検討（`utm_medium` を分けて計測する）
- [ ] 検索での「HomeRun = 野球」衝突を踏まえ、
      *vim file manager macOS* / *Finder replacement keyboard* 等ロングテールでの順位を追う
- [ ] 返金・サポート問い合わせの初動フローを決めておく（誰がいつ返す）
