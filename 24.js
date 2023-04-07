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

// 118372 -> 873211

console.log(solution(118372));