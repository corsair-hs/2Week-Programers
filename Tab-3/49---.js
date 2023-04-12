/*
n	lost	reserve	    return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	        4
3	[3]	    [1]	        2
*/


function solution(n, lost, reserve) {
    let answer = 0;
    let _lost = [...lost].sort((a, b) => a - b);
    let _reserve = [...reserve].sort((a, b) => a - b);;

    for (let i = 0; i < lost.length; i++) {
        if (_reserve.includes(lost[i])) {       // 여분을 챙겨온 본인꺼 분실에 대한 것
            _reserve.splice(_reserve.indexOf(lost[i]), 1);
            _lost.splice(_lost.indexOf(lost[i]), 1);
        } else if (_reserve.includes(lost[i]-1)){
          _reserve.splice(_reserve.indexOf(lost[i-1]), 1);
          _lost.splice(_lost.indexOf(lost[i]), 1);
        } else if (_reserve.includes(lost[i]+1)){
          _reserve.splice(_reserve.indexOf(lost[i]+1), 1);
          _lost.splice(_lost.indexOf(lost[i]), 1);
        }
    }

    answer = n - _lost.length;

    return answer;
}


// function solution(n, lost, reserve) {

//     // 배열 정렬

//     // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우 처리
//     const realLost = lost.filter((num) => !reserve.includes(num));
//     const realReserve = reserve.filter((num) => !lost.includes(num));
  
//     // 체육복을 빌려줄 수 있는 학생의 수를 세는 변수입니다.
//     let answer = n - realLost.length;
  
//     // 여벌의 체육복을 가진 학생이 체육복을 빌려줄 수 있는지 판별하고 체육복을 빌려주는 과정입니다.
//     realReserve.forEach((num) => {
//       const idx = realLost.indexOf(num - 1);
//       if (idx !== -1) {
//         realLost.splice(idx, 1);
//         answer++;
//         return;
//       }
//       if (realLost.includes(num + 1)) {
//         realLost.splice(realLost.indexOf(num + 1), 1);
//         answer++;
//       }
//     });
//     return answer;
//   }
  

console.log(solution(5, [2, 4, 8], [1, 3, 5, 9]));
// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1, 3]));