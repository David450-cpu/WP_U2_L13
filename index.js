function flipCard(id){
    let card = document.getElementById(id);
    let image = document.createElement("img");
    const image_list = ["url('bearcard.png')", url('beavercard.png'), url('deercard.png'), url('foxcard.png'), url('hedgehogcard.png'), url('lynxcard.png'), url('moosecard.png'), url('raccooncard.png'), url('squirrelcard.png'), url('wolfcard.png')];
    for (let i=0; i == 20; i++){
        let random_image = Math.floor(Math.random()*image_list.length);
        let image.src = "resources/cards/random_image";
        card.appendChild(image);
    }
}

function restartbutton(){
	window.location.reload()
}