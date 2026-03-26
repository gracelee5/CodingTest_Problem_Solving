function solution(n, wires) {
    var answer = -1;
    var min = n;
    let graph = Array.from({length: n+1}, () => []);
    for (let [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    for(let [a,b] of wires){
        let visited = new Array(n+1).fill(false);
        let count = dfs(a, visited, a, b);
        let diff = Math.abs(count - (n-count));
        min = Math.min(diff,min);
    }
    function dfs(node, visited, cutA, cutB){
        visited[node] = true;
        let count = 1;
        for (let next of graph[node]){
            if (
                (node === cutA && next === cutB) ||
                (node === cutB && next === cutA)
            ) continue;

            if (!visited[next]) {
                count += dfs(next, visited, cutA, cutB);
            }
        }
        
        return count;
    }
    return min;
}