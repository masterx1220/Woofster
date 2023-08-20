import dogsData from './data.js'
import Dog from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
let isWaiting = false

document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

function render(){
    document.getElementById('container').innerHTML = currentDog.getDogHtml()
}

function getNewDog(){
    if (isWaiting){
        setTimeout(() => {
            currentDogIndex+=1
            currentDog = new Dog(dogsData[currentDogIndex])
            startOver()
            render()
        },1500)
    }
        
}

function startOver(){
    if (currentDogIndex > 10){
        currentDogIndex = 0
        currentDog = new Dog(dogsData[currentDogIndex])
    }
}

function yes(){
    currentDog.hasBeenLiked = true
    document.getElementById("reject-button").disable = true
    isWaiting = true
    getNewDog()
    render()
}

function no(){
    document.getElementById("accept-button").disable = true
    currentDog.hasBeenSwiped = true
    isWaiting = true
    getNewDog()
    render()
}

render()