/*
예산

d	            budget	    result
[1,3,2,5,4]	    9	        3
[2,2,3,3]	    10	        4

*/

function solution(d, budget) {
    let answer = 0;

    d.sort((a, b) => a - b)

    let dSum = 0;

    for (let i = 0; i < d.length; i++) {
        dSum += d[i];
        if (dSum === budget) {
            answer = i + 1;
            break;
        } else if (dSum > budget) {
            answer = i;
            break;
        }
    }
    return answer;
}

// --------------------- 몇 개의 케이스에서 실패
// 배열의 합이 budget보다 작을 경우 값을 뽑아오질 못하네. 조금이따가 다시 체크


console.log(solution([2,2,3,3], 9));