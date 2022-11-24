class Queue {
  constructor() {
    this.items = [];
  }
  // add item in queue
  enqueue(item) {
    this.items.push(item);
  }
  // remove
  dequeue() {
    return this.items.shift();
  }
  // get first item
  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[0];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const letters = new Queue();

letters.enqueue("a");
letters.enqueue("b");
letters.enqueue("c");

console.log(letters.items);

letters.dequeue("a");
console.log(letters.items);
letters.dequeue("b");
console.log(letters.items);
letters.dequeue("c");
console.log(letters.items);

console.log(letters.getSize());
console.log(letters.isEmpty());
console.log(letters.peek());

letters.enqueue("g");
console.log(letters.items);
console.log(letters.peek());
