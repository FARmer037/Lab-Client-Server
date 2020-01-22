let net = require('net')
let client = new net.Socket()
const PORT = 5555
const HOST = 'localhost'

client.connect(PORT, HOST, () => {
    console.log('connecting successful')
    client.write('Hello World')
})

client.on('data', (data) => {
    console.log('Data from server : ' + data)
    client.destroy()
})