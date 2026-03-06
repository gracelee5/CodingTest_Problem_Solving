function solution(keymap, targets) {
    let map = {};
    
    for (let key of keymap){
        for (let i = 0; i <key.length; i++){
            let char = key[i];
            map[char] = map[char] ? Math.min(map[char], i+1) : i +1;
        }
    }
    let answer = [];
    
    for (let target of targets){
        let sum = 0;
        let possible = true;
        
        for(let char of target){
            if(!map[char]){
                possible = false;
                break;
            }
            sum += map[char];
        }
        
        answer.push(possible ? sum : -1);
    }
    return answer;
}