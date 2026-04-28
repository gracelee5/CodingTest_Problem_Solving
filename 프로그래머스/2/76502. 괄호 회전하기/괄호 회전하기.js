function solution(s) {
    var answer = 0;
    let k = 0
    while(k < s.length){
        let new_s = s.slice(k) + s.slice(0,k);
        if(check(new_s)){
            answer++;
        }
        k++;
    }
    
    return answer;
}

function check(s){
    let stack = [];
    let stackLength = 0;
    for (let i = 0; i<s.length; i++){
        const c = s[i];
        if(c === '('|| c === '{'|| c === '['){
            stack.push(c);
        }else{
            if(stack.length === 0) return false;
            const top = stack.pop();
            if((c ==='}' && top !== '{')||
                (c ===']' && top !== '[')||
                (c ===')' && top !== '(')
              ){
                return false;
            }
        }
    }
    return stack.length === 0;
}