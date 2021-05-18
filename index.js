
let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {
    clapAudio.play()
})

let hiHatBtn = document.querySelector('.hit-hat-btn')
let hiHatAudio = document.getElementById('hi-hat-audio')

let kickBtn = document.querySelector('.kick-btn')
let kickAudio = document.getElementById('kick-audio')


document.body.addEventListener('keydown', function (e) {

    if (e.key === 'a') {
        clapAudio.play()
    }
    if (e.key === 's') {
        hiHatAudio.play()
    }
    if (e.key === 'd')
        kickAudio.play()

})

