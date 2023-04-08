/*
최소직사각형

명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	        60	        50
2	        30	        70
3	        60	        30
4	        80	        40

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

sizes	result
[[60, 50], [30, 70], [60, 30], [80, 40]] -> 4000
[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]] -> 120
[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]] -> 133
*/

// 1. sizes 배열 내 배열의 0인덱스값을 큰 값으로 정렬
// 2. 배열의 첫번째에서 가장 큰 값, 두번째에서 가장 큰 값 구해
// 3. 그둘을 곱한 값

function solution(sizes) {
    var answer = 0;

    // 1. sizes 배열 내 배열의 0인덱스값을 큰 값으로 정렬
    sizes.forEach((arrValue)=>{
        arrValue[0] < arrValue[1]? arrValue.reverse() : arrValue;
    })
    // console.log(sizes);

    // 2. sizes 배열 내 배열의 0인덱스값과 1인덱스값들의 배열 생성
    let sizes0Arr = sizes.map((arrValue)=>arrValue[0])
    let sizes1Arr = sizes.map((arrValue)=>arrValue[1])
    // console.log(sizes0Arr, sizes1Arr)
    
    // 3. 각 배열들의 최대값 구해서 각 변수에 할당
    let sizes0ArrMax = Math.max(...sizes0Arr);
    let sizes1ArrMax = Math.max(...sizes1Arr);

    // 4. 두 변수 곱한 값 return 또는 answer에 할당
    answer = sizes0ArrMax * sizes1ArrMax;

    return answer;
}

function solution2(sizes) {
    let answer = 0;
    let _sizes = [...sizes];
    let maxVal0 = null;
    let maxVal1 = null;
    for (let i = 0; i < _sizes.length; i++) {
      _sizes[i].sort((a, b) => b - a);
      maxVal0 = maxVal0 < _sizes[i][0] ? _sizes[i][0] : maxVal0;
      maxVal1 = maxVal1 < _sizes[i][1] ? _sizes[i][1] : maxVal1;
    }
  
    return maxVal0 * maxVal1;
  }

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));