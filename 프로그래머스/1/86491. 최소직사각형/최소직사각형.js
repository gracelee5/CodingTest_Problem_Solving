function solution(sizes) {
    let a = 0;//여기에 변이 더 작은걸
    let b = 0;
    for(let size of sizes){
        if(size[0]>size[1]){
            a = Math.max(a,size[1]);
            b = Math.max(b,size[0]);
        }else{
            a = Math.max(a,size[0]);
            b = Math.max(b,size[1]);
        }
    }
    return a*b;
}