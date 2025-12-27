function solution(s){
    var answer = false;
    var sList = [];
    
    for (let i = 0; i <s.length; i++){
        if(s[0] === ')'){
        return false;
        }
        if(s[i]==='('){
            sList.push(s[i]);
        }else{
            if(sList.length>0){
                sList.pop();
            }else{
                return false;
            }
        }
    }
    
    if(sList.length == 0){
        return true;
    }

    return answer;
}