function solution(answers) {
    var answer = [];
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    let scoreList = [];
    let score = 0;
    for (let pattern of patterns){
        for(let i = 0; i < answers.length; i++){
            if(pattern[i%pattern.length] === answers[i]){
                score++;
            }
        }
        scoreList.push(score);
        score = 0;
    }
    
    const max = Math.max(...scoreList);
    for(let i = 0; i < scoreList.length; i++){
        if(scoreList[i] === max){
            answer.push(i+1);
        }
    }
    return answer;
}