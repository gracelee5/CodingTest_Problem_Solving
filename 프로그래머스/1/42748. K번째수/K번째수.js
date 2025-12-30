function solution(array, commands) {  
    var answer = [];
    for (command of commands){
        var slice_array = array.slice(command[0]-1,command[1]);
        slice_array.sort((a,b) => a-b);
        answer.push(slice_array[command[2]-1]);
    }

    return answer;
}