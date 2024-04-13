let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let playerIndex = 1
function appendPlayer() {

    let initiativeInput = document.querySelector('.playerInitiativeInput').value
    let playerHP = document.querySelector('.playerHP').value
    let playerMaxHP = document.querySelector('.playerMaxHP').value
    let playerName = document.querySelector('.playerName').value
    let playerDiv = document.createElement('div');
    playerDiv.innerHTML = `
    <p> initiative ${initiativeInput} ${playerHP }/${playerMaxHP } hp</p> <p style="width: 200px">${playerName}</p>
    <button class="delete">смэрть</button>`;
    playerDiv.className = 'player'

    playersDiv.append(playerDiv)
    let DeleteBtn = document.querySelectorAll('.delete')
    DeleteBtn.forEach(element => {
        element.onclick = function () {
            this.parentNode.remove()
        }
    });
    playerIndex +=1
}

sortBtn.onclick

playerAddBtn.addEventListener('click', appendPlayer)

