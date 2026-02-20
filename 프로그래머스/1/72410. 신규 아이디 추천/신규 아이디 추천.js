function solution(new_id) {

    let id = new_id.toLowerCase();//1
    id = id.replace(/[^a-z0-9-_.]/g, '');//2
    id = id.replace(/\.{2,}/g,'.');//3
    if(id[0] ==='.'){
        id = id.slice(1);
    }
    if(id[id.length-1] === '.'){
        id = id.slice(0,-1);
    }//4
    if(id === ''){
        id = "a";
    }//5
    if(id.length >=16){
        id = id.slice(0,15);
        if(id[id.length-1]==='.'){
            id = id.slice(0,-1);
        }
    }//6
    if(id.length <=2){
        while(id.length < 3){
            id += id[id.length-1];
        }
    }
    
    return id;
}