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


// function solution(participant, completion) {
//     const hash = {};

//     // participant 배열의 원소들의 출현 횟수를 세어놓는다.
//     participant.forEach((p) => {
//         if (hash[p]) {
//             hash[p]++;
//         } else {
//             hash[p] = 1;
//         }
//     });
//     console.log

//     // completion 배열의 원소들의 출현 횟수를 하나씩 줄여나간다.
//     completion.forEach((c) => {
//         hash[c]--;
//     });

//     // 출현 횟수가 0이 아닌 원소들로 이루어진 배열을 만든다.
//     const result = [];
//     for (let p in hash) {
//         if (hash[p] !== 0) {
//             result.push(p);
//         }
//     }

//     return result.join();
// }

// // 이해를 못하였다... 나중에 다시 봐보자.

// console.log(solution(['a', 'b', 'c', 'd', 'e'], ['a', 'c', 'd', 'e']))



// let object = {
//     김현수 : 1,
//     이겸재 : 1,
//     김용식 : 1
// }

// object.김현수 += 1; // 김현수 키값에 1 추가

// console.log(object);

// object = {이승완 : 1}

// console.log(object.김현수) // 1 값이 튀어나옴

// console.log(object.김현수 === undefined) // 값이 없냐?



// 1. participant 순회하면서 객체에 담기
//  - 객체 안에 이름이 있는지 체크
//    - 있다면 그 키의 값에 1을 더하기
//    - 없다면 키값과 1을 추가

let participant = ['김현수', '이겸재', '김용식', '김현수'];
let completion = ['이겸재', '김용식'];
let object = {};

participant.forEach((item) => {
    if (object[item] === undefined) {  // 키가 존재하지 않으면
        object[item] = 1;               // 키를 추가하고 값으로 1을 할당
      } else {                       // 키가 존재하면
        object[item] += 1;              // 해당 키의 값을 1 증가
      }
})

console.log(object);