# og.png の作り方

`public/og.png` は `scripts/og.html` を **1200×630 でスクリーンショットしただけ**の
画像。デザインツールを持ち出さずに、LP のヒーローとコピーを完全に一致させるための
割り切り。ヒーローの文言を変えたら `og.html` 側も直して撮り直すこと。

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --screenshot=public/og.png --window-size=1200,630 \
  --default-background-color=FFFFFFFF \
  "file://$PWD/scripts/og.html"
```

アプリアイコンは `../HomeRun/src-tauri/icons/icon.png` を base64 で埋め込んである
（`file://` でも外部読み込みが起きないようにするため）。アイコンを差し替えたときは
`og.html` の `data:image/png;base64,` を入れ替える。

## 意図的にやっていること

- **白背景**：LP 本体が白基調なので、カードだけ暗いとブランドがちぐはぐになる。
- **文字は極端に大きく**：SNS のプレビューは実寸の 1/3 以下で表示される。
  小さい説明文を入れても読めないので、要素は 4 つ（アイコン / 一行の肩書き /
  見出し / キーキャップ）だけに絞ってある。
- **外周のヘアライン**：X も Slack も白背景なので、枠が無いとカードの縁が溶ける。
