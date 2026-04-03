function solution(k, dungeons) {
    var answer = 0;
    let visited = new Array(dungeons.length).fill(false);
    function dfs(currentK, count){
        answer = Math.max(answer, count);
        for (let i = 0; i < dungeons.length; i++){
            if(currentK >= dungeons[i][0] && !visited[i]){
                visited[i] = true;
                dfs(currentK - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }
    dfs(k,0);
    return answer;
}