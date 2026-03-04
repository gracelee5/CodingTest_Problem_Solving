function solution(n, w, num) {
    const columns = Array.from({length: w}, () => []);
    
    let boxNumber = 1;
    let layer = 0;
    

    while (boxNumber <= n) {
    	// 짝수 층(0부터 시작)은 왼쪽에서 오른쪽으로
        if (layer%2 === 0) {
            for (let col = 0; col < w && boxNumber <= n; col++){
               columns[col].push(boxNumber);
                boxNumber++;
            }
        } 
        // 홀수 층은 오른쪽에서 왼쪽으로
        else {
            for (let col = w - 1; col >= 0 && boxNumber <= n; col--) {
                columns[col].push(boxNumber);
                boxNumber++;
            }
        }
        layer++;
    }
    
    // num이 있는 열을 찾기
    for (let col = 0; col < w; col++) {
        const index = columns[col].indexOf(num);
        if(index !== -1) {
        	// 해당 열에서 num부터 끝까지의 상자 개수를 반환
            return columns[col].length - index;
        }
    }
  
    return 0; 
}