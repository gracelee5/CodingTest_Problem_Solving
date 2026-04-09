function solution(bandage, health, attacks) {
    let lastTime = attacks[attacks.length-1][0];
    let hp = health;
    
    let [sec, success, bonus] = bandage;
    let continueTime = 0;
    let attackIdx = 0;
    
    for(let i = 1; i <= lastTime; i++){
        
        if(attackIdx < attacks.length && attacks[attackIdx][0] === i){
            hp -= attacks[attackIdx][1];
            attackIdx ++;
            continueTime = 0;
            if(hp <= 0 ) return -1;
        }else{
            continueTime ++;
            hp += success;
            
            if(continueTime === sec){
                hp += bonus;
                continueTime = 0;
            }
            if(hp>health){
                hp = health;
            }
        }
    }
    return hp;
}