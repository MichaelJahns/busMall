var counter = 0;
var cardDeck = [];
var allProducts = [];
var prestidigitation = [];

var counterHTML = document.getElementById('counter');
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
prestidigitation.push(product1, product2, product3);


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
        for(var j = 0; j < allProducts.length; j++){
            if(idReference === allProducts[j].id){
                prestidigitation[i].src = allProducts[j].filepath;
                prestidigitation[i].title = allProducts[j].description;
                prestidigitation[i].alt = allProducts[j].description;
                prestidigitation[i].id = allProducts[j].id;
                allProducts[j].views++;
            }
        }  
    }
    cardDeck.splice(0, 3);
};

function preference(event){
    if(counter < 25){
        for(var i = 0; i < allProducts.length; i++){
            if(event.target.id === allProducts[i].id){
                allProducts[i].clicks++;
                counter++;
                counterHTML.innerHTML = counter;
                if(counter === 25){
                    console.table(allProducts);
                }
            }
        }
        render();
    }
    
}
//+++++++++++++++
//Executable Code
render();
window.addEventListener('click', preference);
