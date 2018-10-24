

//++++++++++++++++
//Global Variables
var allProducts = [];
var cardDeck =[];
var uniqueDraws=[];

var counter = 0;
var prestidigitation = [];

var counterHTML = document.getElementById('counter');
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

var exitGallery = document.getElementById('closeGallery')
var pullGallery = document.getElementById('pullGallery');
var productWindow = document.getElementById('productWindow');
prestidigitation.push(product1, product2, product3);


//++++++++++++++++++++++++
//Store Object Constructor
function Product (id, description, filepath, views, clicks) {
  this.id = id;
  this.description = description;
  this.filepath = filepath;
  this.views = views;
  this.clicks = clicks;

  allProducts.push(this);
}
//+++++++++++++++++++++++
//Creates Fresh Instances
function populateInstances(){
  new Product (' 0', 'Walking Bike', 'img/bike.jpg', 0, 0);
  new Product (' 1', 'R2D2 Bag', 'img/bag.jpg', 0 , 0)
  new Product (' 2', 'Easy Banana Slicer', 'img/banana.jpg', 0 , 0);
  new Product (' 3', 'Bathroom Buddy', 'img/bathroom.jpg', 0 , 0);
  new Product (' 4', 'Fashion First Boots', 'img/boots.jpg', 0 , 0);
  new Product (' 5', 'Breakfast Machine', 'img/breakfast.jpg', 0 , 0);
  new Product (' 6', 'Meat Bubblegum', 'img/bubblegum.jpg', 0 , 0);
  new Product (' 7', 'Gregorian Torture Device', 'img/chair.jpg', 0 , 0);
  new Product (' 8', 'Cthulu Doll' , 'img/cthulhu.jpg', 0 , 0);
  new Product (' 9', 'Doogy Duck Bill', 'img/dog-duck.jpg', 0 , 0);
  new Product (' 10', 'Edible Dragon Meat', 'img/dragon.jpg', 0 , 0);
  new Product (' 11', 'Pen Utensils', 'img/pen.jpg', 0 , 0);
  new Product (' 12', 'Pet Sweeper', 'img/pet-sweep.jpg', 0 , 0);
  new Product (' 13', 'Pizza Scissors', 'img/scissors.jpg', 0 , 0);
  new Product (' 14', 'Shark Sleeping Bag', 'img/shark.jpg', 0 , 0);
  new Product (' 15', 'Baby House Sweeper', 'img/sweep.png', 0 , 0);
  new Product (' 16', 'Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0 , 0);
  new Product (' 17', 'Nearly Edible Unicorn Meat', 'img/unicorn.jpg', 0 , 0);
  new Product (' 18', 'Tentacle USB', 'img/usb.gif', 0 , 0);
  new Product (' 19', 'Self Love Watering Can', 'img/water-can.jpg', 0 , 0);
  new Product (' 20', 'Shiek Wine Glass', 'img/wine-glass.jpg', 0 , 0);
}
// ++++++++++++++++
// Helper Functions

function shuffle(array){
  cardDeck = array.slice(0);
  for (var i = cardDeck.length - 1; i > 0; i--) {
    var randomPosition = Math.floor(Math.random() * (i + 1));
    var temp = cardDeck[i];
    cardDeck[i] = cardDeck[randomPosition];
    cardDeck[randomPosition] = temp;
  }
  for (var j =0; j < uniqueDraws.length; j++){
    if(cardDeck[j] === uniqueDraws[0] || cardDeck[j] === uniqueDraws[1] || cardDeck[j] === uniqueDraws[2]){
      console.log(`Duplication prevented`);
      shuffle(allProducts);
    }
  }
  uniqueDraws = cardDeck.slice(-3);
}

function createElement(type, content, parent){
  var element = document.createElement(type);
  if(type === 'img'){
    element.src = allProducts[content].filepath;
    element.alt = allProducts[content].description;
    element.title = allProducts[content].description;
  }else{
    element.innerHTML = content;
  }
  parent.appendChild(element);
}
//++++++++++++++++++++
// Feature Functions
function renderSelection(){
  if(cardDeck.length < 3 ){
    shuffle(allProducts);
    console.log(`The Card Deck was Reshuffled`)
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

function chartData(){
  var List = [];
  var Votes = [];
  for(var i = 0; i < allProducts.length; i++){
    List.push(allProducts[i].description)
    Votes.push(allProducts[i].clicks)
  }
  return[List, Votes];
}

function renderChart() {
  document.getElementById('preferenceData').style.display = 'block';
  var ctx = document.getElementById('preferenceData').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'lato';
  Chart.defaults.global.defaultFontSize = 12;
  preferenceChart = new Chart(ctx, {
    type: 'horizontalBar',
    data:{
      labels: chartData()[0],
      datasets:[{
        label: 'Votes Tallied',
        data: chartData()[1],
        backgroundColor: 'rgb(143, 117, 0)',
        hoverBackgroundColor: 'purple',
        borderWidth: 1,
        borderColor: 'gray',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'

      }]
    },
    options:{
      title:{
        display: true,
        text: 'Users Preference Data',
        fontSize: 25
      },
      legend:{
        display: false,
      }
    }
  });
}
function renderList(){
  document.getElementById('resultsUl').style.display = 'block';
  for(var i = 0; i < allProducts.length; i++){
    createElement('li', `${allProducts[i].clicks}/${allProducts[i].views} for item ${allProducts[i].description}`, results);
  }
}
function pageLoad(){
  console.log(`Page Loaded`)
  if(localStorage.getItem('cacheSurvey') !== null){
    console.log(`Data exists`)
    var temp = JSON.parse(localStorage.cacheSurvey)
    for(var i = 0; i < temp.length; i++){
      new Product(temp[i].id, temp[i].description, temp[i].filepath, temp[i].views, temp[i].clicks)
    }
  } else {
    populateInstances();
  }
  renderSelection();
}
//++++++++++++++
//Event Handlers
function handlePreference(event){
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
            document.getElementById('productWindow').style.display = 'none';
            document.getElementById('instructionTooltip').style.display = 'none';
            renderList();
            renderChart();
            localStorage.cacheSurvey = JSON.stringify(allProducts);
          }
        }
      }
      renderSelection();
    }
  }
}
function handleGalleryOpen(event){
  var dump = document.getElementById('gallery')
  dump.style.display = 'block';

  for(var i = 0; i < allProducts.length; i++){
    createElement('img', i, dump)
  }
}
function handleGalleryClose(event){
  document.getElementById('gallery').style.display = 'none'
}

//===============
//Executable Code
//===============
pageLoad();



productWindow.addEventListener('click', handlePreference);
pullGallery.addEventListener('click', handleGalleryOpen);
exitGallery.addEventListener('click', handleGalleryClose);

