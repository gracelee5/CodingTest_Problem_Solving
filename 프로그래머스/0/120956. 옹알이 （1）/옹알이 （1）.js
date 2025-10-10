function solution(babbling) {

var can = ["aya", "ye", "woo", "ma"];
var word = "";
var answer = 0;

for(var i = 0; i<babbling.length; i++) {
    word = babbling[i].toString();
    for(var j = 0; j < can.length; j++) {
        word = word.replace(can[j], ' ');    
    }
   if( word.trim().length == 0) {answer++;}
}
return answer;
}