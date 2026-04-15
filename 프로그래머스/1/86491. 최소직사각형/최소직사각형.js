function solution(sizes) {
    let a = 0;
    let b = 0;
    for(let size of sizes){
        size.sort((a,b)=>a-b);        
        a = Math.max(a,size[1]);
        b = Math.max(b,size[0]);
    }
    return a*b;
}