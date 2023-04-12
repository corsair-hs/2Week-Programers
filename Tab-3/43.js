/*
예산

d	            budget	    result
[1,3,2,5,4]	    9	        3
[2,2,3,3]	    10	        4

*/

// function solution(d, budget) {
//     let answer = 0;

//     d.sort((a, b) => a - b)

//     let dSum = 0;

//     for (let i = 0; i < d.length; i++) {
//         dSum += d[i];
//         if (dSum === budget) {
//             answer = i + 1;
//             break;
//         } else if (dSum > budget) {
//             answer = i;
//             break;
//         }
//     }
//     return answer;
// }

// --------------------- 몇 개의 케이스에서 실패
// 배열의 합이 budget보다 작을 경우 값을 뽑아오질 못하네. 조금이따가 다시 체크

function solution(d, budget) {

    // 부서별 신청 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);

    // 지원할 수 있는 부서의 수
    let answer = 0;  

    for (let i = 0; i < d.length; i++) {
      if (budget >= d[i]) {  // 예산 내에서 지원 가능한 경우
        budget -= d[i];      // 예산에서 해당 부서의 신청 금액을 차감
        answer++;             // 지원할 수 있는 부서 수 증가
      } else {
        break;               // 예산 내에서 지원 불가능한 경우
      }
    }
    
    return answer;
  }


console.log(solution([2,2,3,3], 9));