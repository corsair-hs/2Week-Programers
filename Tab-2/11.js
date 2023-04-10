// 시저암호 39

function solution(s, n) {

    let sList = s.split('') // 매개변수 s를 배열로 전환
    let answer = '';

    const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    sList.forEach(item => {
        if (item === ' ') {
            answer += ' ';
        } else if (item.toLowerCase() === item) {
            const tempWord = lowerAlphabets[((lowerAlphabets.indexOf(item))+n) % lowerAlphabets.length]
            answer += tempWord
        } else if (item.toUpperCase() === item) {
            const tempWord = upperAlphabets[((upperAlphabets.indexOf(item))+n) % upperAlphabets.length]
            answer += tempWord
        }
    })

    // answer = answerList.join('')

    return answer;
}

console.log(solution('a B z', 1));