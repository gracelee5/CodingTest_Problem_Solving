function solution(babbling) {
    var answer = 0;
    var sets = ["aya","ye","woo","ma"];
    for(let b of babbling){
        let prev = "";
        let ok = true;
        
        while (b.length > 0){
            let found = false;
            
            for (let s of sets){
                if(b.startsWith(s) && prev !== s){
                    b = b.slice(s.length);
                    prev = s;
                    found = true;
                    break;
                }
            }
            if(!found){
                ok = false;
                break;
            }
        }
        if(ok) answer++;
    }

    
    return answer;
}