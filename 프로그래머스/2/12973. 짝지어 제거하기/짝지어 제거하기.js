function solution(s)
{
    var stack = [];
    stack.push(s[0]);
    for(let i = 1; i < s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    if(stack.length > 1){
        for(let i = stack.length - 1; i>0; i--){
            if(stack[i]===stack[i-1]){
                stack.pop();
                stack.pop();
            }else{
                return 0;
            }
        }
    }else if(stack.length === 0) return 1;

    return 0;
}