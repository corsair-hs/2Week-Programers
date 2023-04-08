function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            let pushNum = numbers[i] + numbers[j];
            !answer.includes(pushNum) && answer.push(pushNum);
        }
    }

    
    answer.sort((a, b) => a - b);
    return answer;
}


function solution2(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        let pushNum = i!==numbers.length && numbers[i] + numbers[i+1];
        !answer.includes(pushNum) && answer.push(pushNum);
    }

    
    answer.sort((a, b) => a - b);
    return answer;
}

console.log(solution2([5,0,2,7]));

// 5, 7, 12, 2, 7, 9