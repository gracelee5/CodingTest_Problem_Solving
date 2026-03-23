function solution(w, h) {
    let g = gcd(w,h);
    return w*h - (w+h-g);
}
function gcd(a,b){
    while( b !== 0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}