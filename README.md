# 株式会社夏目住宅 コーポレートサイト

Astro + GitHub Pages で構築するコーポレートサイトです。

## 開発

```sh
npm install
npm run dev       # http://localhost:4321/natsume-jutaku-website/
npm run build      # ./dist/ に静的ファイルを生成
npm run preview
```

## コンテンツの追加・編集

- 施工事例: `src/content/case-studies/` にフォルダを作り `index.md` を追加(画像も同じフォルダに配置)
- お客様の声: `src/content/testimonials/` に `.md` ファイルを追加
- 会社情報(住所・電話番号・対応エリアなど): `src/lib/site.ts` の `SITE` オブジェクトを編集
- 配色・フォント: `src/styles/tokens.css`

## デプロイ

`main` ブランチに push すると GitHub Actions (`.github/workflows/deploy.yml`) が自動的にビルドし、GitHub Pages に公開します。

独自ドメインを接続する場合は `astro.config.mjs` の `site`/`base` を更新し、`public/CNAME` を追加してください。
