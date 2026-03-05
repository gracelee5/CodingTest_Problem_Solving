function solution(n, m, section) {
    var answer = 0;
    let s = 0;//페인트 칠하기 시작하는 위치
    while(section.length){
        s = section[0] + m - 1;
        answer++;
        while (section.length && section[0] <= s){
            section.shift();
        }
    }
    return answer;
}