function solution(n, lost, reserve) {
    let newLost = lost.filter((l)=>!reserve.includes(l)).sort((a,b)=>a-b); //잃어버렸는데 여벌 체육복 가져온 학생 제거
    reserve = reserve.filter((r)=>!lost.includes(r)).sort((a,b)=>a-b);
    
    let lostStudent = newLost.length;
    
    for(let l of newLost){
        for(let i = 0; i<reserve.length; i++){
            if(reserve[i] === l-1 ||reserve[i] === l+1){
                reserve.splice(i,1);
                lostStudent--;
                break;
            }
        }
    }
  return n - lostStudent;
}
