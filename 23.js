/*
자연수 뒤집어 배열로 만들기

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

12345 -> [5,4,3,2,1]
*/

function solution(n) {
    var answer = [];

    n = String(n);

    for (let i = n.length - 1; i >= 0; i--) {
        answer.push(Number(n[i]));
    }

    return answer;
}

console.log(solution(12345));