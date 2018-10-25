for(var i = 1; i <= 3; i++){
    var idReference = cardDeck[i].id;
    for(var j = 0; j < allProducts.length; j++){
      if(idReference === allProducts[j].id){
        document.getElementById(`product${i}`).src = allProducts[j].filepath;
        document.getElementById(`product${i}`).title = allProducts[j].description;
        document.getElementById(`product${i}`).alt = allProducts[j].description;
        document.getElementById(`product${i}`).id = allProducts[j].id;
        allProducts[j].views++;
      }
    }
  }