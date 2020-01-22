let net = require('net')
const PORT = 5555
const HOST = '0.0.0.0'

let callback = (sock) => {
    console.log('Connecting from : ', sock.remoteAddress)
    sock.on('data', (data) => {
        console.log('incoming data : ' + data)
        sock.write('OK')
    })

    sock.on('error', (error) => {
        console.log('Error occurred : ', error)
    })

    sock.on('close', () => {
        console.log('Client is disconnected')
    })
}

let server = net.createServer(callback)
server.listen(PORT, HOST)

console.log('Server is running at : ', PORT)