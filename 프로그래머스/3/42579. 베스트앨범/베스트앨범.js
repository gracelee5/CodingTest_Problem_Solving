function solution(genres, plays) {
    var answer = [];
    const data = new Map();
    for (let i = 0; i < genres.length; i++){
        if(!data.has(genres[i])){
            data.set(genres[i], {
                total : 0,
                songs : {}
            });
        }
        data.get(genres[i]).songs[i] = plays[i];
        data.get(genres[i]).total += plays[i];
    }
    
    const sortedGenres = [...data.entries()].sort((a,b) => b[1].total - a[1].total);
    
    for (let [genre, info] of sortedGenres){
        const sortedSongs = Object.entries(info.songs).sort((a,b) => {
            if (b[1] === a[1]) return a[0] - b[0];
            return b[1] -a[1];
        });
        
        for (let i = 0; i < Math.min(2,sortedSongs.length); i++){
            answer.push(Number(sortedSongs[i][0]));
        }
    }
    
    return answer;
}
