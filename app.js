// Change Navigation Effect
let sideParent = document.getElementById('sideBar')

sideParent.addEventListener('click', function (side) {
    if (side.target !== side.currentTarget) {
        document.querySelector(".sideEffect").classList.remove("sideEffect")
        side.target.classList.add('sideEffect')
    }
    side.stopPropagation()
})

// Change Window depending on Navigation
let mainBar = document.querySelectorAll('div.mainbar')
let mainHome = document.getElementById('mainHome')
let mainDashboard = document.getElementById('mainDashboard')
let mainSettings = document.getElementById('mainSettings')
let mainAcc = document.getElementById('mainAcc')
let sideHome = document.getElementById('sideHome')
let sideDash = document.getElementById('sideDash')
let sideAcc = document.getElementById('sideAcc')
let sideSettings = document.getElementById('sideSettings')

// Remove all other windows
let removeWindow = function () {
    mainBar.forEach(function (main) {
        main.style.display = 'none'
    })
}

sideHome.addEventListener('click', function () {
    removeWindow()
    mainHome.style.display = 'block'
})

sideDash.addEventListener('click', function () {
    removeWindow()
    mainDashboard.style.display = 'block'
})

sideAcc.addEventListener('click', function () {
    removeWindow()
    mainAcc.style.display = 'block'
})

sideSettings.addEventListener('click', function () {
    removeWindow()
    mainSettings.style.display = 'block'
})

//Turn on and off Indicating System
let indSystemButton = document.getElementById('indInput')

indSystemButton.addEventListener('change', function () {
    if (this.checked === true) {
        indSystemButton.checked = true
        console.log(indSystemButton.checked)
        //use shit to turn on arduino
    } else {
        let result = confirm(`Turn off Indicating System?`)
        if (!result) {
            indSystemButton.checked = true
            console.log(indSystemButton.checked)
            //use shit to turn off arduino
        } else {
            indSystemButton.checked = false
            console.log(this.checked)
            //arduino stays on
        }
    }
})

//Turn on and off Sensing System
let sensSystemButton = document.getElementById('sensInput')

sensSystemButton.addEventListener('change', function () {
    if (this.checked === true) {
        sensSystemButton.checked = true
        console.log(sensSystemButton.checked)
        //use shit to turn on arduino
    } else {
        let result = confirm(`Turn off Sensing System?`)
        if (!result) {
            sensSystemButton.checked = true
            console.log(sensSystemButton.checked)
            //use shit to turn off arduino
        } else {
            sensSystemButton.checked = false
            console.log(this.checked)
            //arduino stays on
        }
    }
})