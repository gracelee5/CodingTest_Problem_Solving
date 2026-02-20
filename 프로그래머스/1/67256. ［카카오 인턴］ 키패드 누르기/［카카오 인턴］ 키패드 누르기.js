function solution(numbers, hand) {
    const pos = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2]
    };
    let left ='*';
    let right = '#';
    let answer = '';
    
    const getDist = (from, to)=>{
        return Math.abs(pos[from][0] - pos[to][0]) +
               Math.abs(pos[from][1] - pos[to][1]);
    };
    
    for (let num of numbers){
        if([1,4,7].includes(num)){
            answer += 'L';
            left = num;
        }
        else if ([3,6,9].includes(num)){
            answer += 'R';
            right = num;
        }
        else{
            const leftDist = getDist(left,num);
            const rightDist = getDist(right, num);
            if(leftDist<rightDist){
                answer += 'L';
                left = num;
            }else if (leftDist>rightDist){
                answer += 'R';
                right = num;
            }else{
                if(hand === 'right'){
                    answer += 'R';
                    right = num;
                }else{
                    answer += 'L';
                    left = num;
                }
            }
        }
    }
    
    return answer;
}