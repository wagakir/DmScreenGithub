let sortBtn= document.getElementById('sortInitiative')
let playersDiv= document.getElementById('playersDiv')

let playerIndex = 1
function appendPlayer() {

    let initiativeInput = document.querySelector('.initiativeInput').value
    let PlayerHP = document.querySelector('.PlayerHP').value
    let maxPlayerHP = document.querySelector('.maxPlayerHP').value
    let playerName = document.querySelector('.playerName').value
    let playerDiv = document.createElement('div');
    playerDiv.innerHTML = `
    <p>${playerIndex}</p><p> ${initiativeInput} </p><p>20hp </p><p style="width: 200px">${playerName}</p>
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



sortBtn.addEventListener('click', appendPlayer)

