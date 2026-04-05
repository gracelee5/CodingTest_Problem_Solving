function solution(begin, target, words) {
    var visited = new Array(words.length).fill(false);
    if(!words.includes(target)){
        return 0;
    }
    var queue = [[begin, 0]];
    
    while(queue.length){
        let [current, step] = queue.shift();
        if(current === target){
            return step;
        }
        for(let i = 0; i < words.length; i++){
            let diff = 0;
            for(let j = 0; j < begin.length; j++){
                if(current[j] !== words[i][j]){
                    diff++;
                    if(diff > 1){
                        break;
                    }
                }
            }
            if(diff === 1 && !visited[i]){
                visited[i] = true;
                queue.push([words[i],step+1]);
            }
        }
    }
}
