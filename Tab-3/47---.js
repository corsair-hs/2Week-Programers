/*
소수 찾기

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수 만드시오.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아님)
*/

// 10 -> 2, 3, 5, 7

// 시간복잡도에서 실패

function yaksu(num) {
    // const divisors = []; // 약수를 저장할 배열
    let count = 0;
    const sqrt = Math.sqrt(num); // 해당 수의 제곱근 구하기

    for (let i = 1; i <= sqrt; i++) {
        if (num % i === 0) { // 나머지가 0인 경우
            count++;
            if (i !== sqrt) { // 해당 수의 제곱근이 아니면, 몫도 약수이므로 추가
                count++;
            }
        }
    }
    return count === 2;
}

console.log(yaksu(7));


function solution(n) {
    var answer = 0;

    for (let i = 2; i <= n; i++) {
        yaksu(i) && answer++;
    }

    return answer;
}

// console.log(solution(10));


function solution(n) {
    let primes = new Array(n + 1).fill(true); // 0부터 n까지의 모든 수를 소수로 가정

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) { // 소수인 경우
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false; // i의 배수는 소수가 아니므로 false로 변경
            }
        }
    }

    return primes.slice(2).filter((prime) => prime).length; // 0, 1 제외하고 소수인 수들의 개수 반환
}

/*
위의 코드에서는 1부터 n까지 모든 수에 대해 소수인지 판별하는 방식으로 동작합니다. 이러한 방식은 n이 커질수록 연산량이 많아져서 비효율적입니다.

따라서 에라토스테네스의 체 알고리즘을 사용하여, n까지의 모든 소수를 찾는 방법을 추천합니다. 이를 사용하면 시간복잡도 O(nlog(logn))으로 연산을 수행할 수 있습니다.

아래는 에라토스테네스의 체 알고리즘을 사용하여 소수를 찾는 코드 예시입니다.

위 코드에서는 solution 함수를 정의하여, 2부터 n까지 모든 수를 소수로 가정한 후, 에라토스테네스의 체 알고리즘을 사용하여 소수를 찾았습니다. 소수인 경우 해당 수의 배수들은 소수가 아니므로 false로 변경합니다. 마지막으로 0과 1을 제외하고, 소수인 수들의 개수를 반환합니다.

예를 들어, 위 코드에서 solution(7)을 호출하면, 4가 반환됩니다.
*/