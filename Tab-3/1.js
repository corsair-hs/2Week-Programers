/*
약수의 개수와 덧셈

두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

left	right	result
13	17	43
24	27	52
*/

function solution(left, right) {
    var answer = 0;
    return answer;
}

let number = 16    // 1, 16 / 2, 4
let numberArray = [];

for (let i = 1; i <= number/2; i++) {
    number%i===0 && numberArray.push(i) && console.log(i)
    number%i===0 && !numberArray.includes(number/i) && numberArray.splice(numberArray.length-2, 0, number/i) && console.log(number/i)
    
}

console.log(numberArray);