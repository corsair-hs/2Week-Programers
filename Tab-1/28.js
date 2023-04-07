/*
하샤드 수

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

arr	return
10	true
12	true
11	false
13	false
*/

// 1. 모든 자릿수 합계 구하기
// 2. 입력받은 수 % 모든자릿수 합계 === 0 ? true : false

function solution(x) {
    let answer = true;
    // let _x = null;
    let xSum = 0;

    x = String(x);

    for (let i = 0; i < x.length; i++) {
        xSum += Number(x[i]);
    }

    answer = x % xSum === 0;


    return answer;
}

console.log(solution(11));