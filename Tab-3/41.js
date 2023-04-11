/*
약수의 개수와 덧셈

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

left	right	result
13	17	43
24	27	52
*/


function solution(left, right) {
    var answer = 0;
    // left수부터 right수까지 반복
    for (let i = left; i <= right; i++) {
        // 약수의 갯수가 짝수이면 answer +=, 홀수이면 answer -=
        yaksu(i) % 2 === 0 ? answer += i : answer -= i;
    }
    // answer값 반환
    return answer;
}


// 약수 구하는 함수
function yaksu(num) {
    let count = 0; // 약수를 저장할 배열
    const sqrt = Math.sqrt(num); // 해당 수의 제곱근 구하기

    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) { // 나머지가 0인 경우
            count++;
            if (i !== sqrt) { // 해당 수의 제곱근이 아니면, 몫도 약수이므로 추가
                count++;
            }
        }
    }
    return count;
}


console.log(solution(13, 17));
console.log(solution(24, 27));