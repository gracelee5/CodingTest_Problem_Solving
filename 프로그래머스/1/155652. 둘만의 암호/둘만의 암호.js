function solution(s, skip, index) {
    var answer = '';
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
 'n','o','p','q','r','s','t','u','v','w','x','y','z'].filter((item) => !skip.includes(item));
    var map = {}
    alphabet.forEach((v,i)=>map[v] = i);
    for(let i = 0; i<s.length; i++){
        let n = map[s[i]];//위치
        answer += alphabet[(n+index)%(26-skip.length)];
    }
    return answer;
}