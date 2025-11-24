function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    const image_list = ['bearcard.png', 'beavercard.png', 'deercard.png', 'foxcard.png', 'hedgehogcard.png', 'lynxcard.png', 'moosecard.png', 'raccooncard.png', 'squirrelcard.png', 'wolfcard.png'];
    for (let i=0; i < image_list.length; i++){
        let random_image = Math.floor(Math.random()*image_list.length);
        image.src = `resources/cards/${image_list[random_image]}`;
        card.appendChild(image);
        card.setAttribute("onclick", "none");
    }
}

function restartbutton(){
	window.location.reload()
}