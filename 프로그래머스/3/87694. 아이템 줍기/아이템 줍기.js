function solution(rectangle, characterX, characterY, itemX, itemY) {
    rectangle = rectangle.map(r => r.map(v => v * 2));
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    const dy = [0,1,0,-1];
    const dx = [1,0,-1,0];
    let map = Array.from({length: 102}, () => Array(102).fill(0));
    for (let r of rectangle){
        for(let i = r[0]; i <= r[2]; i++){
            for(let j = r[1]; j <= r[3]; j++){
                map[i][j] = 1;
            }
        }
    }
    for (let r of rectangle){
        for(let i = r[0] + 1; i < r[2]; i++){
            for(let j = r[1] + 1; j < r[3]; j++){
                map[i][j] = 0;
            }
        }
    }
    let queue = [[characterX, characterY, 0]];
    let visited = Array.from({length: 102}, () => Array(102).fill(false));
    visited[characterX][characterY] = true;
    while(queue.length){
        let [x,y,dist] = queue.shift();
        if(x === itemX && y === itemY){
            return dist / 2;
        }
        for(let d = 0; d<4; d++){
            let nx = x + dx[d];
            let ny = y + dy[d];
            if(nx >=0 && ny >= 0 && nx <= 102 && ny <= 102 && !visited[nx][ny] && map[nx][ny] === 1){
                visited[nx][ny] = true;
                queue.push([nx,ny,dist + 1]);
            }
        }
    }
    return ;
}