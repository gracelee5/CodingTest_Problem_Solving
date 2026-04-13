class MinHeap {
    constructor() {this.h = [];}
    
    push(v) {
        this.h.push(v);
        let i = this.h.length - 1;
        while(i>0){
            let p = (i-1) >>1;
            if(this.h[p] <= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    
    pop() {
        if(this.h.length === 1) return this.h.pop();
        const top = this.h[0];
        this.h[0] = this.h.pop();
        
        let i = 0;
        while (true){
            let l = i*2 + 1, r = i*2+2, s = i;
            if (l < this.h.length && this.h[l] < this.h[s]) s = l;
            if (r < this.h.length && this.h[r] < this.h[s]) s = r;
            if (s === i) break;
            [this.h[i], this.h[s]] = [this.h[s], this.h[i]];
            i = s;
        }
        return top;
      }

      peek() { return this.h[0]; }
      size() { return this.h.length; 
        }
    }

function solution(scoville, K) {
    const heap = new MinHeap();
    scoville.forEach(v=>heap.push(v));
    
    let count = 0;
    
    while (heap.size() > 1 && heap.peek() < K){
        const a = heap.pop();
        const b = heap.pop();
        heap.push(a+b*2);
        count ++;
    }
    return heap.peek() >= K ? count : -1;
}