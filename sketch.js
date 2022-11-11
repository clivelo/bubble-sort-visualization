var arr = [];
var spacing = 10;
var index = 0;
var leftToSort;

function setup() {
  createCanvas(800, 400);
  frameRate(60);
  for (var i = spacing; i <= height; i += spacing) {
    arr.push(i);
  }
  arr = shuffle(arr);
  leftToSort = arr.length;
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  for (var i = 0; i < arr.length; i++) {
    rect((i * width) / arr.length, height - arr[i], width / arr.length, arr[i]);
  }

  swap(index, index + 1);
  index++;
  if (index + 1 >= leftToSort) {
    index = 0;
    leftToSort--;
    if (leftToSort == 0) {
      console.log("It's sorted");
      noLoop();
    }
  }
}

function swap(i, j) {
  if (arr[i] > arr[j]) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
