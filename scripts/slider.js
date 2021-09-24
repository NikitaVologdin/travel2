"use strict"

const slider = document.querySelector('.slider')
const feedbacks = [
    {
        content: `“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil et asperiores commodi molestiae voluptates repellat, ab explicabo debitis!”`,
        name: "Adam Sandler",
        location: "Stokholm, Sweden"
    },
    {
        content: `“Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis vitae est pariatur odit suscipit, beatae atque praesentium libero!”`,
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
    },
    {
        content: `“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis obcaecati, qui autem quidem commodi ratione iure? Culpa eius velit dolor!”`,
        name: "Chris Thomas",
        location: "CEO of Red Button"
    }
]

function addSliderItem (index) {
        return `
        <div class="slider__item slider-item " id="slide${index}">
            <img src="images/main/MikeTaylor@2x.png" alt="Feedback authors picture" class="slider-item__authorImg" id="authorImg">
            <p class="slider-item__content">${feedbacks[index].content}</p>
            <h5 class="slider-item__authorName">${feedbacks[index].name}</h5>
            <h5 class="slider-item__authorLocation">${feedbacks[index].location}</h5>
        </div>`
}

function addSliderPreviousItem (index) {
    return `<div class="slider-item__previous-item"><div class="previous-item">
    <h5 class="slider-item__authorName">${feedbacks[index].name}</h5>
    <h5 class="slider-item__authorLocation">${feedbacks[index].location}</h5></div>
</div>`
}

function makeActiveSlide (cssSelector) {
    let firstSlide = document.querySelectorAll(cssSelector)

    if (cssSelector === ".slider-item__previous-item") {
        firstSlide[1].classList.add('_active')
    } else if ( cssSelector === ".slider-item") {
        firstSlide[0].classList.add('_active')
    }
}

function addSlides(addItem) {
    for (let i = 0; i < feedbacks.length; i++) {
        slider.insertAdjacentHTML('afterbegin', addItem(i))
    }
}        

function fillSlider() {
    addSlides(addSliderItem)
    addSlides(addSliderPreviousItem)
    makeActiveSlide(".slider-item")
    makeActiveSlide(".slider-item__previous-item")
}

fillSlider()

const slides = document.querySelectorAll('.slider-item')
const previousSlides = document.querySelectorAll('.slider-item__previous-item')
const buttons = document.querySelector('.switch')

buttons.addEventListener('click', (event)=>{

    let activeSlide = slider.querySelector('.slider-item._active')
    let activePreviousSlide = slider.querySelector('.slider-item__previous-item._active')
    let index = Number(event.target.getAttribute('data-index'))
    let activeButton = buttons.querySelector('.switch__button_active')

    if(event.target.id === 'button0') {
        displaySlide(index, activeSlide)
        displayNextPreviousSlide(index, activePreviousSlide)
        displayActiveButton(activeButton, event)
    } else if (event.target.id === 'button1') {
        displaySlide(index, activeSlide)
        displayNextPreviousSlide(index, activePreviousSlide)
        displayActiveButton(activeButton, event)
    } else if (event.target.id === 'button2') {
        displaySlide(index, activeSlide)
        displayNextPreviousSlide(index, activePreviousSlide)
        displayActiveButton(activeButton, event)
    }
})

function displaySlide (slideIndex, activeSlide){
    activeSlide.classList.remove('_active')
    slides[slideIndex].classList.add('_active')
}

function displayNextPreviousSlide (slideIndex, activePreviousSlide) {
    activePreviousSlide.classList.remove('_active')

    slideIndex++

    if (slideIndex > feedbacks.length - 1) {
        previousSlides[0].classList.add('_active')
    } else {
        previousSlides[slideIndex].classList.add('_active')
    }
}

function displayActiveButton (activeButton, event) {
    activeButton.classList.remove('switch__button_active')
    event.target.classList.add('switch__button_active')
}