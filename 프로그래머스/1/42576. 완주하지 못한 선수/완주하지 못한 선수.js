function solution(participant, completion) {
    var answer = '';
    participant.sort();
    console.log(participant);
    completion.sort();
    console.log(completion);
    
    for(let i = 0; i <participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
}