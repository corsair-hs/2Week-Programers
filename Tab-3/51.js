function solution(n, arr1, arr2) {
    // 각 배열마다 요소들을 2진수로 변환해주기
    // (단 n보다 2진수 자릿수가 짧을 경우 앞쪽에 0 채우기)
    let arr1binary = arr1.map(item => item.toString(2).padStart(n, '0'));
    let arr2binary = arr2.map(item => item.toString(2).padStart(n, '0'));
    let answer = [];
ㅌ
    for (let i = 0; i < arr1binary.length; i++) {
        let arr3binaryNum = '';
        for (let j = 0; j < arr1binary[i].length; j++) {
            let arr1binaryNum = parseInt(arr1binary[i][j]);
            let arr2binaryNum = parseInt(arr2binary[i][j]);
            if (arr1binaryNum === 0 && arr2binaryNum === 0) {
                arr3binaryNum += ' ';
            } else if (arr1binaryNum === 1 && arr2binaryNum === 1) {
                arr3binaryNum += '#';
            } else {
                arr3binaryNum += '#';
            }
            // console.log(arr1binaryNum, ' ', arr2binaryNum, '=', arr3binaryNum);
        }
        answer.push(arr3binaryNum);
    };

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));