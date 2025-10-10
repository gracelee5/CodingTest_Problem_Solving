function solution(queue1, queue2) {
    let q = [...queue1, ...queue2];
    let sum1 = queue1.reduce((a,b)=>a+b);
    let sum2 = queue2.reduce((a,b) => a+b);
    let target = (sum1+sum2)/2;
    
    if((sum1+sum2)%2 ==1) return -1;
    
    let i = 0;
    let j = queue1.length;
    const len = q.length;
    let count = 0;
    while ( i <len && j<len && count <= len *2){
        if (sum1 === target) return count;
        else if (sum1>target) sum1 -= q[i++];
        else sum1 += q[j++];
        count++;
    }
    return -1;
}