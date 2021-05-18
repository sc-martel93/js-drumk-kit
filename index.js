
let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {

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
            console.log("Press a proper key!");
    }


})

let hande

let handleClick = (element, audio) => {
    element.classList.add('click')
    setTimeout(() => {
        element.classList.remove('click')
    }, 150)

    audio.currentTime = 0
    audio.play()
}

