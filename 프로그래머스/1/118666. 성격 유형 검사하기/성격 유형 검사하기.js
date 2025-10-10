function solution(survey, choices) {
    var answer = '';
    const scores = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for (let i = 0; i< survey.length; i++){
        const [left, right] = survey[i];
        const choice = choices[i];
        
        if(choice < 4) scores[left] +=4 - choice;
        else if (choice>4) scores [right] += choice - 4;
    }
    
    const types = ["RT", "CF", "JM", "AN"];
    
    for (let t of types){
        answer += scores[t[0]]>=scores[t[1]] ? t[0] : t[1];
    }
    return answer;
}