function solution(prices) {
    var answer = [];
    
    for (let i =0; i<prices.length; i++){
        let count = 0;
        for(let j = i+1; j<prices.length; j++){
            count++;
            if(prices[i]>prices[j]){//가격이 떨어진 경우
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}