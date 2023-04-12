function solution(n, arr1, arr2) {
    
    // 각 배열마다 요소들을 2진수로 변환하여 새 배열로 담기
    // 단, n보다 2진수 자릿수가 짧을 경우 앞쪽에 0 채우기
    let arr1binary = arr1.map(item => item.toString(2).padStart(n, '0'));
    let arr2binary = arr2.map(item => item.toString(2).padStart(n, '0'));

    // 결과 담을 배열 생성
    let answer = [];

    // 0부터 배열 길이만큼 순회
    for (let i = 0; i < arr1binary.length; i++) {

        let arr3binaryNum = '';

        // 배열 내 문자열 길이만큼 순회
        for (let j = 0; j < arr1binary[i].length; j++) {

            // 한글자 한글자 가져오기
            let arr1binaryNum = parseInt(arr1binary[i][j]);
            let arr2binaryNum = parseInt(arr2binary[i][j]);

            // 한글자 한글자 비교하기
            if (arr1binaryNum === 0 && arr2binaryNum === 0) {         // 둘 다 0일 경우
                arr3binaryNum += ' ';                                 // (빈칸) 넣기
            } else if (arr1binaryNum === 1 && arr2binaryNum === 1) {  // 둘 다 1일 경우
                arr3binaryNum += '#';                                 // # 넣기
            } else {                                                  // 다를 경우
                arr3binaryNum += '#';                                 // # 넣기
            }
            
        }
        answer.push(arr3binaryNum);
    };

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));