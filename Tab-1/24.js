/*
정수 내림차순으로 배치하기

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

118372 -> 873211
*/

function solution(n) {
    let answer = 0;
    let answerArr = [];

    n = String(n);

    for (let i = 0; i < n.length; i++) {
        answerArr.push(n[i]);
    }

    answerArr.sort((a, b) => b - a);

    answer = Number(answerArr.join(''));

    return answer;
}

function solution2(n) {
    let answer = 0;

    answer = Number(String(n).split('').sort((a, b) => b - a).join(''));

    return answer;
}

// 118372 -> 873211


const startTime1 = process.hrtime();
solution(118372);
const endTime1 = process.hrtime(startTime1);
console.log(`Function 1 실행 시간: ${endTime1[0]}s ${endTime1[1] / 1000000}ms`);

const startTime2 = process.hrtime();
solution2(118372);
const endTime2 = process.hrtime(startTime2);
console.log(`Function 2 실행 시간: ${endTime2[0]}s ${endTime2[1] / 1000000}ms`);

const startTime3 = process.hrtime();
solution3(118372);
const endTime3 = process.hrtime(startTime3);
console.log(`Function 3 실행 시간: ${endTime3[0]}s ${endTime3[1] / 1000000}ms`);