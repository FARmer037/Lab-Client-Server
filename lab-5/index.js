let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')
const PORT = 80

app.use(express.static('./public'))
app.use(cookieParser('foobar'))

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/getCk', (req, res) => {
    res.send('' + req.cookies.name + '' + req.cookies.surname)
})

app.get('/setCk', (req, res) => {
    res.cookie('name', 'John')
    res.cookie('surname', 'Wick')
    res.send('Set cookie done!')
})

app.post('/add', urlencodedParser, (req, res) => {
    let result = parseInt(req.body.a) + parseInt(req.body.b)
    res.send('Result: ' + result)
})

app.listen(PORT, () => {
    console.log('Server is running at: ', PORT)
})