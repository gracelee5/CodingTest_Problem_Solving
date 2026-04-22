function solution(n, works) {
    var answer = 0;
    const heap = new MaxHeap();
    
    for (let w of works) {
    heap.push(w);
  }
    
    for (let i = 0; i < n; i++) {
        let max = heap.pop();
        if (max <= 0) break;
        heap.push(max - 1);
    }

    for (let w of heap.heap) {
        answer += w * w;
      }
    return answer;
}

class MaxHeap {

  constructor() {

    this.heap = [];

  }

  push(value) {

    this.heap.push(value);

    this.bubbleUp();

  }

  pop() {

    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.bubbleDown();

    return max;

  }

  bubbleUp() {

    let index = this.heap.length - 1;

    while (index > 0) {

      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] =

        [this.heap[index], this.heap[parent]];

      index = parent;

    }

  }

  bubbleDown() {

    let index = 0;

    const length = this.heap.length;

    while (true) {

      let left = index * 2 + 1;

      let right = index * 2 + 2;

      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {

        largest = left;

      }

      if (right < length && this.heap[right] > this.heap[largest]) {

        largest = right;

      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] =

        [this.heap[largest], this.heap[index]];

      index = largest;

    }

  }

}