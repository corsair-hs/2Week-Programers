/*
로또의 최고 순위와 최저 순위

6 -> 1
5 -> 2
4 -> 3
3 -> 4
2 -> 5
1 -> 6
0 -> 6

*/


function solution(lottos, win_nums) {
    let answer = [];

    const lotto0Count = (lottos.filter(num => num === 0)).length;

    const myLottoWinCount = lottos.filter((num) => win_nums.includes(num)).length;

    const highLottoWinCount = lotto0Count + myLottoWinCount;

    let lowRank = 0;
    let highRank = 0;

    switch (myLottoWinCount) {
        case 0:
        case 1:
            lowRank = 6;
            break;
        case 2:
            lowRank = 5;
            break;
        case 3:
            lowRank = 4;
            break;
        case 4:
            lowRank = 3;
            break;
        case 5:
            lowRank = 2;
            break;
        case 6:
            lowRank = 1;
            break;
        default:
            break;
    }

    switch (highLottoWinCount) {
        case 0:
        case 1:
            highRank = 6;
            break;
        case 2:
            highRank = 5;
            break;
        case 3:
            highRank = 4;
            break;
        case 4:
            highRank = 3;
            break;
        case 5:
            highRank = 2;
            break;
        case 6:
            highRank = 1;
            break;
        default:
            break;
    }

    answer.push(highRank, lowRank);

    return answer;
}




// ------------------------------------------------------------------

function solution2(lottos, win_nums) {
    
    // 맞은 수 : 0 1 2 3 4 5 6
    // 랭킹 수 : 6 6 5 4 3 2 1

    let answer = [];

    // 랭킹을 나타내는 배열 선언
    const rank = [6, 6, 5, 4, 3, 2, 1]
    //            0  1  2  3  4  5  6

    // lottos에서 내가 몇 개 맞췄는지 구하기
    const countMyLotto = lottos.filter((num) => win_nums.includes(num)).length;
    //                   [10, 20]

    // 내 로또 안에 0 번호 카운트
    const count0 = (lottos.filter(num => num === 0)).length;
    //              [0, 0]

    // answer 배열에 2가지 넣을 건데
    answer.push(rank[countMyLotto + count0], rank[countMyLotto]);
    //          rank[4],                     rank[2]

    return answer;
}


console.log(solution2([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution2([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution2([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));