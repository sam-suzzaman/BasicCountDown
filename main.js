// ========================================================================

// grab the input field
let input = document.querySelector('input')

// adding an eventListener on it
input.addEventListener('blur', getInputValue)


// creating the getInputValue funciton
function getInputValue(e) {
    // get the data value from the srcElement of the event and convert it into an array
    let getValue = e.srcElement.value
    // return the value
    creatingDate(getValue)
}


function creatingDate(inputDate) {
    // convert the deadline into a date value
    let deadLine = new Date(inputDate)

    initClock(deadLine)
}


function initClock(lastDate) {

    // grab the display sections
    let dDisplay = document.querySelector('.day-value')
    let hDisplay = document.querySelector('.hour-value')
    let mDisplay = document.querySelector('.min-value')
    let sDisplay = document.querySelector('.sec-value')


    function updateClock() {
        let remainingTime = getRemTime(lastDate)


        // assiging all the values
        dDisplay.innerHTML = remainingTime.rDays
        hDisplay.innerHTML = remainingTime.rHours
        mDisplay.innerHTML = remainingTime.rMin
        sDisplay.innerHTML = remainingTime.rSec
    }

    updateClock()
    setInterval(updateClock, 1000)
}


function getRemTime(endTime) {
    let currentDate = new Date()
    let t = Date.parse(endTime) - Date.parse(currentDate)

    // finding the remaining days/minutes/seconds
    let rDays = Math.floor(t / (1000 * 60 * 60 * 24))
    let rHours = Math.floor((t / (1000 * 60 * 60)) % 24)
    let rMin = Math.floor((t / (1000 * 60)) % 60)
    let rSec = Math.floor((t / 1000) % 60)

    // returning all the values
    return {
        'rDays': rDays,
        'rHours': rHours,
        'rMin': rMin,
        'rSec': rSec,
    }
}