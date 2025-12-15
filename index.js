const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
let next_up = [];
let player1score = 0
let player2score = 0
let playerturn = "Player 1"
let P1Total = 0
let P2Total = 0
player1score = sessionStorage.getItem("scoreP1");
player2score = sessionStorage.getItem("scoreP2");
playerturn = sessionStorage.getItem("turn");
P1Total = sessionStorage.getItem("Player1Overall");
P2Total = sessionStorage.getItem("Player2Overall");

function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    let random_image = Math.floor(Math.random()*image_list.length);
    image.src = `resources/cards/${image_list[random_image]}`;
    next_up.push(card);
    //if there is no card in this div
    if (card.children.length == 0){
        card.appendChild(image);
        image_list.splice(random_image, 1);
    }
    else{
        card.children[0].style.display = "block";
    }

    if (next_up.length == 2){
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch(){
    let turntext = document.getElementsByClassName("turns")[0];
    if (next_up[0].children[0].src !== next_up[1].children[0].src){
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
    let P1Totals = document.getElementsByClassName("p1gamewon")[0];
    let P2Totals = document.getElementsByClassName("p2gamewon")[0];
    if (next_up[0].children[0].src === next_up[1].children[0].src){
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
                    sessionStorage.setItem("P1wins", P1Total);
                    wintext.textContent = "Player 1 wins!"
                    P1Total += 1
                    let win = "Player 1"
                    overallPlayerScore(win, P1Totals, P2Totals)
                }
                else if (player2score > player1score){
                    sessionStorage.setItem("P2wins", P2Total);
                    wintext.textContent = "Player 2 wins!"
                    P2Total += 1
                    let win = "Player 2"
                    overallPlayerScore(win, P1Totals, P2Totals)
                }
                else if (player1score == player2score){
                    sessionStorage.setItem("Draw", "It's a draw!");
                    wintext.textContent = "It's a draw!"
                }
            }
        }
    }
    next_up = [];
}

function overallPlayerScore(win, P1Totals, P2Totals){
    if (win == "Player 1"){
        sessionStorage.setItem("Player1Overall", P1Total);
        P1Totals.textContent = `Player 1 games won: ${P1Total}!`
    }
    else if (win == "Player 2"){
        sessionStorage.setItem("Player2Overall", P2Total);
        P2Totals.textContent = `Player 2 games won: ${P2Total}!`
    }
}

function restartbutton(){
	window.location.reload();
}