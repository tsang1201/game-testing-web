# Game Testing Web

遊戲測試 Bug 回報範例與測試經驗作品集。純靜態前端（HTML + CSS + JS），使用 GitHub Pages 呈現。

## 內容框架

- **關於我** — 自我介紹（之後補上）
- **Bug 回報範例**
  - 遊戲名稱 / 測試環境（手機型號、系統版本）
  - 重現步驟（Step 1, 2, 3...）
  - 預期結果 vs 實際結果
  - 嚴重程度（Critical / Major / Minor）
  - 截圖或短影片
- **測試經驗**
  - 測試了什麼遊戲 / 專案
  - 你負責的範圍
  - 你發現了什麼、如何記錄
  - 有沒有特別的成果

## 本機預覽

```bash
# 任一可用的本機伺服器，例如：
npx serve .
```

或直接雙擊開啟 `index.html`。

## 部署到 GitHub Pages

1. 將此專案推上 GitHub 新 repo（例如 `yourname/game-testing-web`）。
2. 在 repo 的 **Settings → Pages**：
   - Source 選 **GitHub Actions**（使用 `.github/workflows/pages.yml` 自動部署）。
   - 若不想用 Actions，也可直接選「Deploy from a branch → main → / (root)」。
3. 推送 `main` 後，Pages 會自動產生網站，網址如：
   `https://<username>.github.io/game-testing-web/`

> 若要客製化域名，在 Settings → Pages → Custom domain 設定即可。