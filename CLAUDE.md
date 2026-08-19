<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# homerun-website

HomeRun (macOS 向けキーボードファーストなファイルブラウザ) の販売用ランディングページ。
`homerun.crosslayer.co.jp` で Cloudflare Workers に静的配信する（`next build` → `out/`）。
Worker は `wrangler.jsonc` の `assets` で `out/` をそのまま配信するだけの構成。
**OpenNext (`@opennextjs/cloudflare`) は使わない** — `output: "export"` は
`.next/standalone` を生成しないのでアダプタが動かない。

## 重要なルール

- **LP 上の文言はすべて英語**。英語圏の macOS パワーユーザーが対象。
  リポジトリ内のドキュメント (`ASSETS.md` / `RELEASE-CHECKLIST.md` / 本ファイル) は日本語。
- **外部 URL・価格・数値は `src/lib/site.ts` に集約**。コンポーネントに直書きしない。
- **画像 / 動画のパスは `src/lib/assets.ts` に集約**。`null` の間は `MediaFrame` が
  CSS モックを描画するので、素材が無くてもページは壊れない。
- 未確定の値には `// TODO(release):` を付ける。`grep -rn "TODO(release)" src` が
  リリース前作業の一覧になる (`RELEASE-CHECKLIST.md` と対応)。
- Buy ボタンは必ず `buyUrl("<設置場所>")` を通す。UTM は後から計測できないので最初から入れる。
- 秘密情報 (Apple ID / 署名鍵 / パスワード) は**このリポジトリに一切書かない**。
- **`package-lock.json` はビルド環境と同じ npm で生成する**。Cloudflare は
  `.node-version`(22.16.0) に同梱の **npm 10.9.2** で `npm ci` を走らせる。
  手元の新しい npm (11 系) が作った lock は `@emnapi/*` の解決が食い違い、
  `npm ci` が EUSAGE で落ちる。依存を足したら必ず次で作り直すこと:
  ```bash
  npx -y npm@10.9.2 install --package-lock-only
  npx -y npm@10.9.2 ci   # 通ることを確認してからコミット
  ```

## コマンド

- 開発: `npm run dev`
- ビルド: `npm run build` → `out/` に静的出力
- Lint: `npm run lint`
