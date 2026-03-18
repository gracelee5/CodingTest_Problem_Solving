function solution(n, lost, reserve) {
    let newlost = lost.filter(l=> !reserve.includes(l));//잃어버렸는데 가진 애들은 미리 제거
    let newreserve = reserve.filter(r=> !lost.includes(r));
    newlost.sort((a,b)=> a-b);
    newreserve.sort((a,b)=>a-b);
    
    let lostStudent = newlost.length;
    
    for(let l of newlost){
        let sets = [l-1,l+1];//잃어버린 학생이 받을 수 있는 체육복들
        for (let i = 0; i<newreserve.length; i++){
            if(sets.includes(newreserve[i])){
                newreserve.splice(i,1);
                lostStudent--;
                break;
            }
        }
    }
  return n - lostStudent;
}
