"use strict"

let feedbacks = [ 
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

let buttons = document.querySelector(".switch")
    buttons.addEventListener('click', (event)=>{
        console.log(event)
        let currentSlide = document.querySelector('.slider-item')
            currentSlide.remove()
        
            newSlide(event.target.id)
    
    })


function mockup (index) {
    return `
    <div class="slider__item slider-item">
        <div class="slider-item__authorImg">
            <img src="images/main/MikeTaylor@2x.png" alt="Feedback authors picture" class="img" id="authorImg">
        </div>
        <p class="slider-item__content">“${feedbacks[index].content}”</p>
        <h5 class="slider-item__authorName">${feedbacks[index].name}</h5>
        <h5 class="slider-item__authorLocation">${feedbacks[index].location}</h5>
    </div>
`
}

// let slider = document.querySelector('.slider')
let previousSlide = document.querySelector('.slider-item__previous-item')

function newSlide (index) {
    previousSlide.insertAdjacentHTML('beforebegin', mockup(index))
}

function newPreviousSlide (index){
    
}