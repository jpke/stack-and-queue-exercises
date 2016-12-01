var node = function(){
    this.data = null;
    this.next = null;
}

var Stack = function(){
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.top = null;
  this.display = display;
}

function push(data) {
  //if the top of the stack is empty, then the data will be the
  //top of the stack
  if (this.top == null) {
    this.top = new node();
    this.top.data = data;
  } 
  //if the top already has something then create a new node
  //add data to the new node
  // have the pointer point to the top 
  else {
    var temp = new node();
    temp.data = data;
    temp.next = this.top;
    this.top = temp;
  }
}

function peek() {
  //if the top of the stack does not have anything 
  //then the stack is empty
  //otherwise return what's on the top
  if (this.top == null) {
    return null;
  } 
  else {
    return this.top.data;
  }
}

function pop() {
  //in order to remove the top of the stack, you have to point
  //the pointer to the next item and that next item becomes the
  //top of the stack
  var temp = this.top;
  var data = this.top.data;
  this.top = this.top.next;
  temp = null;
  return data;
}

function display() {
  // displays the entire contents of the stack
  var node = this.top;
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
}

var s = new Stack();

s.push(1);
s.push(2);
s.push("Tauhida");

console.log("Top of stack:", s.peek());
s.pop();
s.push("joe");
console.log("The stack contains:");
s.display();



///

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.display = display;
}

function push(element) {
  this.dataStore[this.top++] = element;
}
function peek() {
  return this.dataStore[this.top-1];
}
function pop() {
  return this.dataStore[--this.top];
}
function display() {
  let temp = []
  for(let i = 0; i < this.top; i++) {
    temp.push(this.dataStore[i]);
  }
  console.log("bottom [" + temp + "] top");
};

function length() {
  return this.top;
}

var s = new Stack();
s.push("Joe");
s.push("Tauhida");
s.push(5);
console.log("length: " + s.length());
console.log("top of stack:", s.peek());
s.display();


///

var Node = function(data) {
  this.data = data;
  this.next = null;
};

var Queue = function(){
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.first = null;
  this.size = 0;
}

function enqueue(data) {
  var node = new Node(data);
  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }

  this.size += 1;
  return node;
};

function dequeue() {
  temp = this.first;
  this.first = this.first.next;
  this.size -= 1;
  return temp.data;
};

var q = new Queue();
q.enqueue("Tauhida");
q.enqueue("Joe");
q.enqueue("Tim");
console.log(q.dequeue());
q.enqueue("alison");
q.enqueue("chris");
console.log(q.dequeue());


////

function Queue() { 
    this.dataStore = []; 
    this.enqueue = enqueue; 
    this.dequeue = dequeue; 
    this.front = front; 
    this.back = back; 
    this.toString = toString; 
} 
//The enqueue() function adds an element to the end of a queue: 
function enqueue(element) { 
    this.dataStore.push(element); 
} 
//The dequeue() function removes an element from the front of a queue: 
function dequeue() { 
    return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  return "Front [" + this.dataStore + "] Back";
}