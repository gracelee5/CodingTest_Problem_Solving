function solution(progresses, speeds) {
    let answer = [];
    let day = 1;
    let cnt = 0;
    let progress = 0;
    
    while(progresses.length){
        progress = progresses[0] + speeds[0]*day;
        if(progress >= 100){
            cnt++;
            progresses.shift();
            speeds.shift();
        }else{
            if(cnt > 0){
                answer.push(cnt);
            }
            day++;
            cnt = 0;
        }
    }
    answer.push(cnt);
    return answer;
}