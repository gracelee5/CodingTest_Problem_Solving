function solution(s) {
    var answer = '';
    let length = s.length;
    if(length % 2 === 1){
        return s[Math.floor(length/2)];
    }else{
        answer += s[length/2-1];
        answer += s[length/2];
    }
    return answer;
}