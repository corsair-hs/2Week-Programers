/*
3진법 뒤집기

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

45 -> 7
125 -> 229

1. n을 3진법으로 변경 -> n3 변수에 할당
2. n3를 뒤집기
3. 뒤집은 n3를 10진수로 변경
*/

function solution(n) {
    let answer = 0;
    let n3arr = n.toString(3).split('');
    // console.log(n3);
    let n3Reverse = n3arr.reverse().join('');
    // console.log(n3Reverse);
    answer = parseInt(n3Reverse, 3);
    return answer;
}

console.log(solution(45)); // 출력: 7
console.log(solution(125)); // 출력: 229