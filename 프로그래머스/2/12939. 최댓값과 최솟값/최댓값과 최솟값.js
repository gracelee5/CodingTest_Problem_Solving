function solution(s) {
    var answer = '';
    let numbers = s.split(" ");
    let max = numbers[0];
    let min = numbers[0];
    for (number of numbers){
        let num = Number(number); 
        if (num > max) max = number;
        if (num < min) min = number;
    }
    answer = min + " " + max;
    return answer;
    return answer;
}