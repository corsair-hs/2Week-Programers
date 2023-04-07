/*
가운데 글자 가져오기

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
    let answer = '';
    const arrS = s.split('');
    const Odd = arrS.slice(Math.floor(arrS.length/2),Math.floor(arrS.length/2)+1).join('');
    const Even = arrS.slice(Math.floor(arrS.length/2)-1,Math.floor(arrS.length/2)+1).join('');

    arrS.length%2!==0 ? answer = Odd : answer = Even;

    return answer;
}

console.log(solution('abcde')) // 'c'
console.log(solution('qwer')) // 'we'