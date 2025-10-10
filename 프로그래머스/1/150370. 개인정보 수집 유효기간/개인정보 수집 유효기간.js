function solution(today, terms, privacies) {
    var answer = [];
                                          
    function toDays(date) {
        const [y,m,d] = date.split(".").map(Number);
        return y*12*28 + m*28 + d;
    }
    //terms 정보 객체로 만들어서 저장
    const termMap = {};
    for (term of terms){
        const [type, period] = term.split(" ");
        termMap[type] = Number(period);
    }
    
    const todayDays = toDays(today);
    
    let idx = 1;
    for (privacy of privacies){
        [pDate, pKind] = privacy.split(" ");
        const collectDays = toDays(pDate);
        const expireDays = collectDays + termMap[pKind]*28;
        if (todayDays >= expireDays){
            answer.push(idx);
        }
        idx++;
    }
    return answer;
}