// Change Navigation Effect
const sideParent = document.getElementById('sideBar')

sideParent.addEventListener('click', function (side) {
    if (side.target !== side.currentTarget) {
        document.querySelector(".sideEffect").classList.remove("sideEffect")
        side.target.classList.add('sideEffect')
    }
    side.stopPropagation()
})

// Change Window depending on Navigation
const mainBar = document.querySelectorAll('div.mainbar')
const mainHome = document.getElementById('mainHome')
const mainDashboard = document.getElementById('mainDashboard')
const mainSettings = document.getElementById('mainSettings')
const mainAcc = document.getElementById('mainAcc')
const sideHome = document.getElementById('sideHome')
const sideDash = document.getElementById('sideDash')
const sideAcc = document.getElementById('sideAcc')
const sideSettings = document.getElementById('sideSettings')

// Remove all other windows and icons
const removeStuff = function () {
    mainBar.forEach(function (main) {
        main.style.display = 'none'
    })
    document.getElementById('iconHome').src = 'img/icon_home.png'
    document.getElementById('iconDash').src = 'img/icon_dashboard.png'
    document.getElementById('iconAcc').src = 'img/icon_customers.png'
    document.getElementById('iconSettings').src = 'img/icon_setting.png'
}

sideHome.addEventListener('click', function () {
    removeStuff()
    mainHome.style.display = 'block'
    document.getElementById('iconHome').src = 'img/icon_home_active.png'
})

sideDash.addEventListener('click', function () {
    removeStuff()
    mainDashboard.style.display = 'block'
    document.getElementById('iconDash').src = 'img/icon_dashboard_active.png'
})

sideAcc.addEventListener('click', function () {
    removeStuff()
    mainAcc.style.display = 'block'
    document.getElementById('iconAcc').src = 'img/icon_customers_active.png'
})

sideSettings.addEventListener('click', function () {
    removeStuff()
    mainSettings.style.display = 'block'
    document.getElementById('iconSettings').src = 'img/icon_setting_active.png'
})

//Turn on and off Indicating System
const indSystemButton = document.getElementById('indInput')

indSystemButton.addEventListener('change', function () {
    if (this.checked === true) {
        indSystemButton.checked = true
        console.log(indSystemButton.checked)
        //use shit to turn on arduino
    } else {
        let result = confirm(`Turn off Indicating System?`)
        console.log(result)
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
const sensSystemButton = document.getElementById('sensInput')

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

// Login Page
const mainPage = document.getElementById('mainPage')
const loginPage = document.getElementById('loginPage')
const logoutButton = document.getElementById('logoutButton')

logoutButton.addEventListener('click', function() {
    mainPage.style.display = 'none'
    loginPage.style.display = 'block'
})