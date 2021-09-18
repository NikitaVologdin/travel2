"use strict"

window.addEventListener('load', ()=>{
        sections.adreses =  sections.pushAdreses()
        height.maxHeight = height.getDocHeight()
    }
)

let elevatorDiv = document.querySelector('.elevator')

elevatorDiv.addEventListener('click', (event)=>{
    let adres = elevator.curentAdres()
    console.log(event.target.id)
    if(event.target.id == 'elevatorDown'){
        window.scroll({
            top: sections.adreses[adres+1],
            left: 0,
            behavior: 'smooth'
          })
    } else if (event.target.id == 'elevatorUp'){
        window.scroll({
            top: sections.adreses[adres-1],
            left: 0,
            behavior: 'smooth'
          })
    }
})

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
    sections : document.querySelectorAll('#section'),
    height : 0,
    adreses : [],

    pushAdreses() {
        let height = this.getHeight()

        this.sections.forEach(element => {   
            this.adreses.push(element.offsetTop + height / 2)
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