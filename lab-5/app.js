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

//  กรณีไม่อยาก refresh แล้วต่อ login ใหม่
const redirectAdmin = (req, res, next) => {
    if (req.session.userEmail) {
        res.redirect('/admin')
    }
    else {
        next()
    }
}

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    const { userEmail } = req.session

    console.log(req.session.userEmail)

    // console.log(userEmail)

    if(userEmail) {
        res.render('admin', { email: userEmail, isLogin: true })
    }
    else {
        res.render('admin', { isLogin: false })
    }

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
            return res.redirect('/admin')
        }
    }

    res.redirect('/admin')
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/')
        }
    })
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
))