/*
문자열 내 p와 y의 개수

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.


*/


// function solution(s) {
//     var answer = true;

//     let pSum = null;
//     let ySum = null;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'p' || s[i] === 'P') { pSum++ }
//         else if (s[i] === 'y' || s[i] === 'Y') { ySum++ }
//     }

//     pSum === ySum ? answer = true : answer = false;

//     return answer;
// }


// split과 filter를 활용한 방법
// function solution(s) {
//     const pSum = s.split('').filter(c => c === 'p' || c === 'P').length;
//     const ySum = s.split('').filter(c => c === 'y' || c === 'Y').length;
//     return pSum === ySum;
// }

// match를 활용한 방법
function solution(s) {
    const pSum = (s.match(/p|P/g) || []).length;
    const ySum = (s.match(/y|Y/g) || []).length;
    return pSum === ySum;
}


console.log(solution('pPoooyY'));