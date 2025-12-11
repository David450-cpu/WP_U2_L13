const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
let next_up = [];
let player1score = 0
let player2score = 0
let playerturn = "Player 1"

function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    let random_image = Math.floor(Math.random()*image_list.length);
    image.src = `resources/cards/${image_list[random_image]}`;
    next_up.push(card);
    //card.setAttribute("onclick", "none");
    //if there is no card in this div
    //console.log(card.children.length)
    if (card.children.length == 0){
        card.appendChild(image);
        image_list.splice(random_image, 1);
    }
    else{
        card.children[0].style.display = "block";
    }

    if (next_up.length == 2){
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch(){
    //console.log(next_up);
    //console.log(next_up[0].getElementsByTagName('img'));
    let turntext = document.getElementsByClassName("turns")[0];
    if (next_up[0].children[0].src !== next_up[1].children[0].src){
        console.log("Not a match");
        next_up[0].getElementsByTagName('img')[0].style.display = "none";
        next_up[1].getElementsByTagName('img')[0].style.display = "none";
        if (playerturn == "Player 1"){
            playerturn = "Player 2"
            sessionStorage.setItem("turn", "Player 2");
            turntext.textContent = "Player 2's turn!"
        }
        else if (playerturn == "Player 2"){
            playerturn = "Player 1"
            sessionStorage.setItem("turn", "Player 1");
            turntext.textContent = "Player 1's turn!"
        }
    }
    //next_up[0].children[0].scr
    let player1 = document.getElementsByClassName("p1score")[0];
    let player2 = document.getElementsByClassName("p2score")[0];
    let wintext = document.getElementsByClassName("wins")[0];
    if (next_up[0].children[0].src === next_up[1].children[0].src){
        console.log("Is a match");
        let match = true;
        if (match = true){
            // Cards WILL stay flipped
            if (playerturn == "Player 1"){
                player1score += 1;
                sessionStorage.setItem("scoreP1", player1score);
                turntext.textContent = "Player 1's turn!"
                player1.textContent = `Player 1 score: ${player1score}`
            }
            else if (playerturn == "Player 2"){
                player2score += 1;
                sessionStorage.setItem("scoreP2", player2score);
                turntext.textContent = "Player 2's turn!"
                player2.textContent = `Player 2 score: ${player2score}`
            }
            if (player1score + player2score == 10){
                if (player1score > player2score){
                    sessionStorage.setItem("P1wins", "Player 1 wins!");
                    wintext.textContent = "Player 1 wins!"
                }
                else if (player2score > player1score){
                    sessionStorage.setItem("P2wins", "Player 2 wins!");
                    wintext.textContent = "Player 2 wins!"
                }
                else if (player1score == player2score){
                    sessionStorage.setItem("Draw", "It's a draw!");
                    wintext.textContent = "It's a draw!"
                }
            }
        }
    }
    next_up = [];
    console.log(next_up);
}

function restartbutton(){
	window.location.reload();
}