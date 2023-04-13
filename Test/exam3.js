// function solution(N, arr1) {
//     const dx = [1, -1, 0, 0, 1, 1, -1, -1];
//     const dy = [0, 0, 1, -1, 1, -1, 1, -1];
    
  
//     const answer = [];
//     for (let i = 0; i < N; i++) {
//       const row = [];
//       for (let j = 0; j < N; j++) {
//         if (arr1[i][j] === '.') {
//           row.push(0);
//         } else {
//           let count = 0;
//           for (let k = 0; k < 8; k++) {
//             const ni = i + dx[k];
//             const nj = j + dy[k];
//             if (ni >= 0 && ni < N && nj >= 0 && nj < N && arr1[ni][nj] === '*') {
//               count++;
//             }
//           }
//           row.push(count >= 10 ? 'M' : count);
//         }
//       }
//       answer.push(row);
//     }
  
//     return answer;
//   }
  
//   const N = 4;
//   const arr1 = [['2', '.', '.', '.',], ['.', '.', '9', '.'], ['.', '3', '.', '2'], ['.', '4', '.', '.']];
 
  
//   console.log(solution(N, arr1));
  




//   function solution(N, arr1) {
//     let x = [1, -1, 0, 0, 1, 1, -1, -1];
//     let y = [0, 0, 1, -1, 1, -1, 1, -1];
//     let answer = [];

//     for (let i = 0; i < N; i++) {
//         let row = [];
//         for (let j = 0; j < N; j++) {
//             if (arr1[i][j] === '*') {
//                 row.push('*');
//             } else {
//                 let count = 0;
//                 for (let k = 0; k < 8; k++) {
//                     let nx = i + x[k];
//                     let ny = j + y[k];
//                     if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
//                     if (arr1[nx][ny] === '*') count++;
//                 }
//                 if (count === 0) {
//                     row.push('0');
//                 } else if (count >= 10) {
//                     row.push('M');
//                 } else {
//                     row.push(count);
//                 }
//             }
//         }
//         answer.push(row);
//     }

//     return answer;
// }

// // 예시
// let N = 4;
// let chars = [['2', '.', '.', '.'], ['.', '.', '9', '.'], ['.', '3', '.', '2'], ['.', '4', '.', '.']];
// console.log(solution(N, chars)); // [[ '*', 'M', 9, 9 ], [ 5, 'M', '*', 'M' ], [ 7, '*', 'M', '*' ], [ 7, '*', 9, 2 ]]
