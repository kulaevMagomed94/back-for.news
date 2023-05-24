const express = require('express')
const mongoose = require("mongoose");
require('dotenv').config()

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.use(require('./routes/category.routes'));
app.use(require('./routes/commentary.routes'));
app.use(require('./routes/news.routes'));


app.listen(port, ()=> {
    console.log('Сервер запущен')
})
