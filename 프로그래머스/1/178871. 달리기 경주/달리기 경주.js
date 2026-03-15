function solution(players, callings) {
    let map = {};
    players.forEach((v,i) => map[v] = i);
    
    for(calling of callings){
        let i = map[calling]; //위치 파악
        let front = players[i-1];
        [players[i], players[i-1]] = [players[i-1], players[i]];
        map[calling] = i-1;
        map[front] = i;
    }
    return players;
}