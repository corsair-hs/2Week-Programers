// 문자열 정렬하기 35

function solution(strings, n) {
    var answer = [];

    // strings 요소들의 첫글자 추가하여 strings2nd 배열에  재배열
    const strings2nd = strings.map(item => item[n]+item)

    // strings2nd 배열을 오름차순으로 정렬
    strings2nd.sort((a, b) => a - b);

    // strings2nd 배열 요소들의 첫글자 빼고 answer 배열에 재배열
    answer = strings2nd.map(str => str.substring(1));

    return answer;
}

console.log(solution(["sun", "bed", "car"], 1))