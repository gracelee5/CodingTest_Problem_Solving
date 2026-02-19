function solution(answers) {
    var answer = [];
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    var score = [0,0,0];
    
    for (let i = 0; i<answers.length; i++){
        for (let j = 0; j <patterns.length; j++){
            if(answers[i] == patterns[j][i%patterns[j].length]){
                score[j]++;
            }
        }
    }
    
    const max = Math.max(...score);
    for(let i = 0; i<score.length; i++){
        if(max == score[i]){
            answer.push(i+1);
        }
    }
    return answer;
}