// 포멧몬

/*
nums	        result
[3,1,2,3]	    2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2
*/

function solution(nums) {
    var answer = 0;

    // 가져갈 수 있는 포켓몬 수 구하기
    let myMonCnt = nums.length/2;

    // 배열에 있는 포켓몬 종류의 수 구하기
    // (new Set() 속성을 통해 중복값 제거 후 []배열로 묶음)
    let arrMonCnt = [...new Set(nums)].length;
    
    // 두 수 비교하여 작은 수 answer에 값 할당
    (myMonCnt < arrMonCnt) ? (answer = myMonCnt) : (answer = arrMonCnt);

    // 반환
    return answer;
}

console.log(solution([3,1,2,3]));