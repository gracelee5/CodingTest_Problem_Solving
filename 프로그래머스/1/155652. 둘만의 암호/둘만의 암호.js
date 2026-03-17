function solution(s, skip, index) {
    var answer = '';
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
 'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var newAlphabet = alphabet.filter((item) => !skip.includes(item));
    var map = {}
    newAlphabet.forEach((v,i)=>map[v] = i);
    for(let i = 0; i<s.length; i++){
        let n = map[s[i]];//위치
        answer += newAlphabet[(n+index)%(26-skip.length)];
    }
    return answer;
}