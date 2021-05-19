let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {
    handleClick(clapBtn, clapAudio)
})

let hiHatBtn = document.querySelector('.hi-hat-btn')
let hiHatAudio = document.getElementById('hi-hat-audio')
hiHatBtn.addEventListener('click', function (e) {
    handleClick(hiHatBtn, hiHatAudio)
})

let kickBtn = document.querySelector('.kick-btn')
let kickAudio = document.getElementById('kick-audio')
kickBtn.addEventListener('click', function (e) {
    handleClick(kickBtn, kickAudio)
})

let openHatBtn = document.querySelector('.open-hat-btn')
let openHatAudio = document.getElementById('open-hat-audio')
openHatBtn.addEventListener('click', function (e) {
    handleClick(openHatBtn, openHatAudio)
})

let boomBtn = document.querySelector('.boom-btn')
let boomAudio = document.getElementById('boom-audio')
boomBtn.addEventListener('click', function (e) {
    handleClick(boomBtn, boomAudio)
})

let rideBtn = document.querySelector('.ride-btn')
let rideAudio = document.getElementById('ride-audio')
rideBtn.addEventListener('click', function (e) {
    handleClick(rideBtn, rideAudio)
})

let snareBtn = document.querySelector('.snare-btn')
let snareAudio = document.getElementById('snare-audio')
snareBtn.addEventListener('click', function (e) {
    handleClick(snareBtn, snareAudio)
})

let tomBtn = document.querySelector('.tom-btn')
let tomAudio = document.getElementById('tom-audio')
tomBtn.addEventListener('click', function (e) {
    handleClick(tomBtn, tomAudio)
})

let tinkBtn = document.querySelector('.tink-btn')
let tinkAudio = document.getElementById('tink-audio')
tinkBtn.addEventListener('click', function (e) {
    handleClick(tinkBtn, tinkAudio)
})

document.body.addEventListener('keypress', function (e) {
    let key = e.key.toLowerCase()
    switch (key) {
        case 'a':
            handleClick(clapBtn, clapAudio)
            break
        case 'k':
            handleClick(hiHatBtn, hiHatAudio)
            break
        case 'v':   // double kick
        case 'f':
            handleClick(kickBtn, kickAudio)
            break
        case 'l':
            handleClick(openHatBtn, openHatAudio)
            break
        case 'b': // double kick
        case 'g':
            handleClick(boomBtn, boomAudio)
            break
        case 'h':
            handleClick(rideBtn, rideAudio)
            break
        case 'j':
            handleClick(snareBtn, snareAudio)
            break
        case 's':
            handleClick(tomBtn, tomAudio)
            break
        case 'd':
            handleClick(tinkBtn, tinkAudio)
            break
        default:

    }


})

let handleClick = (element, audio) => {
    element.classList.add('click')
    setTimeout(() => {
        element.classList.remove('click')
    }, 150)

    audio.currentTime = 0
    audio.play()
}

let header = document.querySelector("header")
let aboutButton = document.getElementById("about-btn")
let aboutSection = document.querySelector('.about')
let initialMarginValue = header.style.marginBottom

aboutButton.addEventListener("click", function () {
    if (aboutSection.style.display === 'none') {
        aboutButton.innerHTML = "Close"
        aboutSection.style.display = 'flex'
        header.style.marginBottom = '0'
        header.style.flexDirection = 'column'
    }

    else {
        aboutSection.style.display = 'none'
        aboutButton.innerHTML = "About"
        header.style.marginBottom = initialMarginValue
        header.style.flexDirection = 'row'
    }

})

let codeButton = document.getElementById("code-link")
codeButton.addEventListener("click", function () {
    window.open("https://github.com/sc-martel93/js-drumk-kit")
})
