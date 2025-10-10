function solution(fees, records) {
    var answer = [];
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const inTime = {};
    const totalTime = {};
    
    function toMin(t) {
        const [h, m] = t.split(":").map(Number);
        return h*60 + m;
    }
    
    for (record of records){
        [time, car, status] = record.split(" ");
        const minute = toMin(time);
        if (status === "IN"){
            inTime[car] = minute;
        }else{
            const diff = minute - inTime[car];
            totalTime[car] = (totalTime[car] || 0) + diff;
            delete inTime[car];
        }
    }
    
    for (let car in inTime){
        const diff = toMin("23:59") - inTime[car];
        totalTime[car] = (totalTime[car]||0) + diff;
    }
    
    for (let car of Object.keys(totalTime).sort()) {
        const time = totalTime[car];
        let fee = baseFee;
        if (time > baseTime){
            fee += Math.ceil((time - baseTime)/unitTime)*unitFee;
        }
        answer.push(fee);
    }
    return answer;
}