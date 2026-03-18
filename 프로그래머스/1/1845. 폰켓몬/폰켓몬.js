function solution(nums) {
    var answer = 0;
    let n = Math.floor(nums.length/2);
    nums = [...new Set(nums)];
    if(nums.length >= n){
        answer  = n;
    }else{
        answer = nums.length;
    }
    return answer;
}