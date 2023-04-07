/*
짝수와 홀수

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수를 완성하시오.
*/

function solution(num) {
    let answer = '';

    num%2===0 ? answer='Even' : answer='Odd';

    return answer;
}


console.log(solution(3))    // Odd
console.log(solution(4))    // Even