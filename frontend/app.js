// Change Navigation Effect
const sideParent = document.getElementById('sideBar')

sideParent.addEventListener('click', function (side) {
    if (side.target !== side.currentTarget && side.target !== sideLogout) {
        document.querySelector(".sideEffect").classList.remove("sideEffect")
        side.target.classList.add('sideEffect')
    }
    side.stopPropagation()
})

// Change Window depending on Navigation
const mainBar = document.querySelectorAll('div.mainbar')
const mainHome = document.getElementById('mainHome')
const mainDashboard = document.getElementById('mainDashboard')
const mainContacts = document.getElementById('mainContacts')
const mainAcc = document.getElementById('mainAcc')
const sideHome = document.getElementById('sideHome')
const sideDash = document.getElementById('sideDash')
const sideAcc = document.getElementById('sideAcc')
const sideContacts = document.getElementById('sideContacts')
const sideLogout = document.getElementById('sideLogout')

// Remove all other windows and icons
const removeStuff = function () {
    mainBar.forEach(function (main) {
        main.style.display = 'none'
    })
    document.getElementById('iconHome').src = 'img/icon_home.png'
    document.getElementById('iconDash').src = 'img/icon_dashboard.png'
    document.getElementById('iconAcc').src = 'img/icon_customers.png'
    document.getElementById('iconContacts').src = 'img/icon_contacts.png'
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

sideContacts.addEventListener('click', function () {
    removeStuff()
    mainContacts.style.display = 'block'
    document.getElementById('iconContacts').src = 'img/icon_contacts_active.png'
})

//Turn on and off Indicating System
const indSystemButton = document.getElementById('indInput')

indSystemButton.addEventListener('change', function () {
    if (!this.checked === true) {
        indSystemButton.checked = false
        console.log(indSystemButton.checked)
        //use shit to turn on arduino
        socket.emit('chat', {
            message: `Turned off Indicating System`,
            indStatus: false,
        })  
    } else {
        Swal.fire({
            title: 'Turn on Indicating System?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3C4CB1',
            cancelButtonText: 'No',
            cancelButtonColor: '#FF6565',
        }).then((result) => {
            if (result.value) {
                indSystemButton.checked = true
                //use shit to turn off arduino
                socket.emit('chat', {
                    message: `Turned on Indicating System`,
                    indStatus: true,
                })
            } else {
                indSystemButton.checked = false
                //arduino stays on

            }
        })
    }
})

//Turn on and off Sensing System
const sensSystemButton = document.getElementById('sensInput')

sensSystemButton.addEventListener('change', function () {
    if (this.checked === true) {
        sensSystemButton.checked = true
        console.log(sensSystemButton.checked)
        //use shit to turn on arduino
        socket.emit('chat', {
            message: `Turned on Sensing System`,
            sensStatus: true,
        })
    } else {
        Swal.fire({
            title: 'Turn off Sensing System?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3C4CB1',
            cancelButtonText: 'No',
            cancelButtonColor: '#FF6565',
        }).then((result) => {
            if (result.value) {
                sensSystemButton.checked = false
                //use shit to turn off arduino
                socket.emit('chat', {
                    message: `Turned off Sensing System`,
                    sensStatus: false,
                })
            } else {
                sensSystemButton.checked = true
                //arduino stays on
            }
        })
    }
})

// Login Page
const mainPage = document.getElementById('mainPage')
const loginPage = document.getElementById('loginPage')

sideLogout.addEventListener('click', function () {
    // let result = confirm('Are you sure you want to logout?')
    // if (result) {
    // mainPage.style.display = 'none'
    // loginPage.style.display = 'flex'
    // }
    Swal.fire({
        title: 'Are you sure you want to logout?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#3C4CB1',
        cancelButtonText: 'No',
        cancelButtonColor: '#FF6565',
        scrollbarPadding: 'true',
      }).then((result) => {
        if (result.value) {
            mainPage.style.display = 'none'
            loginPage.style.display = 'flex'
        }
    })
})

document.querySelector('#loginForm').addEventListener('submit', function(e) {
    // e.preventDefault()
    document.querySelectorAll('.userInput').forEach(function (input) {
        input.value = ''
    })
})
