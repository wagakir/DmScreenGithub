let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let index = 1
let body = document.body
let npcsDiv= document.getElementById('npcDiv')
let npcAddBtn= document.getElementById('npcAddBtn')

let initiativeList = document.getElementById('initiativeList')
function sort(){


}

function appendPlayer() {
    // ${initiativeInput}
    let playerInitiativeInput = document.querySelector('.playerInitiativeInput').value
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
        //console.log(element)
        element.childNodes.forEach(cldElement =>{
           // console.log(cldElement.parentNode)
            cldElement.onchange = function () {
                document.querySelector('#initiativeList').childNodes.forEach(initiativeCldElement =>{

                    //let elementId = String(element.id).slice(6)
                    let initiativeCldElementId = String(initiativeCldElement.id).slice(19)
                    console.log(initiativeCldElementId)


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
            this.parentNode.remove()
        }
    });


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
