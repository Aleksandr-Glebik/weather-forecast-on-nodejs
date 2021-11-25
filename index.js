const express = require('express')
const app = express()

app.set('view engine', 'ejs')
//движок который рендерит стр написан на ejs - при запросе на корнеую стр нашего приложения (методом get) мы рендерим файл index с расширением ejs
app.get('/', (req, res) => {
    // res.end('Hello from nodejs')
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000');
})