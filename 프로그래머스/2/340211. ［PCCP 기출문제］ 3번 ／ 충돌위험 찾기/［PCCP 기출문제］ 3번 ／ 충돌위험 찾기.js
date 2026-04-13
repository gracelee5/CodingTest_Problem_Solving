function solution(points, routes) {
    var answer = 0;
    const timeMap = new Map();
    
    for(let robot = 0; robot < routes.length; robot++){
        const route = routes[robot];
        let time = 0;
    
        let [r,c] = points[route[0] - 1];
        const mark = (r,c,t)=>{
            const key = `${t},${r},${c}`;
            timeMap.set(key, (timeMap.get(key)||0)+1);
        };

        mark(r,c,time);
        
        for (let i = 1; i < route.length; i++){
            const [nr, nc] = points[route[i] - 1];
            
            while (r!==nr){
                r += r < nr ? 1:-1;
                time++;
                mark(r,c,time);
            }
            while (c!==nc){
                c += c < nc ? 1:-1;
                time++;
                mark(r,c,time);
            }
        }
    }
    let count = 0;
    for (const v of timeMap.values()){
        if(v>=2) count++;
    }
    return count;
}