function solution(n,a,b)
{
    var answer = 0;
    while(1){
        a = Math.floor((a + 1)/2);
        b = Math.floor((b + 1)/2);
        answer ++;
        if(a === b) return answer;
    }
    return answer;
}