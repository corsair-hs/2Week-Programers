/*
최대공약수와 최소공배수

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

n	m	return
3	12	[3, 4]
2	5	[1, 10]
*/


function solution(left, right) {

    // left, right 공약수 구하기
    const leftArr = yaksu(left);
    const rightArr = yaksu(right);

    // 최대공약수 구하기
    const _bigCommonMeasure = (leftArr.length >= rightArr.length) ? bigCommonMeasure(rightArr, leftArr) : bigCommonMeasure(leftArr, rightArr);

    // 최소공배수 구하기 (두 수의 합 / 최소공약수)
    const _smallCommonMultiple = (left*right) / _bigCommonMeasure;

    return [_bigCommonMeasure,_smallCommonMultiple];
}


// 약수 구하는 함수
function yaksu(num) {
    const result = []; // 약수를 저장할 배열
    const sqrt = Math.sqrt(num); // 해당 수의 제곱근 구하기

    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) { // 나머지가 0인 경우
            result.push(i);
            if (i !== sqrt) { // 해당 수의 제곱근이 아니면, 몫도 약수이므로 추가
                result.push(num / i);
            }
        }
    }
    result.sort((a, b) => a - b);
    return result;
}


// 최대공약수 구하는 함수
// 약수 배열의 길이가 긴 애로 역순으로 순회하면서 약수 배열의 길이가 짧은 애에 있으면 그 놈
function bigCommonMeasure(shortArr, longArr) {
    let result = 0;
    for (let i = longArr.length-1; i >= 0; i--){
        if (shortArr.includes(longArr[i])) {
            result = longArr[i]
            break;
        }
    }
    return result;
}






console.log(solution(2, 5))