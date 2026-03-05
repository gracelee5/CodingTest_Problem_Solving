function solution(t, p) {
    var answer = 0;
    let s = 0;
    for (let i = 0; i < t.length - p.length + 1; i++){
        let newT = t.slice(s,s+p.length);
        if(Number(newT)<=Number(p)){
            answer++;
        }
        s++;
    }
    return answer;
}