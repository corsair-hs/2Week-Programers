/*
같은 숫자는 싫어

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

arr	                answer
[1,1,3,3,0,1,1]	    [1,3,0,1]
[4,4,4,3,3]	        [4,3]

*/

function solution(arr) {
    let answer = [];
    
    // 1. arr 순회하면서 index가 0이면 answer.push하고
    // 1 부터는 바로 앞에 index값와 비교해서 같으면 패스
    // 다르면 answer.push

    for (let i = 0; i < arr.length; i++) {
        if (i===0) {
            answer.push(arr[i]);
        } else {
            arr[i] !== arr[i-1] && answer.push(arr[i]); 
        }
    }

    return answer;
}

function solution2(arr) {   // 이겸재
    let answer = [];
  
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
    }

    return answer;
}

function solution3(arr) {
    return arr.filter((ele, i, array) => ele !== array[i - 1]);
  }

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4,4,4,3,3]));