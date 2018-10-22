var cardDeck = [];
var allProducts = [];
var window1 = document.getElementById('test1');
var window2 = document.getElementById('test2');
var window3 = document.getElementById('test3');


function product (name, description) {
    this.name = name;
    this.description = description;
    this.views = 0;
    this.clicks = 0;

    allProducts.push(this); 
}

new product (' 1', 'one for the money');
new product (' 2', 'two for the show');
new product (' 3', 'three to get ready');
new product (' 4', 'four to go');
new product (' 5', 'five to do other stuff');
new product (' 6', 'six was there too');

function shuffle(array){
    console.table(allProducts);
    cardDeck = array.slice(0);
    for (var i = cardDeck.length - 1; i > 0; i--) {
        var randomPosition = Math.floor(Math.random() * (i + 1));
        var temp = cardDeck[i];
        cardDeck[i] = cardDeck[randomPosition];
        cardDeck[randomPosition] = temp;
    }
    console.table(cardDeck)
}
shuffle(allProducts);

function createElement(type, content , parent){
    var element = document.createElement(type);
    element.textContent = content;
    parent.appendChild(element);
}

function render(){
createElement('p', cardDeck[0].description, window1);
createElement('p', cardDeck[1].description, window2);
createElement('p', cardDeck[2].description, window3);
};