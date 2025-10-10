function solution(gems) {
    const totalKinds = new Set(gems).size;
    const map = new Map();
    let start = 0;
    let answer = [1,gems.length];
    
    for (let end = 0; end <gems.length; end ++){
        const gem = gems[end];
        map.set(gem , (map.get(gem) || 0)+1);
        
        while (map.size === totalKinds){
            if(end - start < answer[1]-answer[0]) {
                answer = [start + 1, end + 1];
            }
            const startGem = gems[start];
            map.set(startGem, map.get(startGem) - 1);
            if(map.get(startGem) === 0) map.delete(startGem);
            start++;
        }
    }
    
    return answer;
}