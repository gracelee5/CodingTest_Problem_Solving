function solution(maps) {
    const height = maps.length;
    const width = maps[0].length;
    
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    const queue = [];
    
    queue.push([0,0,1])
    
    while(queue.length){
        const [y,x,cnt] = queue.shift();
        if(y===height-1 && x===width-1) return cnt;
        
        for(let i = 0; i < 4; i++){
            let ny = y + dy[i];
            let nx = x + dx[i];
            if(ny>=0&&ny<height && nx>=0 && nx < width && maps[ny][nx] === 1){
                maps[ny][nx] = 0;
                queue.push([ny,nx,cnt+1]);
            }
        }
        
        
    }
  return -1
}