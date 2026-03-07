function solution(n) {
    const count = n.toString(2).match(/1/g).length;
    let next = n+1;
    while (next.toString(2).match(/1/g).length !== count){
        next ++;
    }
    
    return next;
}