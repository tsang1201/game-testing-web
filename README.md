# Game Testing Web

遊戲測試 Bug 回報範例與測試經驗作品集。純靜態前端（HTML + CSS + JS），使用 **Cloudflare Pages** 呈現（網域 `tck404.com`）。

## 內容框架

- **關於我** — 自我介紹
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

## 部署到 Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**。
2. 選 GitHub repo：`tsang1201/game-testing-web`。
3. **建置設定**（純靜態、無套件管理）：
   - Build command（建置指令）：**留空**
   - Output directory（輸出目錄）：**留空**（直接服務 repo 根目錄，因 `index.html` 在根目錄）
4. 部署完成後，在該 Pages 專案 **Custom domains** 加入 `tck404.com`。

### DNS 設定（在 Cloudflare）

用 Cloudflare Pages 的自訂網域功能時，建議直接**刪除**先前為 GitHub Pages 設的 4 筆 A 記錄與 www CNAME，改為在 Cloudflare Pages 的 Custom domains 頁點「Add custom domain」，由 Cloudflare 自動建立對應記錄（apex 會用 CNAME + proxy 自動解析）。

之後網址即為 `https://tck404.com`。