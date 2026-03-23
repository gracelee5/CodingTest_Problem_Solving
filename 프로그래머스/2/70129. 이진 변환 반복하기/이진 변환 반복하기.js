function solution(s) {
    var answer = [];
    let count = 0;
    let deletedzero = 0;
    while (s !== '1'){
        let beforeLength = s.length;
        s = s.replace(/0/g,'');
        let afterLength = s.length;
        deletedzero += beforeLength - afterLength;
        s = Number(afterLength).toString(2);
        count++;
    }
    answer.push(count);
    answer.push(deletedzero);
    return answer;
}