let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
const PORT = 8000

let app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000
    }
}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    const { userEmail } = req.session

    // console.log(userEmail)

    res.render('admin', { email: userEmail })
})

app.post('/', (req, res) => {
    const { email, password } = req.body

    if (password == 240311) {
        const user = {
            email: email,
            password: password
        }
        if (user) {
            req.session.userEmail = email
            // return res.redirect('/admin')
        }
    }

    res.redirect('/admin')
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
))