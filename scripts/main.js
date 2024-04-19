let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let index = 1
let body = document.body
let npcsDiv= document.getElementById('npcDiv')
let npcAddBtn= document.getElementById('npcAddBtn')
let playersLists = []
let initiativeList = document.getElementById('initiativeList')
function sort(){


}



//to delete later
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//end del
function appendPlayer() {

    // ${initiativeInput}
    let playerInitiativeInput =  getRandomInt(20)//document.querySelector('.playerInitiativeInput').value
    let playerHPInput = document.querySelector('.playerHPInput').value
    let playerMaxHPInput = document.querySelector('.playerMaxHPInput').value
    let playerNameInput = document.querySelector('.playerNameInput').value
    let playerDiv = document.createElement('div');
    if (isNaN(playerInitiativeInput)){
        alert("введите инициативу")
        return;
    }
    playerDiv.innerHTML = `
    <div style="flex-grow: 1; display: flex; flex-direction: column">
        <div>Initiative <input class="playerInitiative" value="${playerInitiativeInput}"> <input class="playerName"   value="${playerNameInput}"></div> 
        <div><label>HP<input class="playerHP" value="${playerHPInput }">/<input class="playerHP" value="${playerMaxHPInput }"></label> </div></div> 
    <button class="delete">смэрть</button>`;

    playerDiv.className = 'player'
    playerDiv.id = `player${index}`

    //add initiative element
    let initiativeDiv = document.createElement('div')
    initiativeDiv.innerHTML = `
        <div>Initiative ${playerInitiativeInput}</div> <div class="playerNameInitiative" style="width: fit-content">${playerNameInput}</div>`;
    initiativeDiv.className = 'initiativeElement'
    initiativeList.append(initiativeDiv)
    initiativeDiv.id = `initiativeElement${index}`


    playersDiv.append(playerDiv)

    let players = document.querySelectorAll('.player')
    players.forEach(element => {

        element.childNodes.forEach(cldElement =>{

            cldElement.onchange = function () {
                document.querySelector('#initiativeList').childNodes.forEach(initiativeCldElement =>{

                    let elementId = '#' + String(element.id)
                    let initiativeCldElementId = '#' + String(initiativeCldElement.id)

                    if(initiativeCldElementId.slice(18) === elementId.slice(7)){
                        // let list = document.querySelector(`${initiativeCldElementId}   `).childNodes
                        console.log(element.querySelector('.playerName'))

                        initiativeCldElement.innerHTML = `
                          <div>Initiative ${element.querySelector('.playerInitiative').value}</div>
                           <div class="playerNameInitiative" style="width: fit-content">${element.querySelector('.playerName').value}</div>`

                    }


                    // if (element.id[-1] == initiativeCldElement.id[-1]){
                    //     initiativeCldElement.id.innerHTML = `
                    //       <div>Initiative ${playerDiv.firstElementChild.querySelector('.playerInitiative').value}</div>
                    //        <div class="playerNameInitiative" style="width: fit-content">${playerDiv.firstElementChild.querySelector('.playerName').value}</div>`
                    // }
                })
                //alert(playerDiv.firstElementChild.querySelector('.playerInitiative').value)

                 //document.querySelector(`#initiativeElement${index}`).innerHTML = `
                  //  <div>Initiative ${playerDiv.firstElementChild.querySelector('.playerInitiative').value}</div>
                 //   <div class="playerNameInitiative" style="width: fit-content">${playerDiv.firstElementChild.querySelector('.playerName').value}</div>`
                }
        })
        // document.getElementById(`initiativeElement${index}`)
        // element.onchange = function () {
        //     initiativeDiv.innerHTML = `<div>Initiative ${playerInitiativeInput}</div> <div class="playerNameInitiative" style="width: fit-content">${playerNameInput}</div>`
        // }
    });

    //add delete btn function
    let DeleteBtn = document.querySelectorAll('.delete')
    DeleteBtn.forEach(element => {

        element.onclick = function () {
            console.log()
            let toDelete = String( '#initiativeElement' + this.parentNode.id.slice(6))
            document.querySelector(toDelete).remove()
            this.parentNode.remove()
        }
    });

    let playerList  = [index, playerInitiativeInput, playerHPInput, playerMaxHPInput, playerNameInput, initiativeDiv.id ]
    playersLists.push( [ playerList])
    console.log(playerList)
    console.log(playersLists)
    index +=1
}

function appendNpc() {
    let npcInitiativeInput = document.querySelector('.npcInitiativeInput').value
    let npcHPInput = document.querySelector('.npcHPInput').value
    let npcMaxHPInput = document.querySelector('.npcMaxHPInput').value
    let npcNameInput = document.querySelector('.npcNameInput').value
    let npcDiv = document.createElement('div');
    if (isNaN(npcInitiativeInput)){
        alert("введите инициативу")
        return;
    }

        npcDiv.innerHTML = `
        <div style="flex-grow: 1; display: flex; flex-direction: column">
        <div>Initiative <input class="npcInitiative" value="${npcInitiativeInput}"> <input class="npcName"   value="${npcNameInput}"></div> 
        <div><label>HP<input class="npcHP" value="${npcHPInput}">/<input class="npcHP" value="${npcMaxHPInput}"></label> </div></div> 
    
        <button class="delete">смэрть</button>`;
        npcDiv.className = 'npc'

        npcsDiv.append(npcDiv)
        let DeleteBtn = document.querySelectorAll('.delete')
        DeleteBtn.forEach(element => {
            element.onclick = function () {
                this.parentNode.remove()
            }
        });

        index += 1

}

let themeBtn = document.querySelectorAll('.theme')
themeBtn.forEach(element => {
    element.onclick = function () {
        body.style.backgroundImage = this.value
    }
});


sortBtn.addEventListener('click',sort)

playerAddBtn.addEventListener('click', appendPlayer)
npcAddBtn.addEventListener('click',appendNpc)
