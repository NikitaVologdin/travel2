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

function addSlides() {
    for (let i = 0; i < feedbacks.length; i++) {
        if ( i === 0) {
            slider.insertAdjacentHTML('afterbegin', addSliderItem(i, true))
        } else {
            slider.insertAdjacentHTML('afterbegin', addSliderItem(i))
        } 
    }
}

function addSliderItem (index, active = false) {
    if (active === true) {
        return `
        <div class="slider__item slider-item _active" id="slide${index}">
            <img src="images/main/MikeTaylor@2x.png" alt="Feedback authors picture" class="slider-item__authorImg" id="authorImg">
            <p class="slider-item__content">“${feedbacks[index].content}”</p>
            <h5 class="slider-item__authorName">${feedbacks[index].name}</h5>
            <h5 class="slider-item__authorLocation">${feedbacks[index].location}</h5>
        </div>`
    } else {
        return `
        <div class="slider__item slider-item " id="slide${index}">
            <img src="images/main/MikeTaylor@2x.png" alt="Feedback authors picture" class="slider-item__authorImg" id="authorImg">
            <p class="slider-item__content">“${feedbacks[index].content}”</p>
            <h5 class="slider-item__authorName">${feedbacks[index].name}</h5>
            <h5 class="slider-item__authorLocation">${feedbacks[index].location}</h5>
        </div>`
    }

}

addSlides()

// let sliderItem = createElement('div')
// sliderItem.classList.add('slider__item', 'slider-item')
// sliderItem.id = `slide${index}`
// let sliderItemAuthorImg = createElement('div')
// let sliderItemParagraph = createElement('p')
// let authorName = createElement('h5')
// let authorLocation = createElement('h5')
// slider.appendChild(sliderItem)


const slides = document.querySelectorAll('.slider-item')
const buttons = document.querySelector('.switch')
let firstSlide = document.querySelector('#slide0')
firstSlide.classList.add('_active')

buttons.addEventListener('click', (event)=>{

    let activeSlide = slider.querySelector('._active')
    let index = Number(event.target.getAttribute('data-index'))
    let activeButton = buttons.querySelector('.switch__button_active')

    if(event.target.id === 'button0') {
        displaySlide(index, activeSlide)
        displayActiveButton(activeButton, event)
    } else if (event.target.id === 'button1') {
        displaySlide(index, activeSlide)
        displayActiveButton(activeButton, event)
    } else if (event.target.id === 'button2') {
        displaySlide(index, activeSlide)
        displayActiveButton(activeButton, event)
    }
})

function displaySlide (slideIndex, activeSlide){
    activeSlide.classList.remove('_active')
    slides[slideIndex].classList.add('_active')
}

function displayActiveButton (activeButton, event) {
    activeButton.classList.remove('switch__button_active')
    event.target.classList.add('switch__button_active')
}