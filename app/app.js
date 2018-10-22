var cardDeck = [];
var allProducts = [];

function product (name) {
    this.name= name;
    this.views = 0;
    this.clicks = 0;

    allProducts.push(this); 
}

new product (' butthole');
new product (' doody');
new product (' farts');
new product (' faith');
new product (' Tower');
new product (' dreams');

function shuffle(allProducts)
{
    for (var i = allProducts.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = allProducts[i];
        allProducts[i] = allProducts[j];
        allProducts[j] = temp;
    }
}
shuffle();