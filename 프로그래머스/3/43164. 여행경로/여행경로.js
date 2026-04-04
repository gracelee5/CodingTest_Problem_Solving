function solution(tickets) {
    var answer = ["ICN"];
    let visited = new Array(tickets.length).fill(false);
    tickets.sort();
    dfs("ICN");

    
    function dfs(current){
        if(answer.length === tickets.length + 1){
            return true;
        }
        for (let i = 0; i <tickets.length; i++){
            if(current === tickets[i][0] && !visited[i]){
                visited[i] = true;
                answer.push(tickets[i][1]);
                if(dfs(tickets[i][1])){
                    return true;
                }
                visited[i] = false;
                answer.pop();
            }
        }
        return false;
    }
    
    return answer;
}