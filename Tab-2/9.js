// 소수 만들기 37

function isSosu(number) {
    if (number < 2) return false; // 0, 1은 소수가 아님
    for (let i = 2; i <= Math.sqrt(number); i++) { // 2부터 제곱근까지 반복
        if (number % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 나누어 떨어지지 않으면 소수임
}

function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isSosu(sum)) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]));