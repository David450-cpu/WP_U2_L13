const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
let next_up = []

function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    let random_image = Math.floor(Math.random()*image_list.length);
    image.src = `resources/cards/${image_list[random_image]}`;
    card.appendChild(image);
    card.setAttribute("onclick", "none");
    next_up.push(random_image)
    image_list.splice(random_image, 1);
    if (next_up.length == 2){
       checkForMatch();
    }
}

function checkForMatch(){
    console.log(next_up)
    if (next_up[0] !== next_up[1]){
        console.log("Not a match")
        card.setAttribute("image", "none");
        let next_up = []
    }
    if (next_up[0] === next_up[1]){
        console.log("Is a match")
        let match = true;
        let next_up = []
        if (match = true){
            // cards WILL stay flipped
        }
    }
}

function restartbutton(){
	window.location.reload()
}