function solution(s, n) {
    var answer = '';
    for( let a of s){
        var ascii = a.charCodeAt();
        if(ascii < 91 && ascii > 64){//알파벳이 대문자
            if(ascii + n > 90){
                ascii = ascii + n + 64 - 90;
                answer += String.fromCharCode(ascii);
            }else {
                ascii = ascii + n;
                answer += String.fromCharCode(ascii);
            }
        }else if (ascii >= 97 && ascii < 123){
            if(ascii + n > 122){
                ascii = ascii + n + 96 - 122;
                answer += String.fromCharCode(ascii);
            }else {
                ascii = ascii + n;
                answer += String.fromCharCode(ascii);
            }
        }else if (ascii === 32){
            answer += ' ';
        }
        
    }
    
    return answer;
}