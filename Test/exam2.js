// 2번 문제) O/X 덧셈 (2점)

function solution(str){

    // 현재 연속된 O의 개수를 셀 count 변수 선언 및 0값 초기화
	let count = 0;

    // X를 만나기 전까지 연속된 O의 개수를 센 값을 넣어둘 answer 변수 선언 및 0값 초기화
	let answer = 0;

    // str배열 순회
	for (let i = 0; i < str.length; i++) {

		if (str[i] === 'O') {   // O를 만나면, count에 1을 더함, answer에 count값 누산
			count++;
			answer += count;
		} else {                // O을 제외한 나머지 X를 만나면 count를 0으로 초기화
			count = 0;
		}
	}
	return answer;
}

// let str="OOXXOXXOOO";    // 10
// let str="OXOXOXOXOXOXOX";    // 7
// let str="OOOOOOOOOO";    // 55
// let str="OXOOOXXXOXOOXOOOOOXO";  // 27

console.log(solution(str))