function solution(s) {
    var arr = s.split(' ');
    var answer = '';
    for (let j = 0; j <arr.length; j++){
        for(let i = 0; i < arr[j].length; i++){
            if(i%2 === 0){
                answer += arr[j][i].toUpperCase();
            }else{
                answer += arr[j][i].toLowerCase();
            }
        }
        if(j != arr.length - 1){
            answer += ' ';
        }
    }
    
    return answer;
}