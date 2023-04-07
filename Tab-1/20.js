/*
완주하지 못한 선수

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

// function solution(participant, completion) {

//     completion.map((item) => {
//         participant.indexOf(item) > -1 ? participant.splice(participant.indexOf(item), 1) : '';
//     })

//     return participant.join();
// }

// 정확성 테스트는 통과했지만, 시간초과로 인해 효율성 테스트는 실패


function solution(participant, completion) {
    const hash = {};

    // participant 배열의 원소들의 출현 횟수를 세어놓는다.
    participant.forEach((p) => {
        if (hash[p]) {
            hash[p]++;
        } else {
            hash[p] = 1;
        }
    });

    // completion 배열의 원소들의 출현 횟수를 하나씩 줄여나간다.
    completion.forEach((c) => {
        hash[c]--;
    });

    // 출현 횟수가 0이 아닌 원소들로 이루어진 배열을 만든다.
    const result = [];
    for (let p in hash) {
        if (hash[p] !== 0) {
            result.push(p);
        }
    }

    return result.join();
}

// 이해를 못하였다... 나중에 다시 봐보자.

console.log(solution(['a', 'b', 'c', 'd', 'e'], ['a', 'c', 'd', 'e']))