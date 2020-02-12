let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session')
const PORT = 80

app.use(express.static('./public'))
app.use(cookieParser('foobar'))
app.use(session({
    secret: 'foo bar',
    cookie: { maxAge: 6000}
}))

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use((req, res, next) => {
    let sess = req.session
    sess.views = (sess.views)? ++sess.views : 1
    console.log(sess.views)
    next()
})

app.get('/views', (req, res) => {
    res.send('The page is loaded: ' + req.session.views)
})

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