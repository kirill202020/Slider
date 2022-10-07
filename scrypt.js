const btnNext = document.querySelector('.btn__next'),
    btnPrev = document.querySelector('.btn__prev'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot')


    let index = 0

const changeActive = n =>{
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}


const changeDots = n =>{
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const changeState = ind =>{
    changeActive(ind)
    changeDots(ind)
}


const nextSlide = () =>{
    if (index == slides.length -1) {
        index = 0
        changeState(index)
    } else {
        index++
        changeState(index)
    }
}
btnNext.addEventListener('click', nextSlide)


const prevSlide = () =>{
    if (index == 0) {
        index = slides.length -1
        changeState(index)
    } else {
        index--
        changeState(index)
    }
}


btnPrev.addEventListener('click', prevSlide)



dots.forEach((item, indexDot) => {
    item.addEventListener('click', ()=>{
        index = indexDot
        changeState(index)
    })
})


setInterval(nextSlide, 5000)