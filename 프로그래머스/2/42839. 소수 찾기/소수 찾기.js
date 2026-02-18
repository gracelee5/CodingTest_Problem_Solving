function solution(numbers) {
    var answer = 0;
    var numberEach = numbers.split("");
    var numberSet = new Set();
    
    for (let i = 1; i<= numberEach.length; i++){
        var numberList = [];
        var visited = new Array(numberEach.length).fill(false);
        recur(0,i,numberList);
    }
    
    for(const N of numberSet){
        if(isPrime(N)) answer++;
    }
    return answer;
    
    function recur(idx, n, numberList){
        if(idx == n){
            var num = "";
            for(var i = 0; i<n; i++){
                num += numberList[i];
            }
            numberSet.add(parseInt(num));
            return;
        }
        
        for (var i = 0; i < numberEach.length; i++){
            if(!visited[i]){
                numberList[idx] = numberEach[i];
                visited[i] = true;
                recur(idx + 1, n, numberList);
                visited[i] = false;
            }
        }
    }
    function isPrime(number){
    if(number<2) return false;
    for (let i = 2; i*i <=number; i++){
        if(number % i == 0) return false;
    }
    return true;
    }
}
