# Time Stamps Middleware v1.0.0 (時間戳記，第一版)

## Alpha Camp 學期三(2019年版) Final Exam A29: 「專業知識與技術」題目
### Q1, Q2: 實作 Middleware


## 開發者：
Bob Yu-Zhen Huang[(BOBYZH)](https://github.com/BOBYZH)

## 如何使用：
0. 至少先在電腦上裝好Node.js與Git
1. 從本專案頁面將檔案下載，或複製(clone)到要操作的電腦上:
```
git clone https://github.com/BOBYZH/SIII-Q1-Q2-time-stamps-middleware
```
2. 開啟終端機(terminal)，將目錄切換至專案資料夾(SIII-Q1-Q2-time-stamps-middleware)：
```
cd SIII-Q1-Q2-time-stamps-middleware
```
3. 確認是否有在全域(global)環境安裝nodemon；沒有的話建議安裝，在終端機輸入：
```
npm i nodemon -g
```
4. 使用npm安裝需要的套件，套件列表與版本詳見於[package.json](https://github.com/BOBYZH/SIII-Q1-Q2-time-stamps-middleware/blob/master/package.json)的"dependencies"：
```
npm i 
```
5. 執行本專案：
```
npm run dev

# 不使用nodemon的話，可改用以下指令，但無法在修改代碼後即時更新：
npm run start
```
6. 開啟預覽連結
- 若是在本機操作，於瀏覽器網址列輸入[http://localhost:3000](http://localhost:3000)（終端機也會有提示）；
- 若使用虛擬主機，則須配合主機服務設定另用網址

## 主要功能說明：
### timeStamp()
收到瀏覽器的請求 (req) 與送出回應 (response) 時， 會把請求的 HTTP 方法、網址 (url)顯示到終端機上，並留下兩次時間戳記 (time-stamps) 的 middleware，顯示的訊息該像這樣：
```
2020-7-2 02:02:09 | GET from / | total time: 1ms
```