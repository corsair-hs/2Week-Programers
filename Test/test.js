function yaksu(num) {
    const divisors = []; // 약수를 저장할 배열
    const sqrt = Math.sqrt(num); // 해당 수의 제곱근 구하기

    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) { // 나머지가 0인 경우
            divisors.push(i);
            if (i !== sqrt) { // 해당 수의 제곱근이 아니면, 몫도 약수이므로 추가
                divisors.push(num / i);
            }
        }
    }
    divisors.sort((a, b) => a - b);
    return divisors;
}
console.log(yaksu(8));