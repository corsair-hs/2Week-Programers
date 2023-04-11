// 약수 구하는 함수
function solution(num) {
    let answer = 0;
    const sqrt = Math.sqrt(num); // 해당 수의 제곱근 구하기

    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) { // 나머지가 0인 경우
            answer += i
            if (i !== sqrt) { // 해당 수의 제곱근이 아니면, 몫도 약수이므로 추가
                answer += (num / i);
            }
        }
    }
    return answer;
}

console.log(solution(12));
console.log(solution(5));