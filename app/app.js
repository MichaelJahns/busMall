var cardDeck = [];
var allProducts = [];
var prestidigitation = [];

var window1 = document.getElementById('test1');
var window2 = document.getElementById('test2');
var window3 = document.getElementById('test3');
prestidigitation.push(window1, window2, window3);


function product (id, description, filepath) {
    this.id = id;
    this.description = description;
    this.filepath = filepath;
    this.views = 0;
    this.clicks = 0;

    allProducts.push(this); 
}

new product (' 0', 'one walky boi', 'img/bike.jpg');
new product (' 1', 'bag', 'img/bag.jpg')
new product (' 2', 'banana slicer', 'img/banana.jpg');
new product (' 3', 'bathroom stand', 'img/bathroom.jpg');
new product (' 4', 'useless boots', 'img/boots.jpg');
new product (' 5', 'breakfast machine', 'img/breakfast.jpg');
new product (' 6', 'meat bubblegum', 'img/bubblegum.jpg');
new product (' 7', 'bad chair', 'img/chair.jpg');
new product (' 8', 'our lord' , 'img/cthulhu.jpg');
new product (' 9', 'duck bill', 'img/dog-duck.jpg');
new product (' 10', 'dragon meat', 'img/dragon.jpg');
new product (' 11', 'pen spoon', 'img/pen.jpg');
new product (' 12', 'pet sweeper', 'img/pet-sweep.jpg');
new product (' 13', 'pizza scissors', 'img/scissors.jpg');
new product (' 14', 'shark bag', 'img/shark.jpg');
new product (' 15', 'baby sweep', 'img/sweep.png');
new product (' 16', 'tauntaun blanket', 'img/tauntaun.jpg');
new product (' 17', 'unicorn meat', 'img/unicorn.jpg');
new product (' 18', 'tentacle usb', 'img/usb.gif');
new product (' 19', 'weird water can', 'img/water-can.jpg');
new product (' 20', 'bad wine glass', 'img/wine-glass.jpg');

function shuffle(array){
    cardDeck = array.slice(0);
    for (var i = cardDeck.length - 1; i > 0; i--) {
        var randomPosition = Math.floor(Math.random() * (i + 1));
        var temp = cardDeck[i];
        cardDeck[i] = cardDeck[randomPosition];
        cardDeck[randomPosition] = temp;
    }
    // console.table(cardDeck)
}

function render(){
    if(cardDeck.length < 3 ){
        shuffle(allProducts);
        console.log(`the deck emptied and was reshuffled`)
    }
    for(var i = 0; i <= 2; i++){
    var idReference = cardDeck[i].id;
        console.log(idReference)
        for(var j = 0; j < allProducts.length; j++){
            if(idReference === allProducts[j].id){
                console.log(allProducts[j].id)
                prestidigitation[i].src = allProducts[j].filepath;
                allProducts[j].views++;
            }
        }  
    }
    cardDeck.splice(0, 3);
};
//+++++++++++++++
//Executable Code
render();
