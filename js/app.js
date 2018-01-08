var clicker0 = document.getElementById('clicker0');
var counter0 = document.getElementById('counter0');
var clicker1 = document.getElementById('clicker1');
var counter1 = document.getElementById('counter1');
var count0 = counter0.textContent;
var count1 = counter1.textContent;

clicker0.onclick = function() {
  count0++;
  counter0.textContent = count0;
  console.log('counter0' + counter0);
};

clicker1.onclick = function() {
  count1++;
  counter1.textContent = count1;
  console.log('counter1' + counter1);
};
