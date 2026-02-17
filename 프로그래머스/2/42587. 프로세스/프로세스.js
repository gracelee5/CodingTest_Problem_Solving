function solution(priorities, location) {
    let answer = 0;
    let array = [];
    let max_value = Math.max(...priorities);
    
    for (let i = 0; i<priorities.length; i++){
        array.push(i);
    }
    
    while(priorities.length != 0){
        let max_value = Math.max(...priorities);
        if(priorities[0] < max_value){
            priorities.push(priorities.shift());
            array.push(array.shift());
        }else{
            answer++;
            if(array[0] === location) break;
            priorities.shift();
            array.shift();
        }
    }
    return answer;
}