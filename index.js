const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
let next_up = [];

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
        setTimeout(checkForMatch, 2000);
    }
}

function checkForMatch(){
    //let first_card = next_up[0]
    //let second_card = next_up[1]
    //console.log(next_up);
    //console.log(next_up[0].getElementsByTagName('img'));
    if (next_up[0].children[0].src !== next_up[1].children[0].src){
        console.log("Not a match");
        next_up[0].getElementsByTagName('img')[0].style.display = "none";
        next_up[1].getElementsByTagName('img')[0].style.display = "none";
    }
    //next_up[0].children[0].scr
    if (next_up[0].children[0].src === next_up[1].children[0].src){
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