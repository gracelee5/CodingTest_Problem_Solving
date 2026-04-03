function solution(n, wires) {
    var min = n;
    let graph = new Array(n+1).fill().map(()=>[]);
    for (let [a,b] of wires){
        graph[a].push(b);
        graph[b].push(a);
    }
    for(let [a,b] of wires){
        let visited = new Array(n+1).fill(false);
        let count = dfs(a, visited, a, b);
        let diff = Math.abs(n - count - count);
        min = Math.min(min, diff);
    }
    function dfs(node, visited, cutA, cutB){
        visited[node] = true;
        let count = 1;
        for (let next of graph[node]){
            if((node === cutA && next === cutB)
              ||(node === cutA && next === cutB)){
                continue
            }
            if (!visited[next]){
                count += dfs(next, visited, cutA, cutB);
            }
            
        }
        return count;
    }
    return min;
}