// https://school.programmers.co.kr/learn/courses/30/lessons/181939
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
