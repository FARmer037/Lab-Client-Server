let net = require('net')
let client = new net.Socket()
const PORT = 5555
const HOST = 'localhost'

let count = 0

client.connect(PORT, HOST, () => {
    console.log('connecting successful')
    client.write('5935512037')
})

client.on('data', (data) => {
    console.log('Data from server : ' + data)

    let answer = Math.floor(Math.random() * 21)
    answer = parseInt(answer)
    client.write(answer.toString())
    count++

    if('BINGO' == data.toString())
        client.destroy()

    // if('BINGO' == data.toString() || count > 5)
    //     client.destroy()
})