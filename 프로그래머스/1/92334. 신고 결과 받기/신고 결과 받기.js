function solution(id_list, report, k) {
    var answer = [];
    var receive = {}//신고 받은 사람
    var sent = {};//신고한 사람
    for(let id of id_list){
        receive[id] = [];
        sent[id] = 0;
    }
    for(let r of report){
        r=r.split(" ");
        if(!receive[r[1]].includes(r[0])){
            receive[r[1]].push(r[0]);
        }
    }
    for(let r in receive){
        if(receive[r].length >= k){
            for(let i = 0; i < receive[r].length; i++){
                sent[receive[r][i]] ++;
            }
        }
    }
    answer = Object.values(sent);
    return answer;
}