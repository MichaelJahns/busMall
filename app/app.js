
var counter = 0;
var cardDeck = [];
var allProducts = [];
var prestidigitation = [];

var counterHTML = document.getElementById('counter');
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

var exitGallery = document.getElementById('closeGallery')
var pullGallery = document.getElementById('pullGallery');
var productWindow = document.getElementById('productWindow');
var resultsWindow = document.getElementById('results');
prestidigitation.push(product1, product2, product3);


function Product (id, description, filepath) {
  this.id = id;
  this.description = description;
  this.filepath = filepath;
  this.views = 0;
  this.clicks = 0;

  allProducts.push(this);
}

new Product (' 0', 'Walking Bike', 'img/bike.jpg');
new Product (' 1', 'R2D2 Bag', 'img/bag.jpg')
new Product (' 2', 'Easy Banana Slicer', 'img/banana.jpg');
new Product (' 3', 'Bathroom Buddy', 'img/bathroom.jpg');
new Product (' 4', 'Fashion First Boots', 'img/boots.jpg');
new Product (' 5', 'Breakfast Machine', 'img/breakfast.jpg');
new Product (' 6', 'Meat Bubblegum', 'img/bubblegum.jpg');
new Product (' 7', 'Gregorian Torture Device', 'img/chair.jpg');
new Product (' 8', 'Cthulu Doll' , 'img/cthulhu.jpg');
new Product (' 9', 'Doogy Duck Bill', 'img/dog-duck.jpg');
new Product (' 10', 'Edible Dragon Meat', 'img/dragon.jpg');
new Product (' 11', 'Pen Utensils', 'img/pen.jpg');
new Product (' 12', 'Pet Sweeper', 'img/pet-sweep.jpg');
new Product (' 13', 'Pizza Scissors', 'img/scissors.jpg');
new Product (' 14', 'Shark Sleeping Bag', 'img/shark.jpg');
new Product (' 15', 'Baby House Sweeper', 'img/sweep.png');
new Product (' 16', 'Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new Product (' 17', 'Nearly Edible Unicorn Meat', 'img/unicorn.jpg');
new Product (' 18', 'Tentacle USB', 'img/usb.gif');
new Product (' 19', 'Self Love Watering Can', 'img/water-can.jpg');
new Product (' 20', 'Shiek Wine Glass', 'img/wine-glass.jpg');

function shuffle(array){
  cardDeck = array.slice(0);
  for (var i = cardDeck.length - 1; i > 0; i--) {
    var randomPosition = Math.floor(Math.random() * (i + 1));
    var temp = cardDeck[i];
    cardDeck[i] = cardDeck[randomPosition];
    cardDeck[randomPosition] = temp;
  }
}

function createElement(type, content, parent){
  var element = document.createElement(type);
  if(type === 'img'){
    element.src   = allProducts[content].filepath;
    element.alt   = allProducts[content].description;
    element.title = allProducts[content].description;
  }else{
    element.innerHTML = content;}
  parent.appendChild(element);

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
}

function results(){
  for(var i = 0; i < allProducts.length; i++){
    var results = document.getElementById('results');
    createElement('li', `${allProducts[i].clicks}/${allProducts[i].views} for item ${allProducts[i].description}`, results);
  }
}

function preference(event){
  if(event.target.className !== 'vendor'){
    document.getElementById('productWindow').style.background = 'red';
    document.getElementById('warning').style.display = 'block';
  }
  else{
    document.getElementById('productWindow').style.background = 'white';
    document.getElementById('warning').style.display = 'none';
    if(counter < 25){
      for(var i = 0; i < allProducts.length; i++){
        if(event.target.id === allProducts[i].id){
          allProducts[i].clicks++;
          counter++;
          counterHTML.innerHTML = counter;
          if(counter === 25){
            console.table(allProducts);
            productWindow.style.display = 'none';
            resultsWindow.style.display = 'block'
            results();
            chartData();
            drawChart();
          }
        }
      }
      render();
    }
  }
}
function openGallery(){
  var dump = document.getElementById('gallery')
  dump.style.display = 'block';
  
  for(var i = 0; i < allProducts.length; i++){
    createElement('img', i, dump)
  }
}
function closeGallery(){
  document.getElementById('gallery').style.display = 'none'
}
//+++++++++++++++
//Executable Code
render();
productWindow.addEventListener('click', preference);
pullGallery.addEventListener('click', openGallery);
exitGallery.addEventListener('click', closeGallery);





var productList = [];
var productVotes = [];


function chartData(){
  for(var i = 0; i < allProducts.length; i++){
    productList.push(allProducts[i].description)
    productVotes.push(allProducts[i].clicks)
  }
  console.table(productList)
  console.table(productVotes)
}







var data = {
  labels: productList,
  datasets: [{
    data: productVotes,
    backgroundColor: 'rgb(143, 117, 0)',
    hoverBackgroundColor: 'purple'
  }]

};

function drawChart() {
  var ctx = document.getElementById('preferenceData').getContext('2d');
  preferenceData = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      xAxes: [{
        fontSize: 1,
        ticks: {
          autoSkip: false,
          fontSize: .5
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  });
}
drawChart();
