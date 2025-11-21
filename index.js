function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    image_list = [url('bearcard.png'), url('beavercard.png'), url('deercard.png'), url('foxcard.png'), url('hedgehogcard.png'), url('lynxcard.png'), url('moosecard.png'), url('raccooncard.png'), url('squirrelcard.png'), url('wolfcard.png')];
    image.src = "resources/cards/image_list";
    card.appendChild(image);
}

function restartbutton(){
	window.location.reload()
}