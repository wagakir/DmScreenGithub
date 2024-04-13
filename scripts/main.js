let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')
let playerAddBtn= document.getElementById('playerAddBtn')
let playerIndex = 1
function appendPlayer() {
    // ${initiativeInput}
    let initiativeInput = document.querySelector('.playerInitiativeInput').value
    let playerHPInput = document.querySelector('.playerHPInput').value
    let playerMaxHPInput = document.querySelector('.playerMaxHPInput').value
    let playerNameInput = document.querySelector('.playerNameInput').value
    let playerDiv = document.createElement('div');
    playerDiv.innerHTML = `
    <p> Initiative <input class="playerHP" value="1"> HP<input class="playerHP" value="${playerHPInput }">/<input class="playerHP" value="${playerMaxHPInput }" </p> <p style="width: 200px">${playerNameInput}</p>
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

