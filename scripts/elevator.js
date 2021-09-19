"use strict"

// window.addEventListener('load', ()=>{
//         sections.adreses =  sections.pushAdreses()
//         height.maxHeight = height.getDocHeight()
//     }
// )


let elevatorDiv = document.querySelector('.elevator')
let index = 0

elevatorDiv.addEventListener('click', (event)=>{

    if(event.target.id == 'elevatorDown'){
        if (index > sections.nodes.length - 1) {
            scrollToTop()
        } else {
            sections.nodes[index+1].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
            ++index
        }

    } else if (event.target.id == 'elevatorUp'){
        if (index < 0 || index === 0) {
            scrollToTop()
            index = 0
        } else {
            sections.nodes[index-1].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
            --index
        }
    }
})

function scrollToTop () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
    index = 0 
}

const height = {
    maxHeight : 0,
    dBody : document.body,
    dHtml : document.documentElement,

    getDocHeight () {
        return Math.max( this.dBody.scrollHeight, this.dBody.offsetHeight, 
            this.dHtml.clientHeight, this.dHtml.scrollHeight, this.dHtml.offsetHeight );
    }
}

const sections = {
    nodes : document.querySelectorAll('section'),
    adreses : [],

    pushAdreses() {
        this.nodes.forEach(element => {   
            this.adreses.push(element.offsetTop)
        });
        return this.adreses
    },

    getHeight() {
        return this.sections[1].offsetHeight
    }
}

const elevator = {

    curentAdres() {
        let position = window.pageYOffset
        const adreses = sections.adreses

        let curent = adreses.reduce(function(prev, curr) {
            return (Math.abs(curr - position ) < Math.abs(prev - position) ? curr : prev);
        });

        return adreses.indexOf(curent) 
    }
}