function solution(s){
    var answer = false;
    var l = 0;
    
    for (let i = 0; i <s.length; i++){
        if(s[0] === ')'){
        return false;
        }
        if(s[i]==='('){
            l++;
        }else{
            if(l>0){
                l--
            }else{
                return false;
            }
        }
    }
    
    if(l === 0){
        return true;
    }

    return answer;
}