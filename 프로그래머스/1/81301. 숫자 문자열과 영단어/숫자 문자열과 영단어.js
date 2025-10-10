function solution(s) {
    var answer = '';
    let number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var test = '';
    for (let i = 0; i<s.length; i++){
        if(!isNaN(s[i])){
            answer += s[i];
        }else{
            test += s[i];
            if(number.includes(test)){
                answer += number.indexOf(test);
                test = '';
            }
        }
    }
    
    return Number(answer);
}