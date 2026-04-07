function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    function toSec(time){
        let min = Number(time.slice(0,2));
        let sec = Number(time.slice(3,5));
        return sec + 60*min;
    }
    pos = toSec(pos);
    op_start = toSec(op_start);
    op_end = toSec(op_end);
    video_len = toSec(video_len);
    for (let command of commands){
        if(pos >= op_start && pos <= op_end){
            pos = op_end;
        }
        if(command === 'next'){
            pos+=10;
            if(pos >video_len){
                pos = video_len;
            }
        }else if(command === 'prev'){
            pos -= 10;
            if(pos < 0){
                pos = 0;
            }
        }
        if(pos >= op_start && pos <= op_end){
            pos = op_end;
        }
    }
    
    answer += String(Math.floor(pos/60)).padStart(2,'0');
    answer += ':';
    answer += String(pos%60).padStart(2,'0');
    return answer;
}