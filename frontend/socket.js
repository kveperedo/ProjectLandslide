const socket = io.connect('http://localhost:5000')
const graph = document.querySelector('.graph')

socket.on('data', (data) => {
    console.log(data)
    const data1 = data.split("PosiBabies")
    console.log(data1)
    if (data1[2] === undefined) {
        data1[2] = 0
    }
    dataRec.push({
        y: data1[0],
        x: moment().format("hh:mm:ss a"),
        z: data1[2],
    })
    morrisGraph.setData(dataRec);
    if (dataRec.length > 20) {
        dataRec.shift()
    }
    document.querySelector(".dataPut").textContent = data1[1]
    // if data1[1] >= 150 ? indSystemButton.checked = true : indSystemButton.checked = false
})
const dataRec = []
const morrisGraph = new Morris.Area({
    element: 'morris-graph',
    data: dataRec,
    xkey: 'x',
    ykeys: ['z', 'y'],
    labels: ['Threshold Rainfall Intensity', 'Actual Rainfall Intensity'],
    parseTime: false,
    behaveLikeLine: true,
    lineColors: ['grey', '#3C4CB1'],
    postUnits: [' mm/hr'],
    hideHover: true,
    gridTextFamily: 'Ubuntu',
    gridTextSize: '14',
    gridTextColor: 'black',
})
