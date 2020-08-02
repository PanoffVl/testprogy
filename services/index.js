const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.status(200)
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`)
})