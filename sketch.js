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
  stroke(255);
  fill(0);
  for (var i = 0; i < arr.length; i++) {
    if (i == index) {
      fill(255, 0, 0);
    }
    rect((i * width) / arr.length, height - arr[i], width / arr.length, arr[i]);
    fill(0);
  }

  text("Bubble sort\nBest time complexity: O(n)\nAverage time complexity: O(n²)\nWorst time complexity: O(n²)", 5, 15)
  
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
