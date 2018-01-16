var catElem = document.getElementById('cat');
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');
var countElem = document.getElementById('cat-count');

var cat = {
  clickCount : 0,
  name : 'Poplinre',
  imgSrc : 'images/cat.jpg'
}

function incrementCounter() {
  cat.clickCount++;
  view.render();
}

var view = {
  render: function() {
            countElem.textContent = cat.clickCount;
            catNameElem.textContent = cat.name;
            catImageElem.src = cat.imgSrc;
          }
}

catElem.addEventListener('click', function(e){
  incrementCounter();
});

// initial render
view.render();
