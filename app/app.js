var cardDeck = [];
var allProducts = [];

function product (name) {
    this.name= name;
    this.views = 0;
    this.clicks = 0;

    allProducts.push(this); 
}

new product ('butthole');
new product ('doody');