const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 設定 view engine
app.engine('handlebars', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// 設定middleware訊息內容
function timeStamp (req) {
  // console.time('time') // 顯示更精確時間，確認用
  const start = new Date()
  console.log(`${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })} | ${req.method} from ${req.originalUrl} | total time: ${new Date() - start}ms`)
  // console.timeEnd('time') // 顯示更精確時間，確認用
}

// 避免出現'GET from /favicon.ico'
app.get('/favicon.ico', (req, res) => res.status(204))

// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index')
  timeStamp(req)
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  timeStamp(req)
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  timeStamp(req)
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  timeStamp(req)
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
  timeStamp(req)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
  console.log('Link: http://localhost:3000/')
})
