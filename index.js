const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png', 'bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];

function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    let random_image = Math.floor(Math.random()*image_list.length);
    image.src = `resources/cards/${image_list[random_image]}`;
    card.appendChild(image);
    card.setAttribute("onclick", "none");
    image_list.splice(random_image, 1);
}

function checkForMatch(){
    if (random_image !== random_image){
        card.setAttribute("image", "none")
    }

    if (random_image === random_image){
        match = true;
        if (match = true){
            /* cards stay flipped somehow */
        }
    
    }
}

function restartbutton(){
	window.location.reload()
}