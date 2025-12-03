const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
let next_up = [];

function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    let random_image = Math.floor(Math.random()*image_list.length);
    image.src = `resources/cards/${image_list[random_image]}`;
    card.appendChild(image);
    card.setAttribute("onclick", "none");
    next_up.push(card);
    image_list.splice(random_image, 1);
    if (next_up.length == 2){
       checkForMatch();
    }
}

function checkForMatch(){
    console.log(next_up);
    if (`resources/cards/${next_up[0]}` !== `resources/cards/${next_up[1]}`){
        console.log("Not a match");
    }
    if (`resources/cards/${next_up[0]}` === `resources/cards/${next_up[1]}`){
        console.log("Is a match");
        let match = true;
        if (match = true){
            // Cards WILL stay flipped
        }
    }
    next_up = [];
    console.log(next_up);
}

function restartbutton(){
	window.location.reload();
}