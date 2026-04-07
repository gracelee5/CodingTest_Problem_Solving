function solution(game_board, table) {
    const n = game_board.length;
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    function getBlocks(board, target) {
        const visited = Array.from({length: n}, ()=>Array(n).fill(false));
        const blocks = [];
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(board[i][j] === target && !visited[i][j]){
                    const block = [];
                    const queue = [[i,j]];
                    visited[i][j] = true;
                    
                    while(queue.length){
                        const [x,y] = queue.shift();
                        block.push([x,y]);
                        
                        for(let d = 0; d < 4; d++){
                            const nx = x + dx[d];
                            const ny = y + dy[d];
                            if(nx >= 0 && nx<n && ny>=0 && ny < n && !visited[nx][ny] && board[nx][ny] === target){
                                visited[nx][ny] = true;
                                queue.push([nx,ny]);
                            }
                        }
                    }
                    blocks.push(block);
                }
            }
        }
        return blocks;
    }
    
    function normalize(block){
        const minX = Math.min(...block.map(([x,_])=>x));
        const minY = Math.min(...block.map(([_,y])=>y));
        return block.map(([x,y])=>[x-minX,y-minY]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]).toString();
    }
    
    function rotate(block) {
        return block.map(([x,y])=>[y,-x]);
    }
    
    function getRotations(block){
        const result = [];
        let cur = block;
        for (let i = 0; i < 4; i++){
            result.push(normalize(cur));
            cur = rotate(cur);
        }
        return result;
    }
    
    const emptyBlocks = getBlocks(game_board, 0);
    const pieceBlocks = getBlocks(table, 1);
    
    const usedPiece = Array(pieceBlocks.length).fill(false);
    let answer = 0;
    
    for(let empty of emptyBlocks){
        const emptyNorm = normalize(empty);
        
        for(let i = 0; i <pieceBlocks.length; i++){
            if(usedPiece[i]) continue;
            
            const rotations = getRotations(pieceBlocks[i]);
            if(rotations.includes(emptyNorm)){
                usedPiece[i] = true;
                answer += empty.length;
                break;
            }
        }
    }
    
    return answer;
}