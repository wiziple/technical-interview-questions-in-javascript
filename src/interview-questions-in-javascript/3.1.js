// Implement enqueue and dequeue using only two stacks

// Javascirpt Stack

/*let stack1 = [];

stack1.push('1');
stack1.push('2');

stack1.pop();*/

let stack1 = [];
let stack2 = [];

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(input) {
    this.stack1.push(input);
  }

  dequeue() {
    while(this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
