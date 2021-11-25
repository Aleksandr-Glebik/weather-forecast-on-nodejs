const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')
const app = express()
//3add0df8cd60074880ae83777aafe663

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
//движок который рендерит стр написан на ejs - при запросе на корнеую стр нашего приложения (методом get) мы рендерим файл index с расширением ejs

app.get('/', (req, res) => {
    // res.end('Hello from nodejs')
    res.render('index')
})

app.post('/', async (req, res) => {
    // console.log(req.body);
    const { city } = req.body
    // console.log(city);
   const {weather, error} = await weatherRequest(city)
   console.log('Weathe: ', weather);
   console.log('Error: ', error);
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000');
})