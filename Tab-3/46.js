/*
나머지가 1이 되는 수 찾기

자연수 n이 매개변수로 주어짐
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록
solution 함수를 완성하라.
(답이 항상 존재함은 증명될 수 있음) 이게 뭔말이지?

예시)
n = 10 -> result = 3
n = 12 -> result = 11
*/

function solution(n) {
    // 1부터 n까지 반복하면서 나머지가 1이 나오면 바로 반환해서 함수 스탑
    for (let i = 1; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}

console.log(solution(10));
console.log(solution(12));