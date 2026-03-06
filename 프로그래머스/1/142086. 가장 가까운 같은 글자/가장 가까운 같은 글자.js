function solution(s) {
    var answer = [];
    var check = [];
    for (let i = 0; i< s.length; i++){
        if(check.includes(s[i])){
            let index = i - check.lastIndexOf(s[i]);
            check.push(s[i]);
            answer.push(index);
        }else{
            answer.push(-1);
            check.push(s[i]);
        }
    }
    return answer;
}