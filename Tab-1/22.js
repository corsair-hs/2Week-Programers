/*
자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

N = 123, answer = 6
N = 987, answer = 24
*/

function solution(n) {
    let answer = 0;
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }
    return answer;
}

function solution2(n) {
    var answer = 0;
    let len = String(n).length;

    // 123 % 10 => 3
    // n / 10 => 12

    for (let i = 0; i < len; i++) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}

// 되게 쉬운 문제인줄 알았는데 하나를 간과했네
// 매개변수 n의 type은 Number 인데, Number은 length 길이를 확인할 수 없다.

console.log(solution(123));
console.log(solution(987));


console.time("solution1: ");
console.log(solution3(987));
console.timeEnd("solution1: ");