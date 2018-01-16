var catElem = document.getElementById('cat');
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');
var countElem = document.getElementById('cat-count');

var catListElem = document.getElementById('cat-list');

var cats = [{
  clickCount : 0,
  name : 'Poplinre',
  imgSrc : 'images/cat.jpg'
},
{
  clickCount : 0,
  name : 'Crazy Cat',
  imgSrc : 'images/cat1.jpg'
},
{
  clickCount : 0,
  name : 'Stalker',
  imgSrc : 'images/cat2.jpg'
},
{
  clickCount : 0,
  name : 'Unsure',
  imgSrc : 'images/cat3.jpg'
},
{
  clickCount : 0,
  name : 'Lazy',
  imgSrc : 'images/cat4.jpg'
}];

var currentCat = cats[0];

function incrementCounter() {
  currentCat.clickCount++;
  catView.render();
}

var catView = {
  render: function() {
            countElem.textContent = currentCat.clickCount;
            catNameElem.textContent = currentCat.name;
            catImageElem.src = currentCat.imgSrc;
          }
}

var catListView = {
  render: function() {
            catListElem.innerHTML = '';

            for (var i = 0; i < cats.length; i++) {
              var cat = cats[i];
              var elem = document.createElement('li');
              elem.textContent = cat.name;
              elem.addEventListener('click', (function(cat) {
                return function() {
                  currentCat = cat;
                  catView.render();
                };
              })(cat))
              catListElem.appendChild(elem);
            };
          }
}


catElem.addEventListener('click', function(e){
  incrementCounter();
});

// initial render
catListView.render();
catView.render();
