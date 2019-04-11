let mainDashboard = document.getElementById('mainDashboard')
let mainHome = document.getElementById('mainHome')
let sideHome = document.getElementById('sideHome')
let sideDash = document.getElementById('sideDash')
let sideAcc = document.getElementById('sideAcc')
let sideSettings = document.getElementById('sideSettings')

let sideParent = document.getElementById('sideBar')

sideParent.addEventListener('click', function (side) {
    if (side.target !== side.currentTarget) {
        document.querySelector(".sideEffect").classList.remove("sideEffect")
        side.target.classList.add('sideEffect')
    }
    side.stopPropagation()
})

sideHome.addEventListener('click', function () {
    mainHome.style.display = 'block'
    mainDashboard.style.display = 'none'
    mainAcc.style.display = 'none'
    mainSettings.style.display = 'none'
})

sideDash.addEventListener('click', function () {
    mainHome.style.display = 'none'
    mainDashboard.style.display = 'block'
    mainAcc.style.display = 'none'
    mainSettings.style.display = 'none'
})

sideAcc.addEventListener('click', function () {
    mainHome.style.display = 'none'
    mainDashboard.style.display = 'none'
    mainAcc.style.display = 'block'
    mainSettings.style.display = 'none'
})

sideSettings.addEventListener('click', function () {
    mainHome.style.display = 'none'
    mainDashboard.style.display = 'none'
    mainAcc.style.display = 'none'
    mainSettings.style.display = 'block'
})
