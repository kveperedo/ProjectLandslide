const express = require('express')
const app = express()
const path = require('path')
const socket = require('socket.io')
const fs = require('fs')
const moment = require('moment')

const serialport = require('serialport')	// include the serialport library
const SerialPort  = serialport					  // make a local instance of serial
const portName = process.argv[2]				  // get the port name from command line
const portConfig = {
    baudRate: 2400,
};


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

const io = socket(server)

io.on('connection', (socket) => {
    console.log(`Made socket connection`, socket.id)

    socket.on('chat', (data) => {
        console.log(data)
    })
})


const myPort = new SerialPort(portName, portConfig)

myPort.on("open", function () {
    myPort.on('data', function(data) {
        console.log(data.toString('utf8'))

        writeFile(data.toString('utf8'))
        io.emit('data', data.toString('utf8'))
    })
})

//Set Static folder
app.use(express.static(path.join(__dirname, 'frontend')))

const writeFile = (gatheredData) => {
    let arrayData = gatheredData.split('PosiBabies')
    console.log(arrayData)

    fs.readFile('results.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let data2 = JSON.parse(data)
            let objectData = {
                time: moment().format("LLLL"),
                actual: arrayData[0],
                threshold: arrayData[1],
            }
            data2.push(objectData)
            let converted = JSON.stringify(data2)
            fs.writeFile('results.json', converted, (err) => {
            })
        }   
    })
}