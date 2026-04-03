function solution(numbers) {
    var answer = '';
    numbers = numbers.map(String);
    numbers.sort((a,b)=>(b+a)-(a+b));
    answer = numbers.join("");
    if(answer[0] === "0"){
        return "0";
    }
    return answer;
}