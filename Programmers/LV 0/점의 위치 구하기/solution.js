// https://school.programmers.co.kr/learn/courses/30/lessons/120841
function solution(dot) {
    let [x, y] = dot;
    let check = x * y > 0;
    return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
