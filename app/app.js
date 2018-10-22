var cardDeck = [];
var allProducts = [];

function product (name) {
    this.name= name;
    this.views = 0;
    this.clicks = 0;

    allProducts.push(this); 
}

new product (' 1');
new product (' 2');
new product (' 3');
new product (' 4');
new product (' 5');
new product (' 6');
console.table(allProducts);

function shuffle(array)
{
    cardDeck = array.slice(0);
    console.log(cardDeck)

    for (var i = cardDeck.length - 1; i > 0; i--) {
        //make randomPosition = random number inclusive
        var randomPosition = Math.floor(Math.random() * (i + 1));
        //grab object at current array idx and store
        var temp = cardDeck[i];
        //overrides array idx with random number object
        cardDeck[i] = cardDeck[randomPosition];
        //places overridden arrady idx on randomPositions old value.
        cardDeck[randomPosition] = temp;
    }
    console.table(allProducts)
    console.table(cardDeck)
}
shuffle();