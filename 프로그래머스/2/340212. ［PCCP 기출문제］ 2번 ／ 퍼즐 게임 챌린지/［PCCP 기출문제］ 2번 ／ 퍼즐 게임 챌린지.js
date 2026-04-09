function solution(diffs, times, limit) {
    // 특정 레벨 level로 모든 퍼즐을 풀 때 걸리는 총 시간 계산
    function calcTime(level) {
        let total = 0;
        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const time = times[i];
            const timePrev = i > 0 ? times[i - 1] : 0;

            if (diff <= level) {
                // 실력으로 바로 풀 수 있는 경우
                total += time;
            } else {
                // 실력 부족 → 틀리는 횟수만큼 앞뒤 시간 반복
                const gap = diff - level;
                total += gap * (time + timePrev) + time;
            }

            if (total > limit) return total; // 조기 종료 (최적화)
        }
        return total;
    }

    // 이분 탐색
    let lo = 1, hi = 100000;

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);

        if (calcTime(mid) <= limit) {
            hi = mid; // 더 낮은 레벨도 가능한지 확인
        } else {
            lo = mid + 1; // 레벨을 높여야 함
        }
    }

    return lo;
}