
let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {
    clapAudio.play()
})

let hiHatBtn = document.querySelector('.hi-hat-btn')
let hiHatAudio = document.getElementById('hi-hat-audio')

let kickBtn = document.querySelector('.kick-btn')
let kickAudio = document.getElementById('kick-audio')

let openHatBtn = document.querySelector('.open-hat-btn')
let openHatAudio = document.getElementById('open-hat-audio')

let boomBtn = document.querySelector('.boom-btn')
let boomAudio = document.getElementById('boom-audio')

let rideBtn = document.querySelector('.ride-btn')
let rideAudio = document.getElementById('ride-audio')

let snareBtn = document.querySelector('.snare-btn')
let snareAudio = document.getElementById('snare-audio')

let tomBtn = document.querySelector('.tom-btn')
let tomAudio = document.getElementById('tom-audio')

let tinkBtn = document.querySelector('.tink-btn')
let tinkAudio = document.getElementById('tink-audio')

document.body.addEventListener('keypress', function (e) {
    let key = e.key.toLowerCase()
    switch (key) {
        case 'a':
            clapAudio.currentTime = 0
            clapAudio.play()
            handleOnClick(clapBtn)
            break
        case 'k':
            hiHatAudio.currentTime = 0
            hiHatAudio.play()
            handleOnClick(hiHatBtn)
            break
        case 'v':   // double kick
        case 'f':
            kickAudio.currentTime = 0
            kickAudio.play()
            handleOnClick(kickBtn)
            break
        case 'l':
            openHatAudio.currentTime = 0
            openHatAudio.play()
            handleOnClick(openHatBtn)
            break
        case 'g':
            boomAudio.currentTime = 0
            boomAudio.play()
            handleOnClick(boomBtn)
            break
        case 'h':
            rideAudio.currentTime = 0
            rideAudio.play()
            handleOnClick(rideBtn)
            break
        case 'j':
            snareAudio.currentTime = 0
            snareAudio.play()
            handleOnClick(snareBtn)
            break
        case 's':
            tomAudio.currentTime = 0
            tomAudio.play()
            handleOnClick(tomBtn)
            break
        case 'd':
            tinkAudio.currentTime = 0
            tinkAudio.play()
            handleOnClick(tinkBtn)
            break
        default:
            console.log("Press a proper key!");
    }


})

let handleOnClick = (element) => {
    if (element.classList.contains('click')) {
        element.classList.remove('click')
        element.classList.add('click')
    }
    element.classList.add('click')
    setTimeout(() => {
        element.classList.remove('click')
    }, 150)
}

