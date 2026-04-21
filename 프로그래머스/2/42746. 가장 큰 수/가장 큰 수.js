function solution(numbers) {
    var answer = '';
    numbers = numbers.map(String)
    numbers.sort((a,b)=>(b+a)-(a+b));
    if (numbers[0] === "0") return "0";
    for(let i = 0; i <numbers.length; i++){
        answer+=numbers[i];
    }
    
    return answer;
}