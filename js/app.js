var model = {
  currentCat: null,

  cats: [
    {
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
    }
  ]
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  getCatLevel: function(count) {
    x = count;
    switch(true) {
      case (x < 10):
        level = 'Infant';
        break;
      case (x >= 10 && x < 15):
        level = 'Toddler';
        break;
      case (x >= 15 && x < 20):
        level = 'Teen';
        break;
      case (x >= 20 && x < 25):
        level = 'Adult';
        break;
      default:
        level = 'Dead';
        break;
    }
    return level;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

var catView = {
  init: function() {
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catLevelElem = document.getElementById('cat-level');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click', function(e){
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catLevelElem.textContent = octopus.getCatLevel(currentCat.clickCount);
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {
  init: function() {
    this.catListElem = document.getElementById('cat-list');
    this.render();
  },

  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      elem = document.createElement('li');
      elem.textContent = cat.name;
      elem.addEventListener('click', (function(cat) {
        return function() {
          octopus.setCurrentCat(cat);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
