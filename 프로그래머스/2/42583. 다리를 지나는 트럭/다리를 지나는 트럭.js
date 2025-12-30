function solution(bridge_length, weight, truck_weights) {
    var time = 0;
    //다리에 올라간 트럭
    let bridge = new Array(bridge_length).fill(0);
    
    while (bridge.length){
        bridge.shift();
        time++;
        if(truck_weights.length){
            var sum = bridge.reduce((a, b) => (a+b));
            if(sum+truck_weights[0] <= weight){
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0);
            }
        }    
    }
    return time;
}