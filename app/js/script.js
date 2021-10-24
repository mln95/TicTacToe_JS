const div = document.getElementsByTagName('section')[0].getElementsByTagName('div')
let player = "playerOne"
function player_choice() {
    for(let i = 0; i < div.length; i++) {
        div[i].onclick = function() {
            if (player == 'playerOne' && div[i].textContent == "") {
                div[i].getElementsByTagName('p')[0].textContent = "X"
                player = "playerTwo"
                document.getElementsByClassName('playerTwo')[0].style.display = "block"
                document.getElementsByClassName('playerOne')[0].style.display = "none"
            } else if(player == 'playerTwo' && div[i].textContent == "") {
                div[i].getElementsByTagName('p')[0].textContent = "O"
                player = "playerOne"
                document.getElementsByClassName('playerOne')[0].style.display = "block"
                document.getElementsByClassName('playerTwo')[0].style.display = "none"
            }
        }
    }
}

// restart the game
const restart = document.getElementById('restart');
restart.onclick = function() {
    for(let i = 0; i < div.length; i++) {
        div[i].getElementsByTagName('p')[0].textContent = ""
    }
    document.getElementsByClassName('playerOne')[0].style.display = "block"
    document.getElementsByClassName('playerTwo')[0].style.display = "block"
           
}

// draw


player_choice();