/*
문자열 다루기 기본

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.


*/


// function solution(s) {
//     var answer = null;

//     answer = (Number(s) !== NaN)

//     return answer;
// }

// 위와 같이 NaN인지 아닌지 확인하려 했지만 NaN은 저런식으로 비교가 불가능
// 예를 들어 let a = NaN 을 해놓고 console.log(a === NaN) 을 해보면 false 뜸.
// NaN은 isNaN() 메서드를 통해 비교해야하고,
// isNaN() 함수는 내부적으로 입력값을 숫자로변환하므로, 인수로 전달된 값이 문자열이나 객체일 경우 예기치 않은 겨로가를 가져올 수 있으니 Number.isNaN()을 추천함

// function solution(s) {
//     let answer = null;

//     if (s.length === 4 || s.length === 6) {
//         let b = [];

//         for (let i = 0; i < s.length; i++) {
//             b.push(isNaN(Number(s[i])));
//         }

//         answer = !b.includes(true)

//         return answer;
//     } else {
//         answer = false;
//         return answer;
//     }
// }

// 숫자인지 아닌지 확인하는 부분을 다르게 풀어보면 아래와 같다.

// for (let i = 0; i < s.length; i++) {
//     if (isNaN(parseInt(s[i]))) { // 하나라도 숫자가 아니면 false
//         return false;
//     }
// }

// git terminal commit & push test


function solution(s) {
    let answer = null;

    if ()

    return answer;
}