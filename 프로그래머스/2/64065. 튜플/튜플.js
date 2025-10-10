function solution(s) {
    var answer = [];
    s = s.slice(2,-2);// { }제거
    const arr = s.split("},{");
    const sets = arr.map(group => group.split(',').map(Number));
    
    sets.sort((a,b)=> a.length-b.length);

    for (const set of sets){
        for(const num of set){
            if(!answer.includes(num)){
                answer.push(num);
            }
        }
    }
    return answer;
}