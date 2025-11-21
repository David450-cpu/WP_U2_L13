function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    image.src = "resources/cards/bearcard.png";
    card.appendChild(image)
}

function restartbutton(){
	window.location.reload()
}