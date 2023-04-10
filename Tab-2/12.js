/*
신규 아이디 추천

1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/


function solution(new_id) {
    let answerList = [];
    let answer = '';

    // 일단 new_id 배열로 전환
    // let new_id_arr = new_id.split('');

    // 1단계. 대문자 -> 소문자로 치환 : .toLowerCase()
    // 2단계. 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거 : (condition) && replace(item, '')
    // 3단계. 마침표(.)가 연속되면 1개로 치환 
    // 4단계. 마침표(.)가 처음이나 끝에 위치한다면 제거
    // 5단계. new_id가 빈 값이라면 new_id에 a를 대입
    // 6단계. new_id의 길이가 16자 이상이면, 15개 문자를 제외한 나머지 문자들을 모두 제거
    //       만약 제거 후 마침표(.)가 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    // 7단계. new_id의 길이가 2자 이하라면 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기

    let _new_id = new_id;
    _new_id = new_id.toLowerCase();
    _new_id = _new_id.replace(/[^a-z0-9\-_\.]/g, '');
    _new_id = _new_id.replace(/\.{2,}/g, '.');
    _new_id = _new_id.replace(/^\.+|\.+$/g, '');
    // while (a.charAt(0) === '.') { // 맨 앞의 .을 제거
    //     a = a.slice(1);
    // }
    // while (a.charAt(a.length - 1) === '.') { // 맨 뒤의 .을 제거
    //     a = a.slice(0, -1);
    // }
    // for (; a.charAt(0) === '.';) { // 맨 앞의 .을 제거
    //     a = a.slice(1);
    // }
    // for (; a.charAt(a.length - 1) === '.';) { // 맨 뒤의 .을 제거
    //     a = a.slice(0, -1);
    // }
    _new_id = _new_id.length >= 16 && _new_id.slice(0, 15)
    _new_id = _new_id.replace(/^\.+|\.+$/g, '');
    if (_new_id.length <= 2) {while (_new_id.length < 3) {_new_id += _new_id.charAt(_new_id.length-1)}};




    // new_id_arr = new_id_arr.map(item => item.replace(/[^a-z\-_\.]/g,''))

    // for (let i = 0; i < new_id_arr.length; i++) {
    //     if (new_id_arr[i] !== '.') {break;}

    // }

    return _new_id
}

console.log(solution('12'));