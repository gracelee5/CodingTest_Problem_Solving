function solution(numbers) {
    var answer = [];
    for (let i = 0; i<numbers.length; i++){
        for (let j = i+1; j<numbers.length; j++){
            let a = numbers[i];
            let b = numbers[j];
            let sum = a+b;
            if(!answer.includes(sum)){
                answer.push(sum);
            }
        }
    }
    answer = answer.sort((a,b)=>a-b);
    return answer;
}