function solution(N, number) {
    let dp = Array(9).fill(null).map(() => new Set());
    for (let i = 1; i <= 8; i++){
        dp[i].add(Number(String(N).repeat(i)));
        for(let j=1; j<i; j++){
            for(let a of dp[j]){
                for(let b of dp[i-j]){
                    dp[i].add(a+b);
                    dp[i].add(a-b);
                    dp[i].add(a*b);
                    if(b!==0){
                        dp[i].add(Math.floor(a/b));
                    }
                }
            }
        }
        if(dp[i].has(number)) return i;
    }
    return -1;
}