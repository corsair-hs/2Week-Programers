/*
2016년

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/


// const today = new Date();
// const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
// const todayIndex = today.getDay();
// const todayOfWeek = daysOfWeek[todayIndex];

// console.log("오늘은 " + todayOfWeek + "요일입니다.");

// var now = new Date(); // 현재 시간
// var specificTime = new Date(2023, 3, 7, 12, 30, 0); // 2023년 4월 7일 12시 30분



function solution2(a, b) {
    let answer = '';
    const yoil = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const year = '2016';
    let month = String(a);
    let day = String(b);

    month.length === 1 ? month = '0'+month : month = month;
    day.length === 1 ? day = '0'+day : day = day;

    let date = new Date(`${year}-${month}-${day}`);
    answer = yoil[date.getDay()];
    return answer;
}


// console.log(solution(1, 1));
let answer = null;
const yoil = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let date = new Date(`2016-01-01`);
console.log(date.getDay());

answer = yoil[date.getDay()];
console.log(answer);


// function solution(a, b) {
//     let answer = null;
//     let daySum = 0;

//     switch (a) {
//         case 1:
//             daySum = 0;
//             break;
//         case 2:
//             daySum = 31;
//             break;
//         case 3:
//             daySum = 31+29;
//             break;
//         case 4:
//             daySum = 31+29+31;
//             break;
//         case 5:
//             daySum = 31+29+31+30;
//             break;
//         case 6:
//             daySum = 31+29+31+30+31;
//             break;
//         case 7:
//             daySum = 31+29+31+30+31+30;
//             break;
//         case 8:
//             daySum = 31+29+31+30+31+30+31;
//             break;
//         case 9:
//             daySum = 31+29+31+30+31+30+31+31;
//             break;
//         case 10:
//             daySum = 31+29+31+30+31+30+31+31+30;
//             break;
//         case 11:
//             daySum = 31+29+31+30+31+30+31+31+30+31;
//             break;
//         case 12:
//             daySum = 31+29+31+30+31+30+31+31+30+31+30;
//             break;
//         default:
//             break;
//     }


//     daySum += b;

//     // console.log(daySum);

//     const yoil = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

//     answer = yoil[daySum%7]

//     return answer;
// }


// console.log(solution(5, 24));
// console.log(solution2(5, 24));