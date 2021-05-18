
let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {
    clapAudio.play()
})

let hiHatBtn = document.querySelector('.hit-hat-btn')
let hiHatAudio = document.getElementById('hi-hat-audio')



document.body.addEventListener('keydown', function (e) {

    if (e.key === 'a') {
        clapAudio.play()
    }
    if (e.key === 's') {
        hiHatAudio.play()
    }

})

