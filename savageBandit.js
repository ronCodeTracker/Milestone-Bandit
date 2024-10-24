﻿
//  name:  Ronald Kiefer
//  Hebrew name:    ר ו נ  א ל ד 
//  date:  January 31, 2022  Monday
//  update: February, 02, 2022 Wednsday
// description  js file for milestone proj 1
// description   savage bandit slot game


//   object with the slot items
let items_object = {
    item1: 'feather',
    item2: 'black_bear',
    item3: 'hawk',
    item4: 'wolf',
    item5: 'wolf',
    item6: 'feather',
    item7: 'wolf',
    item8: 'hawk',
    item9: 'bar',
    item10: 'crazy_bonus'

}

// make an array of slot items (better for forloops)
let nativeObjectArray = [items_object.item1, items_object.item2,
    items_object.item3, items_object.item4, items_object.item5,
    items_object.item6, items_object.item7, items_object.item8,
    items_object.item9, items_object.item10]

// declare global variables
let rndOne
let rndTwo
let rndThree
let headerLuck
var win
var total = 0
var winGraphic
var winGraphic2

document.onload = main()



// run goodLuck function that doesn't show Good Luck!
goodLuck()

function runGame() {

    /*
    var audio = new Audio('./sounds/fanfare.wav')
    audio.play()
    */

    winGraphicsDel()
    winGraphicsTwoDel()

    //  random numbers between 0 - 9 (10 numbers)
    rndOne = randomGen()
    rndTwo = randomGen()
    rndThree = randomGen()

    function randomGen() {
        return Math.floor(Math.random() * 10)

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    


    // show slot item in slots
    // slot one
    let slotOne = document.querySelector('.slotOne')
    slotOne.textContent = nativeObjectArray[rndOne]
    let imageUrl = 'url(./pictures/spin_milestone.gif)'

    imageUrl = getTypeOfSlot(nativeObjectArray[rndOne])
    
    slotOne.style.backgroundImage = imageUrl

    slotOne.style.backgroundRepeat = 'no-repeat'
    slotOne.style.backgroundSize = '100% 100%'
    
    // slot two
    
    let slotTwo = document.querySelector('.slotTwo')
    slotTwo.textContent = nativeObjectArray[rndTwo]

    imageUrl2 = getTypeOfSlot(nativeObjectArray[rndTwo])

    slotTwo.style.backgroundImage = imageUrl2

    slotTwo.style.backgroundRepeat = 'no-repeat'
    slotTwo.style.backgroundSize = '100% 100%'

    // slot three

    let slotThree = document.querySelector('.slotThree')
    slotThree.textContent = nativeObjectArray[rndThree]

    imageUrl3 = getTypeOfSlot(nativeObjectArray[rndThree])

    slotThree.style.backgroundImage = imageUrl3

    slotThree.style.backgroundRepeat = 'no-repeat'
    slotThree.style.backgroundSize = '100% 100%'


    // logic
    // basic win of three in a row
    if ((nativeObjectArray[rndOne] === nativeObjectArray[rndTwo])
        && (nativeObjectArray[rndTwo] === nativeObjectArray[rndThree])) {

        console.log('u win 10 dollars!')
        let winElem = document.querySelector('.win')
        winElem.innerHTML = ' '
        win = 0
        win = 10
        winElem.textContent = '$ ' + win
        total += 10
        let totalElem  = document.querySelector('.total')
        totalElem.innerHTML = ' '
        totalElem.textContent = '$ ' + total
        winGraphics()
        sound()
        waitWinnerGraphic()

        // if other than a wolf for win add 15 dollars bonus
        if (nativeObjectArray[rndTwo] !== 'wolf') {
            console.log('plus bonus of 15 dollars')
            let winElem = document.querySelector('.win')
            winElem.innerHTML = ' '
            win += 15
            winElem.textContent = '$ ' + win
            total += 15
            totalElem.innerHTML = ' '
            totalElem.textContent = '$ ' + total
            
        }
        // if the three are crazy-bonus items then grand prize of 100 bonus dollars
        if (nativeObjectArray[rndTwo] === 'crazy_bonus') {
            console.log('crazy bonus of 100 dollars')
            let winElem = document.querySelector('.win')
            winElem.innerHTML = ' '
            win += 100
            winElem.textContent = '$ ' + win
            total += 100
            totalElem.innerHTML = ' '
            totalElem.textContent = '$ ' + total
            

        }
    }


}// end of runGame function  ~~~~~~~~~~~~~~~~~~~~


// timing and ansyn await

// time promise used latter by async
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


async function main() {
    await sleep(3000)
    // make Good Luck! visible now
    headerLuck.style.visibility = 'visible'
    game()
}

async function game() {
    await sleep(2000)
    let buttonPlay = document.querySelector('.play')
    buttonPlay.disabled = false
    
}
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ***************************** add good luck but invisible  ******

function goodLuck() {
    let headerLuckSpt = document.querySelector('.header')
    headerLuck = document.createElement('div')
    headerLuck.textContent = 'Good Luck!'
    headerLuck.style.fontSize = '10vw'
    headerLuck.style.margin = '5%'
    headerLuck.style.visibility = 'hidden'

    headerLuckSpt.append(headerLuck)

}

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// in the html the event for button runs this wait function to delay by 1 second the spin
// for new slot items
async function waitSpin() {
    await sleep(1000)
    runGame()
}


function getTypeOfSlot(slotItem) {
    if (slotItem === 'wolf') {
        return 'url(./pictures/wolf_milestone.gif'
    }
    else if (slotItem === 'black_bear') {
        return 'url(./pictures/blackBear.gif'
    }
    else if (slotItem === 'feather') {
        return 'url(./pictures/feather_milestone.gif'
    }
    else if (slotItem === 'hawk') {
        return 'url(./pictures/hawk_milestone.gif'
    }
    else if (slotItem === 'crazy_bonus') {
        return 'url(./pictures/crazy_milestone.gif'
    }
    else if (slotItem === 'bar') {
        return 'url(./pictures/bar_milestone.gif'
    }
    else {
        return 'url(./pictures/spin_milestone.gif)'
    }
}

//  graphics functions for when the player wins

function winGraphics() {
    winGraphic = document.querySelectorAll('.slots div')
    waitWinGraphic()
    winGraphicTwo()
    
    
}

function winGraphicsDel() {
    let winGraphicDel = document.querySelectorAll('.slots div')
    
    winGraphicDel.forEach(graph => {
         graph.style.border = '4px solid lightblue'
    })
    
}


async function waitWinGraphic() {
    await sleep(1000)
    winGraphic.forEach(graph => {

        graph.style.border = '5px solid green';

    })
    waitWinGraphicBlue()
}


async function waitWinGraphicBlue() {
    await sleep(1000)
    winGraphic.forEach(graph => {

        graph.style.border = '5px solid blue';
    })
}

function winGraphicTwo(){
    winGraphic2 = document.querySelector('aside')
    winGraphic2.textContent = "WINNER!"
    winGraphic2.style.color = 'blue'
    winGraphic2.style.padding = '5px'
    winGraphic2.style.fontSize = '2em'
}

function winGraphicsTwoDel() {
    winGraphic2 = document.querySelector('aside')
    winGraphic2.textContent = 'aside'
    winGraphic2.style.color = 'white'
}


async function waitWinnerGraphic() {
    await sleep(500)
    winGraphic.forEach(graph => {

        winGraphic2 = document.querySelector('aside')
        winGraphic2.style.color = 'red'
        waitWinnerGraphic2()
    })
}

async function waitWinnerGraphic2() {
    await sleep(500)
    winGraphic.forEach(graph => {

        winGraphic2 = document.querySelector('aside')
        winGraphic2.style.color = 'blue'

    })
}

//   *****************************************************

function sound() {
    
    var audio = new Audio('./sounds/fanfare.wav')
    audio.play()
    

    
}