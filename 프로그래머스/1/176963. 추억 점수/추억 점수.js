function solution(name, yearning, photo) {
    var answer = [];
    let score = 0;
    let obj = {};

    for (let i = 0; i < name.length; i++) {
      obj[name[i]] = yearning[i];
    }
    
    for (let i = 0; i<photo.length; i++){
        for(let j = 0; j<photo[i].length; j++){
            if(obj[photo[i][j]]){
                score += obj[photo[i][j]];
            }
        }
        answer.push(score);
        score = 0;
    }
    return answer;
}