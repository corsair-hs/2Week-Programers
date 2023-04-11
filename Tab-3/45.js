/*
K번째 수


*/



// const i = 2;
// const j = 5;
// const k = 3;
// const array = [1, 5, 2, 6, 3, 7, 4];
// const result = (array.slice(i-1, j)).sort((a, b) => a - b)[k-1];
// console.log(result);

function solution(array, commands) {
    var answer = [];
    
    let i = 0;
    let j = 0;
    let k = 0;

    for (let element of commands) {
        i = element[0];
        j = element[1];
        k = element[2];
        // i번째부터 j번째까지 자르기 -> 오름차순 정렬 -> k번째 있는 수
        answer.push((array.slice(i-1, j)).sort((a, b) => a - b)[k-1]);
    }
    
    return answer;
}