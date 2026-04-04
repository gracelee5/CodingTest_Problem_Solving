function solution(triangle) {
    var answer = 0;
    let dp = [...triangle[triangle.length - 1]];
    for (let i = triangle.length - 2; i >= 0; i--){
        for(let j = 0; j <= i; j++){
            dp[j] = triangle[i][j] + Math.max(dp[j],dp[j+1]);
        }
    }
    return dp[0]
}