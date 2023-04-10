// 모의고사 34

function solution(answers) {
    const answers  = [1, 2, 3, 4, 5]
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [0, 0, 0]; // 각 수포자들의 점수를 저장할 배열
  
    // 정답과 각 수포자들의 답안을 비교하여 점수 계산
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === pattern1[i % pattern1.length]) {
        scores[0]++;
      }
      if (answers[i] === pattern2[i % pattern2.length]) {
        scores[1]++;
      }
      if (answers[i] === pattern3[i % pattern3.length]) {
        scores[2]++;
      }
    }
  
    // 가장 높은 점수를 찾아서, 그 점수를 가진 수포자들의 번호를 배열에 저장
    const highestScore = Math.max(...scores);
    console.log('high', highestScore);

    // 
    const winners = [];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === highestScore) {
        winners.push(i + 1);
      }
    }
  
    return winners;
  }

  console.log(solution([1, 2, 3, 4, 5]));
  console.log(solution([1,3,2,4,2]))

  
  /*
위 코드에서, 각 수포자들의 찍는 패턴을 pattern1, pattern2, pattern3 배열에 저장합니다. 그리고 각 수포자들의 점수를 저장할 scores 배열을 0으로 초기화합니다.

이후, 반복문을 통해 정답과 각 수포자들의 답안을 비교하면서, 맞힌 문제의 수를 계산합니다. 이때 % 연산자를 사용하여, 수포자들의 답안 패턴이 정답 배열보다 짧은 경우, 패턴을 반복해서 사용할 수 있도록 합니다.

마지막으로, Math.max() 함수를 사용하여 가장 높은 점수를 찾고, 이를 가진 수포자들의 번호를 배열에 저장한 후, 이를 반환합니다.
  */