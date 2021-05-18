
let clapBtn = document.querySelector('.clap-btn')
let clapAudio = document.getElementById('clap-audio')
clapBtn.addEventListener('click', function (e) {
    clapAudio.play()
})
document.body.addEventListener('keydown', function (e) {
    if (e.key === 'a')
        clapAudio.play()


})