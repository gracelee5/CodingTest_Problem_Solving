function solution(lottos, win_nums) {
    var answer = [];
    let same = 0;
    let zero = 0;
    for (let i = 0; i<lottos.length; i++){
        if(lottos[i]===0){
            zero++;
        }else{
            if(win_nums.includes(lottos[i])){
               same++;
               }
        }
    }
    
    let max = 7 - same - zero> 6 ? 6: 7 - same - zero;
    let min = (7 - same) > 6 ? 6: 7 - same;
    answer.push(max);
    answer.push(min);
    return answer;
}