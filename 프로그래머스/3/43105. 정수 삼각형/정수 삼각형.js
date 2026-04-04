function solution(triangle) {
    var answer = 0;
    let dp = [...triangle[triangle.length - 1]];//얕은 복사
    for (let i = triangle.length - 2; i >= 0; i--){ //밑에서부터 올라감
        for(let j = 0; j <= i; j++){//열 탐색
            dp[j] = triangle[i][j] + Math.max(dp[j],dp[j+1]);
        }
    }
    return dp[0]
}