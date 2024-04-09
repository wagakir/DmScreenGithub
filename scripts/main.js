let sortBtn= document.getElementById('sortInitiative')
let playersList= document.getElementById('playersList')


function btnclick(){
    let playerDiv = document.createElement('div')
    playerDiv.innerHTML = `
    <p>index №1</p>
    <p>13</p>
    <p>20hp</p>
    <p>имя</p>
    <button>смэрть</button>`
    playerDiv.setAttribute()
    playersList.append(playerDiv)}



sortBtn.addEventListener('click', btnclick)

