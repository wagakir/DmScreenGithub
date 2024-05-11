let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let index = 0
let body = document.body
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

    let playerInitiativeInput =  document.querySelector('.playerInitiativeInput').value
    let playerHPInput = document.querySelector('.playerHPInput').value
    let playerMaxHPInput = document.querySelector('.playerMaxHPInput').value
    let playerNameInput = document.querySelector('.playerNameInput').value
    if (whoAppend === 'npcDiv'){
        playerInitiativeInput =  document.querySelector('.playerInitiativeInput').value
        playerHPInput = document.querySelector('.npcHPInput').value
        playerMaxHPInput = document.querySelector('.npcMaxHPInput').value
        playerNameInput = document.querySelector('.npcNameInput').value
    }
    let playerDiv = document.createElement('div');
    if (isNaN(playerInitiativeInput)){
        playerInitiativeInput = getRandomInt(20)
    }
    playerDiv.innerHTML = `
    <div style="flex-grow: 1; display: flex; flex-direction: column">
        <div>Initiative <input class="playerInitiative" value="${playerInitiativeInput}"> <input class="playerName"   value="${playerNameInput}"></div> 
        <div><label>HP<input class="playerHP" value="${playerHPInput }">/<input class="playerHP" value="${playerMaxHPInput }"></label> <input class="playerName" ></div></div> 
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
                        if (isNaN(element.querySelector('.playerInitiative').value)){
                            alert('check initiative, is should be a number')
                            return
                        }
                        initiativeCldElement.innerHTML = `
                          <div>Initiative ${element.querySelector('.playerInitiative').value}</div>
                           <div class="playerNameInitiative" style="width: fit-content">${element.querySelector('.playerName').value}</div>`
                        elementId.slice(7)[0][1] = element.querySelector('.playerInitiative').value
                        console.log(element.querySelector('.playerInitiative').value)
                        let initiative = element.querySelector('.playerInitiative').value
                        initiative = initiative * -1
                        initiativeCldElement.style.order = initiative
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
    initiativeList.childNodes.forEach( element =>{

        element.onclick = function (){
            this.classList.toggle('border = solid rgba(255,255,255, 0.7) 10px');
            this.classList.toggle('completed');
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
