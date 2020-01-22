let net = require('net')
const PORT = 5555
const HOST = '0.0.0.0'

let callback = (sock) => {
    console.log('Connecting from : ', sock.remoteAddress)
    sock.on('data', (data) => {
        let answer = Math.floor(Math.random() * 21)

        if (data.toString().length == 10) {
            console.log('incoming data : ' + data)
            sock.write('OK')
        }

        if (data == answer) {
            console.log('incoming data : ' + data)
            sock.write('BINGO')
            count = 0
        }
        else {
            sock.write('WRONG')
        }
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