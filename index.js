const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
//движок который рендерит стр написан на ejs - при запросе на корнеую стр нашего приложения (методом get) мы рендерим файл index с расширением ejs

app.get('/', (req, res) => {
    // res.end('Hello from nodejs')
    res.render('index')
})

app.post('/', (req, res) => {
    // console.log(req.body);
    const { city } = req.body
    console.log(city);
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000');
})