function solution(keymap, targets) {
    var answer = [];
    
    for (let i = 0; i< targets.length; i++){
        var result = 0;
        for (let j = 0; j<targets[i].length; j++){
            let click = 100;
            for (let k = 0; k < keymap.length; k++){
                if(keymap[k].includes(targets[i][j])){
                    let index = keymap[k].indexOf(targets[i][j])+1;
                    if(index<click){
                        click = index;
                    }
                }
            }
            result += click;
            
            if(click === 100){
                result = -1;
                break;
            }
        }
        
        answer.push(result);
    }
    return answer;
}