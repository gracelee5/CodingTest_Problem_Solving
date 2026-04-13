function solution(land) {
    var answer = 0;
    let m = land.length;
    let n = land[0].length;
    let visited = Array.from({length: m}, () => Array(n).fill(false));
    let columnMap = new Map();
    for(let i = 0; i < n; i++) columnMap.set(i,0);
    let dx = [1,-1,0,0];
    let dy = [0,0,1,-1];
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(land[i][j] === 1 && visited[i][j] === false){
                let queue = [[i,j]];
                visited[i][j] = true;
                
                let size = 1;
                let set = new Set();
                set.add(j);//이 덩어리가 포함하고 있는 열
                
                while(queue.length){
                    let [x,y] = queue.shift();
                    for(let d=0; d<4; d++){
                        let nx = x + dx[d];
                        let ny = y + dy[d];
                        
                        if( nx >= 0 && nx < m &&
                            ny >= 0 && ny < n &&
                            land[nx][ny] === 1 &&
                            !visited[nx][ny]){
                            visited[nx][ny] = true;
                            queue.push([nx,ny]);
                            
                            size++;
                            set.add(ny); //열 기록
                        }
                    }
                }
                for(let col of set){
                    columnMap.set(col,columnMap.get(col) + size);
                }
            }
        }
        for(let val of columnMap.values()){
            answer = Math.max(answer, val);
        }
    }
    return answer;
}