// https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
    // 짝수의 합 공식 : n (n + 1), n은 짝수의 개수
    let num = Math.floor(n / 2);
    return num * (num + 1);
}
