function solution(clothes) {
    var map = {};
    for (let cloth of clothes){
        if(!map[cloth[1]]){
            map[cloth[1]] = [];
        }
        map[cloth[1]].push(cloth[0]);
    }
    var count = 1;
    for (let key in map){
        count *= (map[key].length+1);
    }
    return count - 1;
}