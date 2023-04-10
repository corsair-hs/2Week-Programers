// 숫자 문자열과 영단어 38

/*
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
*/

// function solution(s) {
//     let answer = 0;
//     let StrAnswer = '';

//     StrAnswer = s.replace('0', '0')
//     StrAnswer = StrAnswer.replace('1', '1')
//     StrAnswer = StrAnswer.replace('2', '2')
//     StrAnswer = StrAnswer.replace('3', '3')
//     StrAnswer = StrAnswer.replace('4', '4')
//     StrAnswer = StrAnswer.replace('5', '5')
//     StrAnswer = StrAnswer.replace('6', '6')
//     StrAnswer = StrAnswer.replace('7', '7')
//     StrAnswer = StrAnswer.replace('8', '8')
//     StrAnswer = StrAnswer.replace('9', '9')
//     StrAnswer = StrAnswer.replace('zero', '0')
//     StrAnswer = StrAnswer.replace('one', '1')
//     StrAnswer = StrAnswer.replace('two', '2')
//     StrAnswer = StrAnswer.replace('three', '3')
//     StrAnswer = StrAnswer.replace('four', '4')
//     StrAnswer = StrAnswer.replace('five', '5')
//     StrAnswer = StrAnswer.replace('six', '6')
//     StrAnswer = StrAnswer.replace('seven', '7')
//     StrAnswer = StrAnswer.replace('eight', '8')
//     StrAnswer = StrAnswer.replace('nine', '9')

//     // console.log(StrAnswer);

//     answer = parseInt(StrAnswer);

//     return answer;
// }




function solution2(s) {
    let answer = s;

    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    numbers.map((number,index) => {
        let arr = answer.split(number);
        answer = arr.join(index);
    });

    return Number(answer);
}

console.log(solution2("2three45sixseven"));