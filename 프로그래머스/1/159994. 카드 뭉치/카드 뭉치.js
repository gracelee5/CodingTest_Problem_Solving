function solution(cards1, cards2, goal) {
    var answer = '';
    for(let i = 0; i<goal.length; i++){
        if(goal[i] === cards1[0]){
            cards1.splice(0,1);
        }else if(goal[i] === cards2[0]){
            cards2.splice(0,1);
        }else{
            return "No";
        }
    }
    return "Yes";
}