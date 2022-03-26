const slides = document.querySelector('.slider').children
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const radio = document.querySelector('.radio-btn')

console.log(slides)

let index = 0;
prev.addEventListener('click', () => {
    prevSlide()
    updateCircleIndicator()
    resetTimer()
})
next.addEventListener('click', () => {
    nextSlide()
    updateCircleIndicator()
    resetTimer()
})

circleIndicator()

function prevSlide() {
    if (index == 0)
        index = slides.length - 1
    else
        index--
    changeSlide()
}
function nextSlide() {
    if (index == slides.length - 1)
        index = 0
    else
        index++
    changeSlide()
}
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement('div')
        div.setAttribute('onclick', 'indicateSlide(this)')
        div.id = i
        if (i == 0)
            div.className = 'active'
        radio.appendChild(div)
    }
}
function indicateSlide(element) {
    index = element.id
    changeSlide()
    updateCircleIndicator()
    resetTimer()
}
function updateCircleIndicator() {
    for (let i = 0; i < radio.children.length; i++) {
        radio.children[i].classList.remove('active')
    }
    radio.children[index].classList.add('active')
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}

function autoPlay() {
    nextSlide()
    updateCircleIndicator()
}
let timer = setInterval(autoPlay, 5000)

function resetTimer() {
    clearInterval(timer)
    timer = setInterval(autoPlay, 5000)
}

//Back to top
$('#backtotop').click(function () {
    $('html').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#backtotop').fadeIn();
    } else {
        $('#backtotop').fadeOut();
    }
})


//Scroll
window.addEventListener('scroll', reveal)
function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    let scrollItem = document.querySelectorAll('.service__layout-item')

    for (let i = 0; i < reveals.length; i++) {
        let windownHeight = window.innerHeight;
        let revalTop = reveals[i].getBoundingClientRect().top
        let revalPoint = 150;

        if (revalTop < windownHeight - revalPoint) {
            reveals[i].classList.add('scroll')
            for (let i = 0; i < scrollItem.length; i++) {
                scrollItem[i].classList.add('scroll-item')
            }
        }
        else {
            reveals[i].classList.remove('scroll')
            for (let i = 0; i < scrollItem.length; i++) {
                scrollItem[i].classList.remove('scroll-item')
            }
        }
    }
}

//formlogin
const login = document.querySelector('.js-login')
const formlogin = document.querySelector('.formlogin')
const closelogin = document.querySelector('.login--close')
const home = document.querySelector('.container')
login.addEventListener('click', function () {
    formlogin.classList.add('openlogin')
})
closelogin.addEventListener('click', function () {
    formlogin.classList.toggle('openlogin')
})
// home.addEventListener('click', function () {
//     formlogin.classList.toggle('formlogin')
// })

