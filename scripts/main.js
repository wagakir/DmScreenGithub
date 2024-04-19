let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let index = 0
let body = document.body
let npcsDiv= document.getElementById('npcDiv')
let npcAddBtn= document.getElementById('npcAddBtn')
// let playersLists = []
let initiativeList = document.getElementById('initiativeList')


sortBtn.onclick = function () {alert('sosi bibu')}

//to delete later
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//end del
function appendPlayer(whoAppend) {

    let playersDiv= document.getElementById(whoAppend)
    // ${initiativeInput}

    let playerInitiativeInput =  getRandomInt(20)//document.querySelector('.playerInitiativeInput').value
    let playerHPInput = document.querySelector('.playerHPInput').value
    let playerMaxHPInput = document.querySelector('.playerMaxHPInput').value
    let playerNameInput = document.querySelector('.playerNameInput').value
    if (whoAppend === 'npcDiv'){
        playerInitiativeInput =  getRandomInt(20)//document.querySelector('.playerInitiativeInput').value
        playerHPInput = document.querySelector('.npcHPInput').value
        playerMaxHPInput = document.querySelector('.npcMaxHPInput').value
        playerNameInput = document.querySelector('.npcNameInput').value
    }
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
    // let playerList  = [index, playerInitiativeInput, playerHPInput, playerMaxHPInput, playerNameInput, initiativeDiv.id ]
    // playersLists.push( [ playerList])
    //
    // // console.log(playerList)
    // let bebe = (playersLists[0])




    let players = document.querySelectorAll('.player')
    players.forEach(element => {
        element.childNodes.forEach(cldElement =>{

                function sort() {
                document.querySelector('#initiativeList').childNodes.forEach(initiativeCldElement =>{
                    let elementId = '#' + String(element.id)
                    let initiativeCldElementId = '#' + String(initiativeCldElement.id)
                    if(initiativeCldElementId.slice(18) === elementId.slice(7)){
                        initiativeCldElement.innerHTML = `
                          <div>Initiative ${element.querySelector('.playerInitiative').value}</div>
                           <div class="playerNameInitiative" style="width: fit-content">${element.querySelector('.playerName').value}</div>`
                        elementId.slice(7)[0][1] = element.querySelector('.playerInitiative').value
                        console.log(element.querySelector('.playerInitiative').value)
                        initiativeCldElement.style.order = element.querySelector('.playerInitiative').value
                    }
                })

                }
            cldElement.onchange = sort
            sort()
        })
    });

    //add delete btn function
    let DeleteBtn = document.querySelectorAll('.delete')
    DeleteBtn.forEach(element => {

        element.onclick = function () {
            let toDelete = String( '#initiativeElement' + this.parentNode.id.slice(6))
            document.querySelector(toDelete).remove()
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
        <div style="flex-grow: 1; display: flex; flex-direction: column; height: fit-content" >
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



playerAddBtn.onclick = function (){appendPlayer('playersDiv')}
// playerAddBtn.addEventListener('click', appendPlayer )
npcAddBtn.onclick = function (){appendPlayer('npcDiv')}
