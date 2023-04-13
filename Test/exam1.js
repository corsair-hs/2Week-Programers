// 1번 문제) 잔돈을 구해보자! (1점)

function solution(num) {

    // 동전들을 arrCoin 배열로 할당 : 큰 금액부터 비교할 것이므로 내림차순으로 할당
    const arrCoin = [500, 100, 50, 10];

    // 지불한 금액 1000원으로 고정 : payment 에 할당
    const payment = 1000;

    // 거스름돈 change 에 할당 : payment에서 입력받은 상품금액 차감
    let change = payment - num;

    // 거스름돈 샐 변수
    let answer = 0;

    // 동전 배열 0부터 순회하면서
    for (let i = 0; i < arrCoin.length; i++) {
        // 배열의 현재 요소값을 coin 변수에 할당
        let coin = arrCoin[i];
        // 거스름돈이 현재 동전보다 크거나 같을 때 까지 반복 순회,
        // 한번 순회할 때마다 거스름돈에서 현재 코인 차감하고, answer 에 1씩 더함
        for (; change >= coin; answer++) {
            change -= coin;
        }
    }

    return answer;
}

let num1 = 160;
console.log(solution(num1))


// console.log(solution(900));
// console.log(solution(550));
// console.log(solution(320));
// console.log(solution(160));