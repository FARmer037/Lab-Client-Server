let express = require('express'),
    app = express()
const PORT = 80

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/foo', (req, res) => {
    res.send('Foo')
})

app.listen(PORT, () => {
    console.log('Server is running at: ', PORT)
})